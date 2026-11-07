import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
        {meeting.meetingType}
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        {meeting.date}
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Conducting: {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block font-medium text-blue-700 hover:underline"
      >
        View meeting details
      </Link>
    </article>
  );
}