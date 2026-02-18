import Link from "next/link";

export default function RoleSelectPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Select role</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/customer/home" className="glass p-6">Customer</Link>
        <Link href="/worker/onboarding" className="glass p-6">Worker</Link>
        <Link href="/admin/dashboard" className="glass p-6">Admin</Link>
      </div>
    </section>
  );
}
