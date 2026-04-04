import { redirect } from 'next/navigation'

export default function VerificationRedirect() {
  redirect('/auth/login')
}
