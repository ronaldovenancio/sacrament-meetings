import PrintButton from "@/components/PrintButton";
import { getBaseUrl } from "@/lib/api";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

type MeetingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
  const response = await fetch(
   `${getBaseUrl()}/api/meetings/${id}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404 || response.status === 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting");
  }

  return response.json();
}

async function MeetingContent({
  params,
}: MeetingPageProps) {
  const { id } = await params;

  const meeting = await getMeeting(id);

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