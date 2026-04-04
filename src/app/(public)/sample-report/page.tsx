import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2, FileSearch, ShieldAlert } from 'lucide-react'

const findings = [
  {
    level: 'High',
    title: 'Beneficiary details changed between invoice versions',
    detail:
      'The submitted invoice contains different bank beneficiary information than the earlier payment instruction referenced in the document set.',
  },
  {
    level: 'Medium',
    title: 'Shipment details are inconsistent across supporting files',
    detail:
      'Container references and consignee details do not fully align between the bill of lading and the packing list.',
  },
  {
    level: 'Medium',
    title: 'Counterparty identifiers need confirmation',
    detail:
      'Company details appear incomplete and require manual verification before funds are released.',
  },
]

const evidence = [
  {
    source: 'Commercial invoice',
    observation: 'Beneficiary account name differs from prior submission',
    signal: 'Payment redirection risk',
  },
  {
    source: 'Bill of lading',
    observation: 'Consignee details mismatch the invoice party details',
    signal: 'Document inconsistency',
  },
  {
    source: 'Packing list',
    observation: 'Shipment references do not fully reconcile with transport document',
    signal: 'Requires manual review',
  },
]

export default function SampleReportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-4">Public sample</p>
        <h1 className="text-5xl font-bold mb-6">Sample fraud analysis report</h1>
        <p className="text-xl text-gray-400">
          An example of how Tradesecurix presents risk summary, key findings, and supporting observations for a trade document review.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-8">
        <section className="card">
          <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
            <div>
              <p className="text-sm text-gray-400 mb-2">Review summary</p>
              <h2 className="text-3xl font-bold">Elevated review required</h2>
              <p className="text-gray-400 mt-3 max-w-2xl">
                This example report shows a multi-document review where payment instructions, party details, and shipment references require manual confirmation before approval.
              </p>
            </div>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-5 min-w-[220px]">
              <p className="text-sm text-gray-300 mb-2">Risk summary</p>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-red-400">72</span>
                <span className="text-lg text-red-300 mb-1">High</span>
              </div>
              <p className="text-sm text-gray-400 mt-3">Recommendation: pause payment and complete manual validation.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
              <p className="text-sm text-gray-400 mb-2">Documents reviewed</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-500 mt-2">Invoice, bill of lading, packing list</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
              <p className="text-sm text-gray-400 mb-2">Findings raised</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-500 mt-2">1 high priority, 2 follow-up items</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
              <p className="text-sm text-gray-400 mb-2">Decision state</p>
              <p className="text-2xl font-bold">Escalate</p>
              <p className="text-sm text-gray-500 mt-2">Hold until supporting checks are complete</p>
            </div>
          </div>
        </section>

        <section className="card">
          <p className="text-sm text-gray-400 mb-2">Recommended next actions</p>
          <h2 className="text-2xl font-bold mb-6">What a reviewer should do next</h2>
          <div className="space-y-5">
            <div className="flex gap-3">
              <ShieldAlert className="text-red-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm">Confirm beneficiary details using an approved out-of-band contact method before payment is released.</p>
            </div>
            <div className="flex gap-3">
              <FileSearch className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm">Reconcile party names, consignee details, and shipment references across the full trade packet.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm">Capture the final decision and supporting evidence for finance, compliance, and audit stakeholders.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-6">Key findings</h2>
        <div className="space-y-4">
          {findings.map((finding) => (
            <div key={finding.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full ${
                    finding.level === 'High'
                      ? 'bg-red-500/15 text-red-300'
                      : 'bg-yellow-500/15 text-yellow-300'
                  }`}
                >
                  {finding.level}
                </span>
                <h3 className="font-semibold">{finding.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{finding.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-10">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-blue-400" size={20} />
          <h2 className="text-2xl font-bold">Evidence and traceability</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="py-3 pr-4">Source</th>
                <th className="py-3 pr-4">Observation</th>
                <th className="py-3">Risk signal</th>
              </tr>
            </thead>
            <tbody>
              {evidence.map((item) => (
                <tr key={item.source} className="border-b border-gray-900 last:border-0">
                  <td className="py-4 pr-4 text-white">{item.source}</td>
                  <td className="py-4 pr-4 text-gray-300">{item.observation}</td>
                  <td className="py-4 text-gray-400">{item.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center py-8">
        <p className="text-gray-500 mb-6">
          This page uses illustrative example data only and does not represent a real customer file.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Demo <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Contact Sales <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
