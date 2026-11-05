import type { SacramentMeeting } from "@/lib/types";

type MeetingDetailProps = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="space-y-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <header>
        <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
          {meeting.meetingType}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Sacrament Meeting
        </h1>
        <p className="mt-2 text-slate-600">{meeting.date}</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Leadership</h2>
        <p className="mt-2">Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </section>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold">Announcements</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {meeting.announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold">Opening</h2>
        <p className="mt-2">
          Opening Hymn: #{meeting.openingHymn.number}{" "}
          {meeting.openingHymn.title}
        </p>
        <p>Opening Prayer: {meeting.openingPrayer}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={`${item.description}-${index}`}>
                {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-slate-600">No ward business.</p>
        )}

        <p className="mt-2">
          Stake Business: {meeting.stakeBusiness ? "Yes" : "No"}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sacrament</h2>
        <p className="mt-2">
          Sacrament Hymn: #{meeting.sacramentHymn.number}{" "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          Speakers and Musical Numbers
        </h2>

        {meeting.speakers.length > 0 ? (
          <ul className="mt-2 space-y-3">
            {meeting.speakers.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-slate-600">
                  {item.type === "musical-number"
                    ? "Musical Number"
                    : item.topic}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-slate-600">
            No speakers or musical numbers listed.
          </p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold">Closing</h2>
        <p className="mt-2">
          Closing Hymn: #{meeting.closingHymn.number}{" "}
          {meeting.closingHymn.title}
        </p>
        <p>Closing Prayer: {meeting.closingPrayer}</p>
      </section>
    </article>
  );
}