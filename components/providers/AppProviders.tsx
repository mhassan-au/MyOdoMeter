/**

* AppProviders.tsx
*
* Purpose:
* Global client-side application providers.
*
* Includes:
* * Error Boundary
* * Global error monitoring
* * Future application providers
    */

"use client";

import { useEffect } from "react";

import ErrorBoundary from "@/components/error/ErrorBoundary";
import { initialiseGlobalErrorMonitor } from "@/lib/monitoring/globalErrorMonitor";

interface Props {
    children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {

    /**
     * Initialise application-wide monitoring once.
     */
    useEffect(() => {

        initialiseGlobalErrorMonitor();

    }, []);

    return (

        <ErrorBoundary>

            {/* Future providers go here */}
            {children}

        </ErrorBoundary>

    );


}
