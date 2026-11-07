import { getMeetingById } from "@/lib/meetings-db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return Response.json(
      { error: "Invalid meeting id" },
      { status: 400 },
    );
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return Response.json(
      { error: "Meeting not found" },
      { status: 404 },
    );
  }

  return Response.json(meeting);
}