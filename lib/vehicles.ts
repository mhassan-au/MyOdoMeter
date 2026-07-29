// File: lib/vehicles.ts
//
// Purpose:
// Handles vehicle related Firestore operations.
//
// Responsibilities:
// - Read vehicles
// - Add vehicles later if needed
//
// UI components should call these functions
// instead of accessing Firestore directly.

import {
    collection,
    getDocs
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type { Vehicle } from "@/types/vehicle";


// Get all active vehicles for the family
export async function getVehicles(): Promise<Vehicle[]> {

    const snapshot = await getDocs(
        collection(db, "vehicles")
    );


    return snapshot.docs.map(
        (doc) => ({
            id: doc.id,
            ...doc.data()
        } as Vehicle)
    );

}