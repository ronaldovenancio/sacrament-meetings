import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Sacrament Meeting Planner
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Plan and review sacrament meeting programs.
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            View current and past sacrament meetings, including hymns,
            prayers, announcements, ward business, speakers, and musical
            numbers.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/meetings"
              className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
            >
              View all meetings
            </Link>

            <Link
              href="/meetings/current"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:bg-slate-100"
            >
              Current Sunday
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/meeting.jpg"
            alt="Sacrament meeting program planning"
            width={800}
            height={600}
            priority
            className="h-auto w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </section>
    </main>
  );
}