import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaAngleDoubleRight } from "react-icons/fa";

export default function TermsOfServicePage() {
  // Terms ka saara data yahan hai taaki code clean rahe
  const termsData = [
    {
      title: "1. Services We Provide",
      content:
        "Propliners Realty provides consultancy and workplace setup solutions for commercial and industrial real estate, including property sourcing, legal verification, documentation, and investor/buyer assistance. Specific service details may be outlined in separate written agreements.",
    },
    {
      title: "2. Eligibility",
      content:
        "To use our services, you must be at least 18 years old and have the legal capacity to enter into contracts. By using our services, you confirm that you meet these requirements.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "You agree to provide accurate, current, and complete information when requested. You will not use our services for any unlawful or prohibited purposes. You are responsible for complying with local laws, regulations, and property-related requirements applicable to your transactions. You agree not to interfere with or disrupt the functioning of our website, servers, or networks.",
    },
    {
      title: "4. Property Listings & Information Accuracy",
      content:
        "We strive to keep all property listings and information up to date. However, we do not guarantee the accuracy, completeness, or availability of any property data and are not responsible for errors or omissions. Property availability is subject to change without notice.",
    },
    {
      title: "5. Fees & Payments",
      content:
        "Any fees, commissions, or charges for our services will be communicated clearly in writing before we begin work. Payment terms and due dates will be specified in your agreement or invoice. Late payments may be subject to penalties as allowed by law.",
    },
    {
      title: "6. Legal Checks & Documentation",
      content:
        "We conduct legal checks and prepare documentation in accordance with local authority norms to ensure secure transactions. However, final responsibility for reviewing and approving documentation lies with the client and their legal counsel.",
    },
    {
      title: "7. Confidentiality",
      content:
        "We respect your confidentiality and will not disclose sensitive information to third parties except as required by law or as necessary to perform our services.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, Propliners Realty will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services. Our total liability in any matter related to the services will be limited to the amount paid by you for the specific service giving rise to the claim.",
    },
    {
      title: "9. Third-Party Services",
      content:
        "Our website and services may include links to or integrate with third-party services. We are not responsible for the content, accuracy, or practices of those third parties. Use of third-party services is at your own risk and subject to their terms.",
    },
    {
      title: "10. Intellectual Property",
      content:
        "All website content, branding, logos, and materials created by Propliners Realty are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or otherwise use them without our written consent.",
    },
    {
      title: "11. Termination",
      content:
        "We reserve the right to suspend or terminate access to our services at our discretion, without prior notice, for conduct that violates these Terms or is otherwise harmful to our interests or the interests of others.",
    },
    {
      title: "12. Changes to Terms",
      content:
        'We may update these Terms from time to time. Any changes will be posted on this page with a revised "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised Terms.',
    },
    {
      title: "13. Governing Law",
      content:
        "These Terms are governed by and construed in accordance with the laws of Noida, Uttar Pradesh, India. Any disputes will be subject to the exclusive jurisdiction of the courts in Noida.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* --- 1. INNER PAGE HERO & BREADCRUMB --- */}
      {/* (Same as About Us / Contact Us to keep design consistent) */}
      <section className="relative w-full h-[200px] md:h-[250px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[70px] lg:mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://propliners.in/assets/img/breadcrumb/01.webp"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide uppercase">
            Terms & Conditions
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />
            <span className="text-[#EF4444]">Terms</span>
          </div>
        </div>
      </section>

      {/* --- 2. TERMS CONTENT SECTION --- */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Info */}
          <div className="border-b border-gray-200 pb-8 mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Terms of Service
            </h2>
            <p className="text-gray-500 text-sm mb-1">
              Last updated: August 12, 2025
            </p>
            <p className="text-[#EF4444] text-sm font-semibold mb-6">
              Propliners Realty - Commercial & Industrial Real-estate
              Consultancy
            </p>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              These Terms of Service ("Terms") govern your use of the services,
              website, and property consultancy provided by Propliners Realty
              ("we", "our", "us"). By accessing or using our website or
              services, you agree to be bound by these Terms. If you do not
              agree with these Terms, you should not use our services.
            </p>
          </div>

          {/* Dynamic Content List */}
          <div className="space-y-8">
            {termsData.map((term, index) => (
              <div key={index} className="group">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#EF4444] transition-colors">
                  {term.title}
                </h3>
                {/* Note: Point 3 me multiple lines thi, split karke map kar rahe hain 
                  taaki proper paragraph spacing aaye.
                */}
                <div className="text-gray-600 text-[15px] leading-relaxed space-y-2">
                  {term.content.split(". ").map((sentence, i, arr) => (
                    // Last item me extra dot lagane se bachne ki logic
                    <p key={i}>
                      {sentence}
                      {i !== arr.length - 1 ? "." : ""}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer / Contact Section of Terms */}
          <div className="mt-16 pt-8 border-t border-gray-200 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm mb-2">
              If you have questions or concerns about these Terms, please
              contact:
            </p>
            <a
              href="mailto:sales@propliners.in"
              className="text-[#EF4444] font-semibold hover:underline"
            >
              sales@propliners.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
