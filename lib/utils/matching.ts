type Worker = {
  availabilityStatus: "available" | "busy" | "offline";
  ratingAverage: number;
  distance?: number;
};

const availabilityRank = { available: 0, busy: 1, offline: 2 };

export function sortWorkers(workers: Worker[]) {
  return [...workers].sort((a, b) => {
    const byAvailability = availabilityRank[a.availabilityStatus] - availabilityRank[b.availabilityStatus];
    if (byAvailability !== 0) return byAvailability;
    const byRating = b.ratingAverage - a.ratingAverage;
    if (byRating !== 0) return byRating;
    return (a.distance ?? Number.MAX_SAFE_INTEGER) - (b.distance ?? Number.MAX_SAFE_INTEGER);
  });
}
