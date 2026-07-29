/**
 * ============================================================================
 * File: lib/logbooks.ts
 * Project: MyOdoMeter
 * ----------------------------------------------------------------------------
 * Purpose:
 *   Contains all Firestore operations related to logbooks.
 *
 * Responsibilities:
 *   - Create a new logbook
 *   - Retrieve existing logbooks
 *   - (Future) Update and delete logbooks
 *
 * Related files:
 *   - lib/firebase.ts
 *   - types/logbook.ts
 *   - app/logbooks/page.tsx
 * ============================================================================
 */

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Logbook } from "@/types/logbook";

const COLLECTION = "logbooks";

export async function createLogbook(logbook: Logbook) {
  const docRef = await addDoc(collection(db, COLLECTION), logbook);
  return docRef.id;
}

export async function getLogbooks(): Promise<Logbook[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Logbook, "id">)
  }));
}