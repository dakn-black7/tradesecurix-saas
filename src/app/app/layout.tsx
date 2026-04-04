import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const hasSession = cookies().get('tradesecurix_session')?.value === 'active'

  if (!hasSession) {
    redirect('/auth/login')
  }

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
