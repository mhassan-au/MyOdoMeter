/**
 * ActiveLogbookCard.tsx
 *
 * Purpose:
 * Displays the currently active vehicle logbook summary.
 */

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Title, Text } from "@/components/ui/Text";

export default function ActiveLogbookCard() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Title size="lg">Active Logbook</Title>
          <Text color="secondary">
            No active logbook selected yet.
          </Text>
        </div>

        <Button variant="secondary">View Trips</Button>
      </div>
    </Card>
  );
}