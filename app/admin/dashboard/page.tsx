export default function AdminDashboard() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="glass p-5">Total users</div>
      <div className="glass p-5">Pending workers</div>
      <div className="glass p-5">Active bookings</div>
    </section>
  );
}
