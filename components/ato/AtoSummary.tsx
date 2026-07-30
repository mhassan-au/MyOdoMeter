/**
 * components/trips/AtoSummary.tsx
 * -------------------------------------------------------
 * Displays ATO logbook compliance summary.
 */

"use client";

import { calculateSummary, validateTrips } from "@/lib/ato/logbook";
import { Trip } from "@/types/trip";

interface AtoSummaryProps {
  trips: Trip[];
}

export default function AtoSummary({ trips }: AtoSummaryProps) {
  const summary = calculateSummary(trips);
  const validation = validateTrips(trips);

  return (
    <div className="space-y-4 rounded-xl border p-4">
      <h2 className="text-lg font-semibold">ATO Logbook Summary</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Business km</p>
          <p className="text-xl font-bold">{summary.businessKm}</p>
        </div>

        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Private km</p>
          <p className="text-xl font-bold">{summary.privateKm}</p>
        </div>

        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Total km</p>
          <p className="text-xl font-bold">{summary.totalKm}</p>
        </div>

        <div className="rounded border p-3">
          <p className="text-sm text-gray-500">Business use</p>
          <p className="text-xl font-bold">
            {summary.businessUsePercent}%
          </p>
        </div>
      </div>

      <div className="rounded border p-3">
        <p className="font-medium">Logbook period</p>
        <p>
          {summary.startDate ?? "—"} → {summary.endDate ?? "—"}
        </p>
        <p>Duration: {summary.durationDays} days</p>

        {summary.meets12WeekRequirement ? (
          <p className="font-medium text-green-600">
            Meets ATO 12-week requirement
          </p>
        ) : (
          <p className="font-medium text-orange-600">
            Needs {84 - summary.durationDays} more days to reach 12 weeks
          </p>
        )}
      </div>

      <div className="rounded border p-3">
        <p className="font-medium">Validation</p>

        {validation.valid ? (
          <p className="text-green-600">No validation issues found.</p>
        ) : (
          <ul className="list-disc space-y-1 pl-5 text-red-600">
            {validation.errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}