/**
 * ErrorBoundary.tsx
 *
 * Purpose:
 * Catch React rendering errors
 * and report them through logger.
 */

"use client";


import React from "react";

import { logger } from "@/lib/logger/logger";


interface Props {

    children: React.ReactNode;

}


interface State {

    hasError: boolean;

}


export default class ErrorBoundary
    extends React.Component<Props, State> {


    constructor(props: Props) {

        super(props);

        this.state = {
            hasError: false
        };

    }


    /**
     * Update UI state when React error occurs.
     */
    static getDerivedStateFromError(): State {

        return {
            hasError: true
        };

    }


    /**
     * Capture React errors.
     */
    componentDidCatch(
        error: Error,
        errorInfo: React.ErrorInfo
    ) {


        logger.critical(
            "React.ErrorBoundary",
            error.message,
            {
                stack: error.stack,
                componentStack:
                    errorInfo.componentStack
            }
        );

    }



    render() {


        if (this.state.hasError) {


            return (

                <div>

                    <h2>
                        Something went wrong.
                    </h2>

                    <p>
                        The error has been recorded.
                    </p>

                </div>

            );

        }


        return this.props.children;

    }

}