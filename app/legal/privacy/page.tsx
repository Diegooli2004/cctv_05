import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"
import { constructMetadata } from "@/components/seo/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy - CCTV Installers Near Me",
  description: "Learn how we collect, use, and protect your personal information when you use our CCTV installation services platform.",
})

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" breadcrumbLabel="Privacy">
      <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
      <p className="mb-6">
        We collect information that you provide directly to us, including:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Name and contact information</li>
        <li>Location data</li>
        <li>Service preferences and requirements</li>
        <li>Communication history</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
      <p className="mb-6">
        We use the collected information to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Connect you with CCTV installation professionals</li>
        <li>Improve our services</li>
        <li>Send relevant communications</li>
        <li>Ensure platform security</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
      <p className="mb-6">
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
      <p className="mb-6">
        We may share your information with:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>CCTV installation service providers</li>
        <li>Service partners and vendors</li>
        <li>Legal authorities when required</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <p className="mb-6">
        You have the right to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Access your personal information</li>
        <li>Request corrections or deletions</li>
        <li>Opt-out of marketing communications</li>
        <li>Data portability</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
      <p className="mb-6">
        We use cookies and similar technologies. For more information, please see our Cookie Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
      <p className="mb-6">
        Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
      <p className="mb-6">
        We may update this policy periodically. We will notify you of any material changes by posting the new policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="mb-6">
        For questions about this Privacy Policy, please contact us at privacy@cctvinstallersnearme.com.
      </p>
    </LegalLayout>
  )
}
