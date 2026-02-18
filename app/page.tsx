import Link from "next/link";
import { MotionCard } from "@/components/ui/motion-card";

export default function LandingPage() {
  return (
    <section className="space-y-8">
      <div className="glass p-8 text-center">
        <h1 className="text-4xl font-bold">FixBuddy</h1>
        <p className="mt-3 text-slate-300">Hire trusted workers fast. Help workers earn consistently.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link className="rounded-xl bg-brand-electric px-5 py-3 font-semibold" href="/login">Get started</Link>
          <Link className="rounded-xl border border-white/20 px-5 py-3" href="/customer/home">Browse skills</Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["Verified workers", "Live booking status", "Premium UX"].map((item) => (
          <MotionCard key={item} className="glass p-6">
            <h2 className="text-xl font-semibold">{item}</h2>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
