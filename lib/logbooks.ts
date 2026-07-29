// File: lib/logbooks.ts
//
// Purpose:
// Handles Firestore operations for logbooks.
//
// Responsibilities:
// - Create logbook
// - Read logbooks
//
// UI components should call these functions
// instead of accessing Firebase directly.


import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
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




// Get all logbooks
export async function getLogbooks(): Promise<Logbook[]> {


    const q = query(

        collection(
            db,
            "logbooks"
        ),

        orderBy(
            "createdAt",
            "desc"
        )

    );


    const snapshot = await getDocs(q);



    return snapshot.docs.map(

        (doc) => ({

            id: doc.id,

            ...doc.data()

        } as Logbook)

    );


}