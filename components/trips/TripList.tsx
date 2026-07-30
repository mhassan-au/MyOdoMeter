/**
 * components/trips/TripList.tsx
 * -------------------------------------------------------
 * Displays all trips for a logbook and calculates totals.
 */

"use client";

import { useEffect, useState } from "react";
import { deleteTrip, getTrips } from "@/lib/firebase/trips";
import { Trip } from "@/types/trip";

import AtoSummary from "@/components/ato/AtoSummary";

interface TripListProps {
  vehicleId: string;
  logbookId: string;
  refreshKey?: number;
  onLastOdometerChange?: (odometer: number) => void;
}

export default function TripList({
  vehicleId,
  logbookId,
  refreshKey = 0,
  onLastOdometerChange,
}: TripListProps) {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Load trips from Firestore
   */
  async function loadTrips() {
    setLoading(true);

    try {
      const data = await getTrips(vehicleId, logbookId);
      setTrips(data);

      // Pass the last odometer back to the parent
      if (data.length > 0) {
        onLastOdometerChange?.(data[data.length - 1].endOdometer);
      } else {
        onLastOdometerChange?.(0);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTrips();
  }, [vehicleId, logbookId, refreshKey]);

  /**
   * Delete a trip
   */
  async function handleDelete(id: string) {
    if (!confirm("Delete this trip?")) return;

    await deleteTrip(vehicleId, logbookId, id);
    loadTrips();
  }

  const totalBusiness = trips
    .filter((t) => t.purpose === "Business")
    .reduce((sum, t) => sum + t.distanceKm, 0);

  const totalPrivate = trips
    .filter((t) => t.purpose === "Private")
    .reduce((sum, t) => sum + t.distanceKm, 0);

  const totalKm = trips.reduce((sum, t) => sum + t.distanceKm, 0);

  if (loading) {
    return <p>Loading trips...</p>;
  }

  return (
    <div className="space-y-4">
        <AtoSummary trips={trips} />
        
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Business</p>
          <p className="text-xl font-bold">{totalBusiness} km</p>
        </div>

        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Private</p>
          <p className="text-xl font-bold">{totalPrivate} km</p>
        </div>

        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-bold">{totalKm} km</p>
        </div>
      </div>

      {trips.length === 0 ? (
        <p className="text-gray-500">No trips recorded yet.</p>
      ) : (
        <div className="space-y-3">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="flex items-center justify-between rounded border p-4"
            >
              <div>
                <p className="font-medium">{trip.date}</p>
                <p className="text-sm text-gray-600">
                  {trip.startOdometer} → {trip.endOdometer}
                </p>
                <p className="text-sm text-gray-600">
                  {trip.distanceKm} km • {trip.purpose}
                </p>
                {trip.notes && (
                  <p className="text-sm text-gray-500">{trip.notes}</p>
                )}
              </div>

              <button
                onClick={() => handleDelete(trip.id)}
                className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}