'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Meetings error:', error);
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-2">
        We could not load the meeting information.
      </p>

      <div className="mt-4 flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
        >
          Try again
        </button>

        <Link href="/meetings">
          Return to meetings
        </Link>
      </div>
    </main>
  );
}
