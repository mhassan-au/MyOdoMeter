/**
 * layout.tsx
 *
 * Purpose:
 * Root application layout.
 *
 * Defines:
 * - HTML structure
 * - Metadata
 * - Global providers
 */

import type {
    Metadata
} from "next";


import AppProviders
from "@/components/providers/AppProviders";


import "./globals.css";



export const metadata: Metadata = {

    title: "MyOdoMeter",

    description:
        "ATO compliant vehicle logbook management app",

};



export default function RootLayout({

    children,

}: Readonly<{

    children: React.ReactNode;

}>) {


    return (

        <html lang="en">


            <body>


                <AppProviders>

                    {children}

                </AppProviders>


            </body>


        </html>

    );

}