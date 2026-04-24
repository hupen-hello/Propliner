// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
// Components import kar rahe hain jo humne 'components' folder me banaye hain
import TopBar from "@/components/Topbar"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SEO Meta Tags (Yahan se har page ka default title aur description set hoga)
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
        
        {/* TopBar aur Navbar har page ke upar dikhenge */}
        <TopBar />
        <Navbar />

        {/* 'children' ka matlab hai ki jo bhi current page open hai, 
            uska content yahan render hoga (jaise page.tsx ya about/page.tsx) */}
        <main className="min-h-screen">
          {children} 
        </main>

        {/* Yahan aap apna Footer laga sakte hain aage chalkar */}
        <Footer />

      </body>
    </html>
  );
}