import { connection } from "next/server";
import { redirect } from "next/navigation";

import { getMeetings } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  await connection();

  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayDate = sunday.toISOString().split("T")[0];

  const currentMeeting = getMeetings(sundayDate)[0];

  if (!currentMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${currentMeeting.id}`);
}