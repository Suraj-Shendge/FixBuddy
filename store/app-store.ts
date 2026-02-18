import { create } from "zustand";
import { BookingStatus } from "@/types";

type AppState = {
  role: "worker" | "customer" | "admin" | null;
  bookingStatus: BookingStatus;
  setRole: (role: AppState["role"]) => void;
  setBookingStatus: (status: BookingStatus) => void;
};

export const useAppStore = create<AppState>((set) => ({
  role: null,
  bookingStatus: "requested",
  setRole: (role) => set({ role }),
  setBookingStatus: (bookingStatus) => set({ bookingStatus })
}));
