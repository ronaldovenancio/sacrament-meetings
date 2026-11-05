import Link from "next/link";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
     <div className="border-b bg-slate-100 px-6 py-3 print:hidden">
        <nav
          aria-label="Meetings navigation"
          className="mx-auto flex max-w-5xl gap-4"
        >
          <Link
            href="/meetings"
            className="font-medium text-blue-700 hover:underline"
          >
            All Meetings
          </Link>

          <Link
            href="/meetings/current"
            className="font-medium text-blue-700 hover:underline"
          >
            Current Sunday
          </Link>
        </nav>
      </div>

      {children}
    </section>
  );
}