'use client';

import { useActionState } from 'react';
import { deleteMeeting, updateMeeting } from '@/lib/actions';
import type { State } from '@/lib/meeting-schema';
import type { SacramentMeeting } from '@/lib/types';

type EditMeetingFormProps = {
  meeting: SacramentMeeting;
};

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  meeting,
}: EditMeetingFormProps) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const deleteMeetingWithId = deleteMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState
  );

  const speaker = meeting.speakers[0];

  return (
    <>
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting.date}
          aria-describedby="date-error"
        />
        <div id="date-error" aria-live="polite">
          {state.errors?.date?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="meetingType">Meeting type</label>
        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting.meetingType}
          aria-describedby="meetingType-error"
        >
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>
        <div id="meetingType-error" aria-live="polite">
          {state.errors?.meetingType?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="presiding">Presiding</label>
        <input
          id="presiding"
          name="presiding"
          type="text"
          defaultValue={meeting.presiding}
          aria-describedby="presiding-error"
        />
        <div id="presiding-error" aria-live="polite">
          {state.errors?.presiding?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="conducting">Conducting</label>
        <input
          id="conducting"
          name="conducting"
          type="text"
          defaultValue={meeting.conducting}
          aria-describedby="conducting-error"
        />
        <div id="conducting-error" aria-live="polite">
          {state.errors?.conducting?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="announcements">
          Announcements — one per line
        </label>
        <textarea
          id="announcements"
          name="announcements"
          defaultValue={meeting.announcements?.join('\n') ?? ''}
        />
      </div>

      <fieldset>
        <legend>Opening hymn</legend>

        <label htmlFor="openingHymnNumber">Number</label>
        <input
          id="openingHymnNumber"
          name="openingHymnNumber"
          type="number"
          defaultValue={meeting.openingHymn.number}
        />

        <label htmlFor="openingHymnTitle">Title</label>
        <input
          id="openingHymnTitle"
          name="openingHymnTitle"
          type="text"
          defaultValue={meeting.openingHymn.title}
        />
      </fieldset>

      <div>
        <label htmlFor="openingPrayer">Opening prayer</label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          defaultValue={meeting.openingPrayer}
        />
      </div>

      <div>
        <label htmlFor="wardBusiness">
          Ward business — one item per line
        </label>
        <textarea
          id="wardBusiness"
          name="wardBusiness"
          defaultValue={meeting.wardBusiness
            .map((item) => item.description)
            .join('\n')}
        />
      </div>

      <div>
        <input
          id="stakeBusiness"
          name="stakeBusiness"
          type="checkbox"
          defaultChecked={meeting.stakeBusiness}
        />
        <label htmlFor="stakeBusiness">Stake business</label>
      </div>

      <fieldset>
        <legend>Sacrament hymn</legend>

        <label htmlFor="sacramentHymnNumber">Number</label>
        <input
          id="sacramentHymnNumber"
          name="sacramentHymnNumber"
          type="number"
          defaultValue={meeting.sacramentHymn.number}
        />

        <label htmlFor="sacramentHymnTitle">Title</label>
        <input
          id="sacramentHymnTitle"
          name="sacramentHymnTitle"
          type="text"
          defaultValue={meeting.sacramentHymn.title}
        />
      </fieldset>

      <fieldset>
        <legend>Speaker</legend>

        <label htmlFor="speakerName">Name</label>
        <input
          id="speakerName"
          name="speakerName"
          type="text"
          defaultValue={speaker?.name ?? ''}
        />

        <label htmlFor="speakerTopic">Topic</label>
        <input
          id="speakerTopic"
          name="speakerTopic"
          type="text"
          defaultValue={speaker?.topic ?? ''}
        />

        <label htmlFor="speakerType">Type</label>
        <select
          id="speakerType"
          name="speakerType"
          defaultValue={speaker?.type ?? 'speaker'}
        >
          <option value="speaker">Speaker</option>
          <option value="musical-number">Musical number</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Closing hymn</legend>

        <label htmlFor="closingHymnNumber">Number</label>
        <input
          id="closingHymnNumber"
          name="closingHymnNumber"
          type="number"
          defaultValue={meeting.closingHymn.number}
        />

        <label htmlFor="closingHymnTitle">Title</label>
        <input
          id="closingHymnTitle"
          name="closingHymnTitle"
          type="text"
          defaultValue={meeting.closingHymn.title}
        />
      </fieldset>

      <div>
        <label htmlFor="closingPrayer">Closing prayer</label>
        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          defaultValue={meeting.closingPrayer}
        />
      </div>

      {state.message && (
        <p aria-live="polite">{state.message}</p>
      )}

      <button type="submit" disabled={isPending}>
        {isPending ? 'Updating...' : 'Update Meeting'}
      </button>
      </form>
    <form action={deleteMeetingWithId}>
      <button type="submit">Delete Meeting</button>
    </form>
  </>
    
  );
}
