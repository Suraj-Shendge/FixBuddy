export default function WorkerOnboarding() {
  return (
    <section className="glass space-y-4 p-6">
      <h1 className="text-3xl font-bold">Worker onboarding</h1>
      <p className="text-slate-300">Upload avatar, choose skills, add experience, set availability.</p>
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded-lg bg-slate-900 p-3" placeholder="Experience years" />
        <select className="rounded-lg bg-slate-900 p-3"><option>available</option><option>busy</option><option>offline</option></select>
      </div>
      <button className="rounded-lg bg-brand-electric px-4 py-2">Save profile</button>
    </section>
  );
}
