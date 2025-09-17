import { ReactNode } from "react";
import { SidebarProvider , SidebarTrigger} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
 import { Menu } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#b2cae8] flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
        {/* 👇 Hamburger trigger for sidebar */}
          <button className="p-2  rounded-md hover:bg-gray-100 md:hidden">
            <SidebarTrigger>
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
          </button>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}