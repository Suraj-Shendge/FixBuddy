export default function WorkerProfilePage({ params }: { params: { id: string } }) {
  return (
    <section className="glass space-y-4 p-6">
      <h1 className="text-2xl font-bold">Worker Profile #{params.id}</h1>
      <p className="text-slate-300">Skills, ratings, badges, completed jobs and booking CTA.</p>
      <button className="rounded-lg bg-brand-neon px-4 py-2 font-semibold text-slate-900">Book worker</button>
    </section>
  );
}
