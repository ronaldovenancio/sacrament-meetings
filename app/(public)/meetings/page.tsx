import { Suspense } from "react";
import { MeetingSearch } from "@/components/MeetingSearch";
import MeetingsList from "@/components/MeetingsList";

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-slate-600">
          View current and past meeting programs.
        </p>
      </header>

      <div className="mb-6">
        <MeetingSearch />
      </div>

      <Suspense
        key={`${query}-${currentPage}`}
        fallback={
          <p className="text-slate-600">
            Loading meeting information...
          </p>
        }
      >
        <MeetingsList
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
    </main>
  );
}
