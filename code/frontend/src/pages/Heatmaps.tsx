import { Map, Users, AlertTriangle, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const touristClusters = [
  { location: "Red Fort, Delhi", count: 127, riskLevel: "Medium" },
  { location: "Taj Mahal, Agra", count: 89, riskLevel: "Low" },
  { location: "Gateway of India, Mumbai", count: 156, riskLevel: "High" },
  { location: "Hawa Mahal, Jaipur", count: 73, riskLevel: "Medium" },
  { location: "India Gate, Delhi", count: 92, riskLevel: "Low" },
];

const riskZones = [
  { name: "Old Delhi Market Area", level: "High", incidents: 12, coordinates: "28.6506, 77.2334" },
  { name: "Marine Drive Extension", level: "Medium", incidents: 5, coordinates: "18.9441, 72.8232" },
  { name: "Agra Fort Surroundings", level: "Low", incidents: 2, coordinates: "27.1795, 78.0211" },
  { name: "Pink City Outskirts", level: "High", incidents: 8, coordinates: "26.9157, 75.8040" },
];

const getRiskColor = (level: string) => {
  switch (level) {
    case "High": return "bg-destructive text-destructive-foreground";
    case "Medium": return "bg-warning text-warning-foreground";
    case "Low": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Heatmaps() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Heatmaps & Analytics</h1>
          <p className="text-muted-foreground">Visualize tourist distributions and risk zones</p>
        </div>
      </div>

      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="w-5 h-5 text-primary" />
            Interactive Tourist Safety Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Interactive Map View</h3>
              <p className="text-muted-foreground">
                Real-time tourist locations, risk zones, and incident clusters would be displayed here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Tourist Clusters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {touristClusters.map((cluster, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <h4 className="font-medium text-foreground">{cluster.location}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cluster.count} tourists currently in area
                    </p>
                  </div>
                  <Badge className={getRiskColor(cluster.riskLevel)}>
                    {cluster.riskLevel}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-secondary" />
              High-Risk Zones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskZones.map((zone, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-4 h-4 text-secondary" />
                      <h4 className="font-medium text-foreground">{zone.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {zone.incidents} incidents this month
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {zone.coordinates}
                    </p>
                  </div>
                  <Badge className={getRiskColor(zone.level)}>
                    {zone.level} Risk
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}