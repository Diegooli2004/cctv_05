import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"
import { constructMetadata } from "@/components/seo/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Cookie Policy - CCTV Installers Near Me",
  description: "Learn about how we use cookies and similar technologies on our CCTV installation services platform.",
})

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" breadcrumbLabel="Cookies">
      <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
      <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
      <p className="mb-4">
        Required for the website to function properly. These cannot be disabled.
      </p>

      <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
      <p className="mb-4">
        Help us understand how visitors interact with our website by collecting anonymous information.
      </p>

      <h3 className="text-xl font-semibold mb-3">Functionality Cookies</h3>
      <p className="mb-4">
        Remember your preferences and enable enhanced features.
      </p>

      <h3 className="text-xl font-semibold mb-3">Targeting Cookies</h3>
      <p className="mb-6">
        Used to deliver relevant advertisements and track campaign performance.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Remember your preferences</li>
        <li>Improve website performance</li>
        <li>Analyze user behavior</li>
        <li>Provide personalized content</li>
        <li>Enable social media features</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
      <p className="mb-6">
        You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
      <p className="mb-6">
        We use third-party services that may set cookies on your device. These services include:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Google Analytics</li>
        <li>Social media platforms</li>
        <li>Advertising partners</li>
        <li>Payment processors</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">6. Cookie Consent</h2>
      <p className="mb-6">
        By using our website, you consent to the use of cookies as described in this policy. You can withdraw consent by adjusting your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Updates to Cookie Policy</h2>
      <p className="mb-6">
        We may update this policy periodically. Please review it regularly for any changes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p className="mb-6">
        For questions about our Cookie Policy, please contact us at privacy@cctvinstallersnearme.com.
      </p>
    </LegalLayout>
  )
}
