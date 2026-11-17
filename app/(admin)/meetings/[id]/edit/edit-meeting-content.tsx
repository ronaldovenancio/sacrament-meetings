import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from './edit-meeting-form';

type EditMeetingContentProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditMeetingContent({
  params,
}: EditMeetingContentProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <EditMeetingForm meeting={meeting} />;
}
