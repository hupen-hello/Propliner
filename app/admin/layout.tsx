import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function SuperuserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]"> {/* Light gray background like image */}
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area (Offset by sidebar width) */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />
        
        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}