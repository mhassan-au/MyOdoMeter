"use client";

import { useEffect, useState } from "react";

import LogbookForm from "@/components/LogbookForm";

import {
    getLogbooks,
    createLogbook
} from "@/lib/logbooks";

import type { Logbook } from "@/types/logbook";



export default function LogbooksPage() {


    // Stores loaded logbooks
    const [logbooks, setLogbooks] = useState<Logbook[]>([]);



    // Load existing logbooks when page opens
    useEffect(() => {


        async function loadLogbooks() {

            try {

                const data = await getLogbooks();

                setLogbooks(data);

            }
            catch (error) {

                console.error(
                    "Failed to load logbooks",
                    error
                );

            }

        }


        loadLogbooks();


    }, []);




    // Create new logbook
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

        <main className="
            p-5
            space-y-6
        ">


            <h1 className="
                text-2xl
                font-bold
            ">
                My Logbooks
            </h1>



            <section className="
                border
                rounded-xl
                p-4
            ">

                <h2 className="
                    font-semibold
                    mb-4
                ">
                    New Logbook
                </h2>


                <LogbookForm

                    onAdd={handleAddLogbook}

                />


            </section>



            <section>

                <h2 className="
                    font-semibold
                    mb-3
                ">
                    Existing Logbooks
                </h2>


                {
                    logbooks.map(
                        (logbook) => (

                            <div
                                key={logbook.id}
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
                                    Start:
                                    {" "}
                                    {logbook.startOdometer}
                                    km
                                </p>

                            </div>

                        )
                    )
                }


            </section>


        </main>

    );

}