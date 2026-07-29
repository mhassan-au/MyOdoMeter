// File: components/LogbookForm.tsx
//
// Purpose:
// UI component for creating a new vehicle logbook.
//
// Responsibilities:
// - Capture logbook details from the user
// - Validate basic input
// - Send completed logbook data back to parent using onAdd()
//
// Does NOT:
// - Save directly to Firebase
// - Handle authentication
// - Manage application state outside this component


"use client";

import { useState } from "react";

import VehicleDropdown from "@/components/VehicleDropdown";

// Data shape expected when creating a logbook
import type { Logbook } from "@/types/logbook";


// Component properties
type LogbookFormProps = {

  onAdd: (logbook: Logbook) => void;

};


export default function LogbookForm({
  onAdd
}: LogbookFormProps) {


  // Form field states
  const [vehicleId, setVehicleId] = useState("");

  const [financialYear, setFinancialYear] = useState("");

  const [startOdometer, setStartOdometer] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");


  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);



  // Handles creating a new logbook
  function handleAddLogbook() {


    setError("");


    if (!vehicleId || !financialYear || !startOdometer) {

      setError(
        "Please complete all required fields"
      );

      return;

    }


    setLoading(true);


    try {


      const newLogbook: Logbook = {

        vehicleId,
        financialYear,
        startOdometer: Number(startOdometer),
        startDate,
        endDate,
        status: "Active"
      };


      // Send data back to parent component
      onAdd(newLogbook);



      // Clear form after successful add
      setVehicleId("");

      setFinancialYear("");

      setStartOdometer("");

      setStartDate("");

      setEndDate("");


    }
    catch (err: any) {


      setError(
        err.message || "Unable to create logbook"
      );


    }
    finally {


      setLoading(false);


    }


  }



  return (

    <div className="space-y-4">


      {/* Vehicle Selection */}

      <div>

        <label className="text-sm font-medium">

          Vehicle

        </label>


        <VehicleDropdown

          value={vehicleId}

          onChange={setVehicleId}

        />


      </div>



      {/* Financial Year */}

      <div>

        <label className="text-sm font-medium">

          Financial Year

        </label>


        <input

          type="text"

          value={financialYear}

          onChange={(e) =>
            setFinancialYear(
              e.target.value
            )
          }

          placeholder="2026-27"

          className="
            mt-1
            border
            rounded-lg
            p-2
            w-full
          "

        />

      </div>



      {/* Starting Odometer */}

      <div>

        <label className="text-sm font-medium">

          Start Odometer

        </label>


        <input

          type="number"

          value={startOdometer}

          onChange={(e) =>
            setStartOdometer(
              e.target.value
            )
          }

          placeholder="125430"

          className="
            mt-1
            border
            rounded-lg
            p-2
            w-full
          "

        />

      </div>



      {/* Start Date */}

      <div>

        <label className="text-sm font-medium">

          Start Date

        </label>


        <input

          type="date"

          value={startDate}

          onChange={(e) =>
            setStartDate(
              e.target.value
            )
          }

          className="
            mt-1
            border
            rounded-lg
            p-2
            w-full
          "

        />

      </div>



      {/* End Date */}

      <div>

        <label className="text-sm font-medium">

          End Date

        </label>


        <input

          type="date"

          value={endDate}

          onChange={(e) =>
            setEndDate(
              e.target.value
            )
          }

          className="
            mt-1
            border
            rounded-lg
            p-2
            w-full
          "

        />

      </div>



      {/* Error */}

      {error && (

        <p className="text-red-500 text-sm">

          {error}

        </p>

      )}



      {/* Save Button */}

      <button

        onClick={handleAddLogbook}

        disabled={loading}

        className="
          w-full
          btn-primary
        "

      >

        {loading
          ? "Creating..."
          : "Create Logbook"
        }

      </button>


    </div>

  );

}