import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const [fromLocation] = useQueryState(
    "from",
    parseAsString.withDefault("/auth/login"),
  );

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link to={fromLocation}>
          <Button variant="ghost" size="sm" className="mb-8 gap-2">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70">Last updated: March 2024</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Playday ("we" or "us" or "our") operates the Playday website (the
              "Site") and Playday mobile application (the "App"). This page
              informs you of our policies regarding the collection, use, and
              disclosure of personal data when you use our Service and the
              choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Information Collection and Use
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside text-foreground/70 space-y-2">
              <li>Email address and name (from Google authentication)</li>
              <li>Sports interests and skill levels</li>
              <li>Availability preferences</li>
              <li>Session history and attendance records</li>
              <li>Ratings and reviews you provide</li>
              <li>Messages and communications with other users</li>
              <li>Device and usage information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Use of Data
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Playday uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mt-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so we can improve our
                Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Security of Data
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Changes to This Privacy Policy
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date at the top of this Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Contact Us
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@playday.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
