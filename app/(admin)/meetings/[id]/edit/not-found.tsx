import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Meeting Not Found</h1>

      <p className="mt-2">
        The meeting you are trying to edit could not be found.
      </p>

      <Link
        href="/meetings"
        className="mt-4 inline-block underline"
      >
        Return to meetings
      </Link>
    </main>
  );
}
