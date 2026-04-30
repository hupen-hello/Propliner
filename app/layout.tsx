// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/Topbar"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SEO Meta Tags
export const metadata: Metadata = {
  title: "PL Realty - Commercial & Office Spaces",
  description: "Find the best IT/Corporate Parks, Office Spaces, and Co-working spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900">
        
        {/* Ye components hamesha render honge, par ye khud decide karenge ki inko /superuser par dikhna hai ya nahi */}
        <TopBar />
        <Navbar />
       
        <main className="min-h-screen">
          {children} 
        </main>
        
        <Footer />

      </body>
    </html>
  );
}