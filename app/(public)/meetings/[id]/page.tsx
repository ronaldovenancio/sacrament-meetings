import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import { getMeetingById } from "@/lib/meetings-db";

type MeetingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: MeetingPageProps): Promise<Metadata> {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  return {
    title: `Sacrament Meeting - ${meeting.date}`,
    description: `View the sacrament meeting program for ${meeting.date}.`,
  };
}

async function MeetingContent({
  params,
}: MeetingPageProps) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

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