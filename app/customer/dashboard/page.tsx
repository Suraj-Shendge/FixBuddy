export default function CustomerDashboard() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="glass p-5">
        <h2 className="font-semibold">Recent bookings</h2>
      </div>
      <div className="glass p-5">
        <h2 className="font-semibold">Saved workers</h2>
      </div>
    </section>
  );
}
