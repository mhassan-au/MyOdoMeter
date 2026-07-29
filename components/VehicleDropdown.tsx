// File: components/VehicleDropdown.tsx
//
// Purpose:
// Displays available vehicles and allows the user
// to select one vehicle.
//
// Responsibilities:
// - Load vehicles from Firestore
// - Display dropdown options
// - Return selected vehicle id
//
// Does NOT:
// - Create vehicles
// - Save logbooks


"use client";

import { useEffect, useState } from "react";

import { getVehicles } from "@/lib/vehicles";

import type { Vehicle } from "@/types/vehicle";


type VehicleDropdownProps = {
    value: string;
    onChange: (vehicleId: string) => void;
};


export default function VehicleDropdown({
    value,
    onChange
}: VehicleDropdownProps) {


    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);

    // Load vehicles when component loads
    useEffect(() => {

        async function loadVehicles() {

            try {

                const data = await getVehicles();

                setVehicles(data);

            }
            catch (error) {

                console.error(
                    "Unable to load vehicles",
                    error
                );

            }
            finally {

                setLoading(false);

            }

        }


        loadVehicles();

    }, []);

    if (loading) {

        return <p>Loading vehicles...</p>;

    }



    return (

        <select

            value={value}

            onChange={(e) =>
                onChange(e.target.value)
            }

            className="
            mt-1
            border
            rounded-lg
            p-2
            w-full
            "

        >

            <option value="">
                Select vehicle
            </option>


            {
                vehicles.map(
                    (vehicle) => (

                        <option
                            key={vehicle.id}
                            value={vehicle.id}
                        >

                            {vehicle.name}
                            {" - "}
                            {vehicle.rego}

                        </option>

                    )
                )
            }

        </select>

    );

}