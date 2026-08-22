import { Shield, LockKeyhole, FileCheck2 } from "lucide-react";

export default function Security() {
  return (
    <section id="security" className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Security by design</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            TradeSecurix is being built to handle sensitive trade-review workflows with controlled access, clear accountability and responsible data handling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-7">
            <Shield className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">Authenticated access</h3>
            <p className="text-zinc-400">
              User access is handled through the application authentication layer, with protected areas separated from the public site.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-7">
            <LockKeyhole className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">Secure transport</h3>
            <p className="text-zinc-400">
              The production site is served over HTTPS. Additional controls will be documented as the platform and infrastructure mature.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-7">
            <FileCheck2 className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-bold mb-3">Human review remains central</h3>
            <p className="text-zinc-400">
              Findings are decision-support signals. They do not replace legal, compliance, credit or underwriting judgment.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/40 p-7">
          <h3 className="text-lg font-bold mb-3">Compliance roadmap</h3>
          <p className="text-zinc-400 leading-relaxed">
            Formal certifications, regulatory claims and third-party compliance attestations will only be published after they are completed and independently verifiable.
          </p>
        </div>
      </div>
    </section>
  );
}
