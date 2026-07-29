// File: app/logbooks/page.tsx
//
// Purpose:
// Logbooks screen.
//
// Responsibilities:
// - Display existing logbooks (later from Firebase)
// - Host the create logbook form
// - Handle newly created logbooks
//
// Does NOT:
// - Contain form fields
// - Directly manage Firebase logic


"use client";

import { useState } from "react";
import LogbookForm from "@/components/LogbookForm";
import type { Logbook } from "@/types/logbook";
import { createLogbook } from "@/lib/logbooks";

export default function LogbooksPage() {

    // Temporary local state
    // Later this will load from Firestore
    const [logbooks, setLogbooks] = useState<Logbook[]>([]);

    // Handles new logbook creation
    async function handleAddLogbook(
        logbook: Logbook
    ) {

        try {

            const id = await createLogbook(
                logbook
            );


            setLogbooks(
                previous => [
                    ...previous,
                    {
                        ...logbook,
                        id
                    }
                ]
            );


        }
        catch (error) {

            console.error(
                "Failed to create logbook",
                error
            );

        }

    }

    return (

        <main
            className="
            p-5
            space-y-6
            "
        >


            <h1
                className="
                text-2xl
                font-bold
                "
            >
                My Logbooks
            </h1>



            {/* Create new logbook */}

            <section
                className="
                border
                rounded-xl
                p-4
                "
            >

                <h2
                    className="
                    font-semibold
                    mb-4
                    "
                >
                    New Logbook
                </h2>


                <LogbookForm

                    onAdd={handleAddLogbook}

                />


            </section>



            {/* Temporary list */}

            <section>


                <h2
                    className="
                    font-semibold
                    mb-3
                    "
                >
                    Existing Logbooks
                </h2>



                {
                    logbooks.length === 0 && (

                        <p className="text-gray-500">

                            No logbooks created yet.

                        </p>

                    )
                }



                {
                    logbooks.map(
                        (logbook, index) => (

                            <div

                                key={index}

                                className="
                                border
                                rounded-lg
                                p-3
                                mb-2
                                "

                            >

                                <p>
                                    Vehicle ID:
                                    {" "}
                                    {logbook.vehicleId}
                                </p>


                                <p>
                                    Financial Year:
                                    {" "}
                                    {logbook.financialYear}
                                </p>


                                <p>
                                    Start Odometer:
                                    {" "}
                                    {logbook.startOdometer}
                                    km
                                </p>


                                <p>
                                    Start Date:
                                    {" "}
                                    {logbook.startDate}
                                </p>


                            </div>

                        )
                    )
                }



            </section>


        </main>

    );

}