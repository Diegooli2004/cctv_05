import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"
import { constructMetadata } from "@/components/seo/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service - CCTV Installers Near Me",
  description: "Read our terms of service to understand the rules and guidelines for using our CCTV installation services platform.",
})

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" breadcrumbLabel="Terms">
      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By accessing and using cctvinstallersnearme.com ("the Website"), you accept and agree to be bound by these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
      <p className="mb-6">
        The Website provides a platform connecting users with CCTV installation professionals. We do not provide installation services directly but facilitate connections between users and service providers.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account</li>
        <li>Use the service in compliance with applicable laws</li>
        <li>Not engage in fraudulent or deceptive practices</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Service Providers</h2>
      <p className="mb-6">
        Service providers listed on our platform are independent contractors. We are not responsible for their services, actions, or omissions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
      <p className="mb-6">
        All content on the Website is protected by copyright and other intellectual property rights owned by or licensed to us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
      <p className="mb-6">
        We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
      <p className="mb-6">
        We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
      <p className="mb-6">
        We reserve the right to modify these terms at any time. Continued use of the Website after changes constitutes acceptance of the modified terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
      <p className="mb-6">
        These terms are governed by and construed in accordance with the laws of the United States.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
      <p className="mb-6">
        For questions about these Terms of Service, please contact us at legal@cctvinstallersnearme.com.
      </p>
    </LegalLayout>
  )
}
