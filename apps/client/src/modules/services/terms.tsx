import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-8 gap-2">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground/70">Last updated: March 2024</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              By accessing and using Playday, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree
              to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Use License
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Playday for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mt-4">
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempting to decompile or reverse engineer any software
                contained on the site
              </li>
              <li>
                Removing any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transferring the materials to another person or 'mirroring' the
                materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account information and password and for restricting access to
              your computer. You agree to accept responsibility for all
              activities that occur under your account or password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              The materials on Playday are provided on an 'as is' basis. Playday
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Assumption of Risks
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Playday is a platform for coordinating sports activities. Users
              participate in sports and physical activities at their own risk.
              You assume all risks associated with sports participation,
              including but not limited to physical injury, illness, and
              property damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Modifications to Terms
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Playday may revise these terms of service for our site at any time
              without notice. By using this site, you are agreeing to be bound
              by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Contact Us
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at support@playday.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
