import { Suspense } from 'react';
import EditMeetingContent from './edit-meeting-content';

type EditMeetingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function EditMeetingPage({
  params,
}: EditMeetingPageProps) {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Edit Meeting</h1>

      <Suspense fallback={<p>Loading meeting...</p>}>
        <EditMeetingContent params={params} />
      </Suspense>
    </main>
  );
}
