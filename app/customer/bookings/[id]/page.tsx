"use client";

import { useAppStore } from "@/store/app-store";

export default function BookingStatusPage({ params }: { params: { id: string } }) {
  const status = useAppStore((s) => s.bookingStatus);
  return (
    <section className="glass p-6">
      <h1 className="text-2xl font-bold">Booking #{params.id}</h1>
      <p className="mt-2 text-brand-neon">Current status: {status}</p>
      <div className="mt-4 h-3 w-full rounded-full bg-slate-800">
        <div className="h-3 w-2/3 rounded-full bg-brand-electric" />
      </div>
    </section>
  );
}
