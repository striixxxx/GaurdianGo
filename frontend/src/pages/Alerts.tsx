import { useState } from "react";
import { AlertTriangle, Filter, CheckCircle, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const alertsData = [
  {
    id: "A001",
    tourist: "Sarah Johnson",
    type: "Panic Button",
    location: "Red Fort, Delhi",
    severity: "High",
    status: "Active",
    timestamp: "2024-01-15 14:32:15",
    description: "Emergency button pressed by tourist",
    coordinates: "28.6562, 77.2410",
  },
  {
    id: "A002",
    tourist: "Mike Chen", 
    type: "Geo-fence Breach",
    location: "Restricted Area, Mumbai",
    severity: "Medium",
    status: "Acknowledged",
    timestamp: "2024-01-15 14:17:42",
    description: "Tourist entered restricted zone without authorization",
    coordinates: "19.0760, 72.8777",
  },
  {
    id: "A003",
    tourist: "Emma Williams",
    type: "AI Anomaly Detection",
    location: "Taj Mahal, Agra",
    severity: "Low",
    status: "Resolved",
    timestamp: "2024-01-15 13:45:30",
    description: "Unusual movement pattern detected by AI system",
    coordinates: "27.1751, 78.0421",
  },
  {
    id: "A004",
    tourist: "Raj Patel",
    type: "Missing Person",
    location: "Hawa Mahal, Jaipur",
    severity: "High",
    status: "Active",
    timestamp: "2024-01-15 12:15:22",
    description: "Tourist missing for over 2 hours",
    coordinates: "26.9124, 75.7873",
  },
  {
    id: "A005",
    tourist: "Lisa Anderson",
    type: "Medical Emergency",
    location: "India Gate, Delhi", 
    severity: "High",
    status: "Acknowledged",
    timestamp: "2024-01-15 11:58:17",
    description: "Tourist reported medical emergency via app",
    coordinates: "28.6129, 77.2295",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "bg-destructive text-destructive-foreground";
    case "Medium": return "bg-warning text-warning-foreground";
    case "Low": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-destructive text-destructive-foreground";
    case "Acknowledged": return "bg-warning text-warning-foreground";
    case "Resolved": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Alerts() {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAlerts = alertsData.filter(alert => {
    const severityMatch = severityFilter === "All" || alert.severity === severityFilter;
    const statusMatch = statusFilter === "All" || alert.status === statusFilter;
    return severityMatch && statusMatch;
  });

  const handleAcknowledge = (alertId: string) => {
    // Handle acknowledgment logic
    console.log(`Acknowledged alert: ${alertId}`);
  };

  const handleResolve = (alertId: string) => {
    // Handle resolution logic
    console.log(`Resolved alert: ${alertId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Alerts & Incident Response</h1>
          <p className="text-muted-foreground">Monitor and respond to tourist safety incidents</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">{filteredAlerts.filter(a => a.status === "Active").length} Active</Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Severity</label>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="All">All Severities</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem  value="All">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Acknowledged">Acknowledged</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts Feed */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <Card key={alert.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-lg">{alert.tourist}</h3>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Alert Type</p>
                      <p className="font-medium">{alert.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <p className="font-medium">{alert.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Timestamp</p>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <p className="font-medium">{alert.timestamp}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Coordinates</p>
                      <p className="font-mono text-sm">{alert.coordinates}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="text-foreground">{alert.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2  ml-4">
                  {alert.status === "Active" && (
                    <Button className="bg-green-500"
                      size="sm" 
                      variant="outline"
                      onClick={() => handleAcknowledge(alert.id)}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Acknowledge
                    </Button>
                  )}
                  {alert.status !== "Resolved" && (
                    <Button 
                      size="sm"
                      onClick={() => handleResolve(alert.id)}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}