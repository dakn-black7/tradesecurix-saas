"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, Show } from "@clerk/nextjs";
import {
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  Activity,
  Crown,
} from "lucide-react";

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const mockUsers = [
  {
    id: "u1",
    name: "Alexandra Chen",
    email: "a.chen@meridiangroup.com",
    plan: "Enterprise",
    status: "Active",
    docsAnalyzed: 142,
    joinDate: "Jan 12, 2026",
    revenue: "$299",
  },
  {
    id: "u2",
    name: "James Okafor",
    email: "j.okafor@havenlogistics.ng",
    plan: "Pro",
    status: "Active",
    docsAnalyzed: 87,
    joinDate: "Feb 3, 2026",
    revenue: "$99",
  },
  {
    id: "u3",
    name: "Sophia Müller",
    email: "s.muller@tradefinanz.de",
    plan: "Pro",
    status: "Trial",
    docsAnalyzed: 14,
    joinDate: "Apr 20, 2026",
    revenue: "$0",
  },
  {
    id: "u4",
    name: "Carlos Reyes",
    email: "c.reyes@exportlink.mx",
    plan: "Starter",
    status: "Active",
    docsAnalyzed: 38,
    joinDate: "Mar 1, 2026",
    revenue: "$29",
  },
  {
    id: "u5",
    name: "Priya Nair",
    email: "p.nair@tradebridge.in",
    plan: "Verify Global",
    status: "Active",
    docsAnalyzed: 0,
    joinDate: "Apr 10, 2026",
    revenue: "$399",
  },
  {
    id: "u6",
    name: "Marcus Leroy",
    email: "m.leroy@secufinance.fr",
    plan: "Verify Advanced",
    status: "Active",
    docsAnalyzed: 0,
    joinDate: "Mar 15, 2026",
    revenue: "$149",
  },
];

const planDistribution = [
  { plan: "Enterprise", count: 1, color: "bg-blue-600" },
  { plan: "Pro", count: 2, color: "bg-indigo-500" },
  { plan: "Starter", count: 1, color: "bg-sky-400" },
  { plan: "Verify Global", count: 1, color: "bg-emerald-500" },
  { plan: "Verify Advanced", count: 1, color: "bg-amber-500" },
  { plan: "Trial", count: 1, color: "bg-zinc-500" },
];

const totalMonthlyRevenue = mockUsers
  .filter((u) => u.status !== "Trial")
  .reduce((sum, u) => sum + parseInt(u.revenue.replace("$", ""), 10), 0);

const statusClasses: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-300",
  Trial: "bg-amber-500/10 text-amber-300",
  Cancelled: "bg-red-500/10 text-red-300",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  iconClass,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  iconClass?: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          {sub && <p className="mt-2 text-sm text-zinc-500">{sub}</p>}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass ?? "bg-blue-600/10 text-blue-400"}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function AdminContent() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-200">
                <Crown className="h-4 w-4" />
                Admin Dashboard
              </div>
              <h1 className="mt-4 text-3xl font-semibold text-white">Platform Overview</h1>
              <p className="mt-2 text-sm text-zinc-400">
                Monitor users, subscriptions, and revenue across TradeSecurix.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950 px-6 py-4 text-right">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">MRR</p>
              <p className="mt-1 text-2xl font-bold text-white">${totalMonthlyRevenue.toLocaleString()}</p>
              <p className="text-xs text-zinc-500">/month (excl. trials)</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total Users"
            value={String(mockUsers.length)}
            sub={`${mockUsers.filter((u) => u.status === "Trial").length} in trial`}
            iconClass="bg-blue-600/10 text-blue-400"
          />
          <StatCard
            icon={DollarSign}
            label="Monthly Revenue"
            value={`$${totalMonthlyRevenue.toLocaleString()}`}
            sub="Active subscriptions"
            iconClass="bg-emerald-600/10 text-emerald-400"
          />
          <StatCard
            icon={Activity}
            label="Docs Analyzed"
            value={String(mockUsers.reduce((s, u) => s + u.docsAnalyzed, 0))}
            sub="This month"
            iconClass="bg-amber-600/10 text-amber-400"
          />
          <StatCard
            icon={Shield}
            label="Active Plans"
            value={String(mockUsers.filter((u) => u.status === "Active").length)}
            sub="Paying subscribers"
            iconClass="bg-purple-600/10 text-purple-400"
          />
        </div>

        {/* Revenue + Plan Distribution */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Revenue Trend (mock bar chart) */}
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Revenue Overview</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Monthly Recurring Revenue</h2>
            <div className="mt-6 space-y-3">
              {[
                { month: "Jan", value: 520 },
                { month: "Feb", value: 740 },
                { month: "Mar", value: 875 },
                { month: "Apr", value: totalMonthlyRevenue },
              ].map(({ month, value }) => {
                const pct = (value / 1200) * 100;
                return (
                  <div key={month} className="flex items-center gap-4">
                    <span className="w-8 text-xs text-zinc-500">{month}</span>
                    <div className="flex-1 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-3 rounded-full bg-blue-600 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-14 text-right text-sm font-semibold text-white">
                      ${value.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Plan Distribution */}
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Plan Distribution</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Subscription Breakdown</h2>
            <div className="mt-6 space-y-3">
              {planDistribution.map(({ plan, count, color }) => (
                <div key={plan} className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${color}`} />
                  <span className="flex-1 text-sm text-zinc-300">{plan}</span>
                  <span className="text-sm font-semibold text-white">{count}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-gray-800 px-4 py-3 text-sm">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <span className="text-zinc-300">
                <span className="font-semibold text-emerald-400">+24%</span> user growth this month
              </span>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">User Management</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Active Accounts</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-sm text-blue-200">
              {mockUsers.length} total accounts
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="min-w-full divide-y divide-gray-800 text-sm">
              <thead className="bg-gray-900/80 text-zinc-400">
                <tr>
                  <th className="px-5 py-4 text-left font-medium">User</th>
                  <th className="px-5 py-4 text-left font-medium">Plan</th>
                  <th className="px-5 py-4 text-left font-medium">Status</th>
                  <th className="px-5 py-4 text-right font-medium">Docs</th>
                  <th className="px-5 py-4 text-right font-medium">Revenue</th>
                  <th className="px-5 py-4 text-left font-medium">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950">
                {mockUsers.map((user) => (
                  <tr key={user.id} className="transition hover:bg-white/5">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-white">{user.name}</div>
                      <div className="text-zinc-500">{user.email}</div>
                    </td>
                    <td className="px-5 py-4 text-zinc-300">{user.plan}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          statusClasses[user.status] ?? statusClasses.Cancelled
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-white">
                      {user.docsAnalyzed}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-emerald-400">
                      {user.revenue}
                    </td>
                    <td className="px-5 py-4 text-zinc-400">{user.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="rounded-3xl border border-gray-800 bg-gray-900 px-6 py-4 text-xs text-zinc-500">
          TradeSecurix Admin — All data is internal only. Not for external distribution.
        </footer>
      </div>
    </main>
  );
}

function AccessDenied() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);
  return null;
}

export default function AdminPage() {
  return (
    <>
      <Show when="signed-in">
        <AdminContent />
      </Show>
      <Show when="signed-out">
        <AccessDenied />
      </Show>
    </>
  );
}
