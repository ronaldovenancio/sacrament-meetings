import { getBaseUrl } from "@/lib/api";
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(`${getBaseUrl()}/api/meetings`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meetings");
  }

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

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

      <div className="grid gap-5 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </main>
  );
}