import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";
import { Outlet, Navigate } from "react-router-dom";

export function Layout() {
  // 🔑 Check if user is logged in (simple localStorage flag)
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#b2cae8] flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
          {/* 👇 Hamburger trigger for sidebar */}
          <button className="p-2 rounded-md hover:bg-gray-100 md:hidden">
            <SidebarTrigger>
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
          </button>

          {/* 👇 This is where nested routes (Dashboard, Alerts, etc.) will appear */}
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}