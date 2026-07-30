/**
 * QuickActions.tsx
 *
 * Purpose:
 * Displays common dashboard actions.
 */

import  Card  from "@/components/ui/Card";
import  Button  from "@/components/ui/Button";
import { Title } from "@/components/ui/Text";

export default function QuickActions() {
  return (
    <Card>
      <div className="space-y-4">
        <Title size="lg">Quick Actions</Title>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Button>Start Trip</Button>
          <Button variant="secondary">Add Expense</Button>
          <Button variant="secondary">View Trips</Button>
          <Button variant="secondary">Export Logbook</Button>
        </div>
      </div>
    </Card>
  );
}