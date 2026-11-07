import { Suspense } from "react";
import { notFound } from "next/navigation";

import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import { getMeetingById } from "@/lib/meetings-db";

type MeetingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function MeetingContent({
  params,
}: MeetingPageProps) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage({
  params,
}: MeetingPageProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <Suspense
        fallback={
          <p className="text-slate-600">
            Loading meeting details...
          </p>
        }
      >
        <MeetingContent params={params} />
      </Suspense>
    </main>
  );
}