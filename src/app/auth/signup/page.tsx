import Link from 'next/link'
import { ArrowRight, UserPlus } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="card text-center">
          <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus className="text-blue-500" size={28} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Request workspace access</h1>
          <p className="text-gray-400 mb-6">
            Tradesecurix workspace access is shared during onboarding and customer setup. Contact us if you want to evaluate the product or request access for your organization.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request Access <ArrowRight size={20} />
            </Link>
            <Link href="/auth/login" className="btn-secondary inline-flex items-center gap-2">
              Back to Login
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Questions about onboarding? Email <a className="text-blue-400 hover:text-blue-300" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </p>
      </div>
    </div>
  )
}
