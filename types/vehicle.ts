// File: types/vehicle.ts
//
// Purpose:
// Defines the vehicle data structure used throughout MyOdoMeter.
//
// A vehicle is a master record.
// Logbooks, trips and expenses reference this vehicle.

export type Vehicle = {
    id: string;
    name: string;
    color: string;
    rego: string;
    active: boolean;
};