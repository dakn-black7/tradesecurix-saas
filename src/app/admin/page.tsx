import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Shield, Users, DollarSign, Activity, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

// Mock data — in production, query your database
const MOCK_USERS = [
  { id: "u1", name: "Sarah Chen", email: "sarah.chen@globalfreight.com", plan: "Pro ($99)", status: "Active", joinedAt: "Apr 1, 2026", usage: 142 },
  { id: "u2", name: "Marcus Okonkwo", email: "m.okonkwo@tradelane.ng", plan: "Enterprise ($299)", status: "Active", joinedAt: "Mar 18, 2026", usage: 891 },
  { id: "u3", name: "Elena Petrova", email: "elena@eurotrade.eu", plan: "Starter ($29)", status: "Trial", joinedAt: "Apr 10, 2026", usage: 11 },
  { id: "u4", name: "James Whitfield", email: "jwhitfield@harborcorp.com", plan: "Advanced ($149)", status: "Active", joinedAt: "Feb 22, 2026", usage: 324 },
  { id: "u5", name: "Priya Nair", email: "priya.nair@intltrade.in", plan: "Pro ($99)", status: "Active", joinedAt: "Mar 5, 2026", usage: 217 },
  { id: "u6", name: "David Lim", email: "david.lim@apaclogistics.sg", plan: "Global ($399)", status: "Active", joinedAt: "Jan 14, 2026", usage: 1204 },
  { id: "u7", name: "Fatima Al-Rashid", email: "f.alrashid@menafinance.ae", plan: "Starter ($29)", status: "Cancelled", joinedAt: "Apr 3, 2026", usage: 5 },
];

const PLAN_DISTRIBUTION = [
  { plan: "Doc Starter ($29)", count: 28, revenue: 812, color: "bg-blue-400" },
  { plan: "Doc Pro ($99)", count: 45, revenue: 4455, color: "bg-blue-600" },
  { plan: "Doc Enterprise ($299)", count: 12, revenue: 3588, color: "bg-blue-800" },
  { plan: "Verify Basic ($49)", count: 19, revenue: 931, color: "bg-violet-400" },
  { plan: "Verify Advanced ($149)", count: 22, revenue: 3278, color: "bg-violet-600" },
  { plan: "Verify Global ($399)", count: 8, revenue: 3192, color: "bg-violet-800" },
];

const TOTAL_REVENUE = PLAN_DISTRIBUTION.reduce((sum, p) => sum + p.revenue, 0);
const TOTAL_USERS = MOCK_USERS.length;
const ACTIVE_SUBS = MOCK_USERS.filter(u => u.status === "Active").length;
const TOTAL_ANALYSES = MOCK_USERS.reduce((sum, u) => sum + u.usage, 0);

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-300",
  Trial: "bg-amber-500/10 text-amber-300",
  Cancelled: "bg-red-500/10 text-red-300",
};

const statusIcon: Record<string, React.ReactNode> = {
  Active: <CheckCircle2 className="h-3.5 w-3.5" />,
  Trial: <Clock className="h-3.5 w-3.5" />,
  Cancelled: <AlertTriangle className="h-3.5 w-3.5" />,
};

export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  // In production: check if user has admin role
  // const isAdmin = await checkAdminRole(userId);
  // if (!isAdmin) redirect("/dashboard");

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <section className="rounded-3xl border border-gray-800 bg-gray-900/95 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-300">
                <Shield className="h-4 w-4" />
                Admin Console
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">Platform Overview</h1>
              <p className="mt-2 text-sm text-zinc-400">Monitor users, subscriptions, revenue, and usage metrics.</p>
            </div>
            <div className="text-xs text-zinc-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Total Users</p>
              <div className="rounded-xl bg-blue-600/10 p-2 text-blue-300"><Users className="h-5 w-5" /></div>
            </div>
            <p className="mt-4 text-4xl font-semibold text-white">{TOTAL_USERS}</p>
            <p className="mt-2 text-xs text-zinc-500">Registered accounts</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Active Subs</p>
              <div className="rounded-xl bg-emerald-600/10 p-2 text-emerald-300"><Activity className="h-5 w-5" /></div>
            </div>
            <p className="mt-4 text-4xl font-semibold text-white">{ACTIVE_SUBS}</p>
            <p className="mt-2 text-xs text-zinc-500">Paying subscribers</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">MRR</p>
              <div className="rounded-xl bg-violet-600/10 p-2 text-violet-300"><DollarSign className="h-5 w-5" /></div>
            </div>
            <p className="mt-4 text-4xl font-semibold text-white">${TOTAL_REVENUE.toLocaleString()}</p>
            <p className="mt-2 text-xs text-zinc-500">Monthly recurring revenue</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Analyses</p>
              <div className="rounded-xl bg-amber-600/10 p-2 text-amber-300"><TrendingUp className="h-5 w-5" /></div>
            </div>
            <p className="mt-4 text-4xl font-semibold text-white">{TOTAL_ANALYSES.toLocaleString()}</p>
            <p className="mt-2 text-xs text-zinc-500">Total platform usage</p>
          </div>
        </section>

        {/* Plan Distribution */}
        <section className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Plan Distribution</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Revenue by Plan</h2>
          <div className="mt-6 space-y-4">
            {PLAN_DISTRIBUTION.map((p) => {
              const pct = Math.round((p.count / PLAN_DISTRIBUTION.reduce((s, x) => s + x.count, 0)) * 100);
              return (
                <div key={p.plan} className="flex items-center gap-4">
                  <div className="w-40 shrink-0 text-sm text-zinc-300">{p.plan}</div>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-800">
                    <div className={`h-full rounded-full ${p.color} transition-all`} style={{ width: `${pct}%` }} />
                  </div>
                  <div className="w-14 text-right text-sm font-semibold text-white">{p.count}</div>
                  <div className="w-20 text-right text-sm text-zinc-400">${p.revenue.toLocaleString()}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Users Table */}
        <section className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">User management</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">All Users</h2>
            </div>
            <div className="text-sm text-zinc-400">{TOTAL_USERS} total accounts</div>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-gray-800 bg-gray-950">
            <table className="min-w-full divide-y divide-gray-800 text-left text-sm text-zinc-300">
              <thead className="bg-gray-900/90 text-zinc-400">
                <tr>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Joined</th>
                  <th className="px-6 py-4 font-medium text-right">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950">
                {MOCK_USERS.map((user) => (
                  <tr key={user.id} className="transition hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{user.name}</div>
                      <div className="text-xs text-zinc-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 text-zinc-300">{user.plan}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[user.status]}`}>
                        {statusIcon[user.status]}
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{user.joinedAt}</td>
                    <td className="px-6 py-4 text-right font-semibold text-white">{user.usage.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="rounded-3xl border border-gray-800 bg-gray-900 p-6 text-sm text-zinc-500">
          <p>TradeSecurix Admin Console · Confidential · For authorized personnel only.</p>
          <p className="mt-2 text-zinc-400">Connect your database (e.g., Supabase, PlanetScale, MongoDB) to display live user and subscription data.</p>
        </footer>
      </div>
    </main>
  );
}
