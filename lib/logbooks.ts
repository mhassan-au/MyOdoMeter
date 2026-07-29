// File: lib/logbooks.ts
//
// Purpose:
// Handles Firestore operations for logbooks.
//
// Responsibilities:
// - Create logbook
// - Read logbooks later
//
// UI components should call these functions
// instead of directly accessing Firestore.


import {
    addDoc,
    collection,
    serverTimestamp
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type { Logbook } from "@/types/logbook";



// Create a new logbook
export async function createLogbook(
    logbook: Logbook
) {


    const ref = await addDoc(

        collection(
            db,
            "logbooks"
        ),

        {

            ...logbook,

            createdAt: serverTimestamp()

        }

    );


    return ref.id;

}