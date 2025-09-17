import { Users, AlertTriangle, MapPin, CheckCircle, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";
import { useState } from "react";

import index from "../index.css";
const kpiData = [
  {
    title: "Total Active Tourists",
    value: "2,847",
    icon: Users,
    trend: "+12% from last week",
    color: "text-primary",
  },
  {
    title: "Active Alerts Today",
    value: "23",
    icon: AlertTriangle,
    trend: "-5% from yesterday",
    color: "text-secondary",
  },
  {
    title: "High-Risk Zones",
    value: "8",
    icon: MapPin,
    trend: "2 new zones identified",
    color: "text-destructive",
  },
  {
    title: "Resolved Cases This Week",
    value: "156",
    icon: CheckCircle,
    trend: "+18% resolution rate",
    color: "text-success",
  },
];

const recentAlerts = [
  {
    id: 1,
    tourist: "Sarah Johnson",
    type: "Panic Button",
    location: "Red Fort, Delhi",
    severity: "High",
    time: "2 minutes ago",
  },
  {
    id: 2,
    tourist: "Mike Chen",
    type: "Geo-fence Breach",
    location: "Restricted Area, Mumbai",
    severity: "Medium",
    time: "15 minutes ago",
  },
  {
    id: 3,
    tourist: "Emma Williams",
    type: "AI Anomaly",
    location: "Taj Mahal, Agra",
    severity: "Low",
    time: "1 hour ago",
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


export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="space-y-6 ">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
    {/* Hamburger */}
    {/* <button 
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <Menu className="w-6 h-6 text-foreground" />
    </button> */}

    <div>
        
          <h1 className="text-3xl  text-gray-900 font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Tourist Safety Monitoring Overview</p>
        </div>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <Badge variant="destructive">3 New Alerts</Badge>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {kpi.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-secondary" />
            Real-time Alert Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-foreground">{alert.tourist}</h4>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {alert.type} • {alert.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}