import MeetingCard from "@/components/MeetingCard";
import { Pagination } from "@/components/Pagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

type MeetingsListProps = {
  query: string;
  currentPage: number;
};

export default async function MeetingsList({
  query,
  currentPage,
}: MeetingsListProps) {
  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
