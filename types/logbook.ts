/**
 * ============================================================================
 * File: types/logbook.ts
 * Project: MyOdoMeter
 * ----------------------------------------------------------------------------
 * Purpose:
 *   Defines the Logbook data model used throughout the application.
 *
 * A logbook represents:
 *   - One vehicle
 *   - One financial year
 *   - One ATO tracking period
 *
 * Related files:
 *   - lib/logbooks.ts
 *   - components/LogbookCard.tsx
 *   - components/LogbookForm.tsx
 * ============================================================================
 */

export interface Logbook {
  id?: string;
  familyId: string;
  vehicleId: string;
  financialYear: string;
  startDate: string;
  endDate: string;
  startOdometer: number;
  status: "Active" | "Closed";
}