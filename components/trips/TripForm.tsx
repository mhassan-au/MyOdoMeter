/**
 * components/trips/TripForm.tsx
 * -------------------------------------------------------
 * Form for adding a new trip.
 */

"use client";

import { useState } from "react";
import { addTrip } from "@/lib/firebase/trips";

interface TripFormProps {
  vehicleId: string;
  logbookId: string;
  nextStartOdometer?: number;
  onTripAdded?: () => void;
}

export default function TripForm({
  vehicleId,
  logbookId,
  nextStartOdometer = 0,
  onTripAdded,
}: TripFormProps) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [startOdometer, setStartOdometer] = useState(nextStartOdometer);
  const [endOdometer, setEndOdometer] = useState(nextStartOdometer);
  const [purpose, setPurpose] = useState<"Business" | "Private">(
    "Business"
  );
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const distance = Math.max(0, endOdometer - startOdometer);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (endOdometer < startOdometer) {
      alert("End odometer cannot be less than start odometer.");
      return;
    }

    setSaving(true);

    try {
      await addTrip(vehicleId, logbookId, {
        date,
        startOdometer,
        endOdometer,
        distanceKm: distance,
        purpose,
        notes,
      });

      // Reset for next trip
      setStartOdometer(endOdometer);
      setEndOdometer(endOdometer);
      setNotes("");

      onTripAdded?.();
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-4">
      <h2 className="text-lg font-semibold">Add Trip</h2>

      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Start Odometer</label>
          <input
            type="number"
            value={startOdometer}
            onChange={(e) => setStartOdometer(Number(e.target.value))}
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">End Odometer</label>
          <input
            type="number"
            value={endOdometer}
            onChange={(e) => setEndOdometer(Number(e.target.value))}
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Distance</label>
        <div className="mt-1 rounded border bg-gray-50 px-3 py-2">
          {distance} km
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Purpose</label>
        <select
          value={purpose}
          onChange={(e) =>
            setPurpose(e.target.value as "Business" | "Private")
          }
          className="mt-1 w-full rounded border px-3 py-2"
        >
          <option value="Business">Business</option>
          <option value="Private">Private</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {saving ? "Saving..." : "Add Trip"}
      </button>
    </form>
  );
}