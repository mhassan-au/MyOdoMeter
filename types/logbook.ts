// File: types/logbook.ts
//
// Purpose:
// Defines the Logbook data structure.
//
// Used by:
// - LogbookForm component
// - Logbooks page
// - Firebase logbook functions
//
// A logbook belongs to:
// - One vehicle
// - One financial year


export type Logbook = {

    id?: string;

    vehicleId: string;

    financialYear: string;

    startOdometer: number;

    startDate: string;

    endDate?: string;

    status: "Active" | "Closed";

};