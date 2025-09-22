import { 
  LayoutDashboard, 
  Users, 
  AlertTriangle, 
  Map, 
  FileText, 
  Settings 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Tourist Management", url: "/tourists", icon: Users },
  { title: "Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Heatmaps", url: "/heatmaps", icon: Map },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-7 bg-gray-800 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-xl bg-gradient-to-r from-blue-500 to-white  bg-clip-text text-transparent text-sm">GuardianGo</h2>
            
            <p className="text-xs text-gray-200 text-muted-foreground">Monitoring System</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className=" pt-5 pr-7 pb-5 pl-5 bg-gray-800 text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-xl text-white-600">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-5 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "hover:bg-accent text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}