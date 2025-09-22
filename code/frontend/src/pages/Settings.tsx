import { Settings as SettingsIcon, Users, Globe, Link, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const userRoles = [
  { name: "Admin", permissions: "Full system access", users: 3, color: "bg-primary" },
  { name: "Police Officer", permissions: "Alert response & tourist management", users: 12, color: "bg-secondary" },
  { name: "Tourism Officer", permissions: "Tourist data & reporting", users: 8, color: "bg-success" },
  { name: "Viewer", permissions: "Read-only dashboard access", users: 15, color: "bg-muted" },
];

const languages = [
  { code: "en", name: "English", enabled: true },
  { code: "hi", name: "Hindi", enabled: true },
  { code: "bn", name: "Bengali", enabled: false },
  { code: "te", name: "Telugu", enabled: false },
  { code: "mr", name: "Marathi", enabled: false },
  { code: "ta", name: "Tamil", enabled: false },
];

const integrations = [
  { name: "AI Anomaly Detection", status: "Connected", description: "Machine learning for behavior analysis" },
  { name: "Blockchain Identity", status: "Connected", description: "Secure digital identity verification" },
  { name: "IoT Sensors Network", status: "Pending", description: "Physical sensors for location tracking" },
  { name: "Emergency Services", status: "Connected", description: "Direct connection to local emergency services" },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Configure system settings and integrations</p>
        </div>
      </div>

      {/* User Role Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            User Role Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userRoles.map((role, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                  <div>
                    <h4 className="font-medium text-foreground">{role.name}</h4>
                    <p className="text-sm text-muted-foreground">{role.permissions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{role.users} users</Badge>
                  <Button className="bg-blue-400" size="sm" variant="outline">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Multilingual Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground ml-2">({lang.code})</span>
                </div>
                <Switch  checked={lang.enabled} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="w-5 h-5 text-primary" />
            API Integrations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium text-foreground">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    className={
                      integration.status === "Connected" 
                        ? "bg-success text-success-foreground"
                        : "bg-warning text-warning-foreground"
                    }
                  >
                    {integration.status}
                  </Badge>
                  <Button className="bg-gray-300" size="sm" variant="outline">Configure</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}