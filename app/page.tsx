/**
 * page.tsx
 *
 * Purpose:
 * Home route wrapper.
 *
 * Keeps routing separate from dashboard business logic.
 */

import Dashboard from "@/components/dashboard/Dashboard";

export default function HomePage() {
  return <Dashboard />;
}