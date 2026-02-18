import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="glass mx-auto max-w-md space-y-4 p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-slate-300">Mock OTP flow via credentials for MVP.</p>
      <input className="w-full rounded-lg bg-slate-900 p-3" placeholder="Phone number" />
      <input className="w-full rounded-lg bg-slate-900 p-3" placeholder="Password / OTP" type="password" />
      <Link href="/role-select" className="block rounded-lg bg-brand-electric p-3 text-center font-medium">Continue</Link>
    </div>
  );
}
