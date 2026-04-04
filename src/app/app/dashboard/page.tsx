import Link from 'next/link'
import { BarChart3, FileText, AlertCircle, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back. Here is your review workflow overview.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Documents reviewed</p>
              <p className="text-3xl font-bold">1,247</p>
            </div>
            <FileText className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Escalations raised</p>
              <p className="text-3xl font-bold text-red-500">23</p>
            </div>
            <AlertCircle className="text-red-500" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Companies reviewed</p>
              <p className="text-3xl font-bold">456</p>
            </div>
            <TrendingUp className="text-green-500" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Average risk score</p>
              <p className="text-3xl font-bold">32</p>
            </div>
            <BarChart3 className="text-yellow-500" size={32} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card border-2 border-dashed border-gray-700">
          <h3 className="text-lg font-bold mb-4">Quick actions</h3>
          <div className="space-y-3">
            <Link href="/app/upload" className="block btn-primary text-center">
              Upload Document
            </Link>
            <Link href="/app/verification" className="block btn-secondary text-center">
              Verify Company
            </Link>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-4">Recent activity</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span className="text-gray-400">Invoice_2024_001.pdf reviewed</span>
              <span className="text-green-500">Cleared</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span className="text-gray-400">Acme Corp checked</span>
              <span className="text-green-500">Reviewed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">PO_2024_156.docx reviewed</span>
              <span className="text-yellow-500">Needs follow-up</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-blue-500/10 border-blue-500/20">
        <p className="text-sm text-gray-300">
          Review note: use the upload workflow to capture supporting observations and preserve a cleaner audit trail for your team.
        </p>
      </div>
    </div>
  )
}
