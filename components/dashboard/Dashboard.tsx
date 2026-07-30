/**
 * Dashboard.tsx
 *
 * Purpose:
 * Main dashboard screen for the MyOdoMeter application.
 */

import ActiveLogbookCard from "@/components/dashboard/ActiveLogbookCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import { Title, Text } from "@/components/ui/Text";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <section>
        <Title size="2xl">MyOdoMeter</Title>
        <Text color="secondary">
          Track trips, maintain your ATO-compliant logbook, and manage vehicle
          expenses.
        </Text>
      </section>

      {/* Active Logbook */}
      <ActiveLogbookCard />

      {/* Dashboard Statistics */}
      <DashboardStats />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}