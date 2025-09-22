import { useState, useEffect } from "react";
import { Search, Eye, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Safe": return "bg-success text-success-foreground";
    case "At Risk": return "bg-warning text-warning-foreground";
    case "Missing": return "bg-destructive text-destructive-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getSafetyScoreColor = (score: number) => {
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-warning";
  return "text-destructive";
};

export default function TouristManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tourists, setTourists] = useState<any[]>([]); 

  useEffect(() => {
    const fetchTourists = async () => {
      try {
        const res = await fetch("/tourists/"); 
        const data = await res.json();
        setTourists(data);
      } catch (err) {
        console.error("Error fetching tourists:", err);
      }
    };
    fetchTourists();
  }, []);

  const filteredTourists = tourists.filter((tourist) =>
    tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.digitalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tourist Management</h1>
          <p className="text-muted-foreground">Monitor and manage tourist safety status</p>
        </div>
      </div>

      {/* Search Bar */}
      <Card>
        <CardHeader>
          <CardTitle>Search Tourists</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, digital ID, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-200"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tourist Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Tourists ({filteredTourists.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Digital ID</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Current Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Safety Score</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTourists.map((tourist) => (
                <TableRow key={tourist.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{tourist.name}</TableCell>
                  <TableCell className="font-mono text-sm">{tourist.digitalId}</TableCell>
                  <TableCell>{tourist.country}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm">{tourist.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(tourist.status)}>
                      {tourist.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getSafetyScoreColor(tourist.safetyScore)}`}>
                      {tourist.safetyScore}%
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{tourist.lastSeen}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button className="bg-indigo-400" size="sm" variant="outline">
                        <Eye className="w-3 h-3 mr-1 " />
                        View
                      </Button>
                      <Button className="bg-indigo-400" size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
