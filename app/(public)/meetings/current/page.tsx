import type { Metadata } from "next";
import { connection } from "next/server";
import { redirect } from "next/navigation";

import { getMeetingsByDate } from "@/lib/meetings-db";

export const metadata: Metadata = {
  title: "Current Meeting",
  description:
    "View the current sacrament meeting program.",
};

export default async function CurrentMeetingPage() {
  await connection();

  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayDate = sunday.toISOString().split("T")[0];

  const meetings = await getMeetingsByDate(sundayDate);
  const currentMeeting = meetings[0];

  if (!currentMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${currentMeeting.id}`);
}