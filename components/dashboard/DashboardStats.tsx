/**
 * DashboardStats.tsx
 *
 * Purpose:
 * Displays high-level dashboard statistics.
 */

import StatCard  from "@/components/ui/StatCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Business Trips" value="0" />
      <StatCard title="Personal Trips" value="0" />
      <StatCard title="Business KM" value="0 km" />
      <StatCard title="Personal KM" value="0 km" />
    </div>
  );
}