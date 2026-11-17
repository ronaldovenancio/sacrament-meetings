'use client';

import { useActionState } from 'react';
import { createMeeting } from '@/lib/actions';
import type { State } from '@/lib/meeting-schema';

const initialState: State = {
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Create Meeting</h1>

      <form action={formAction} className="space-y-6">
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
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
            aria-describedby="meetingType-error"
            defaultValue=""
          >
            <option value="" disabled>
              Select a meeting type
            </option>
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
            aria-describedby="announcements-error"
          />
          <div id="announcements-error" aria-live="polite">
            {state.errors?.announcements?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <fieldset>
          <legend>Opening hymn</legend>

          <label htmlFor="openingHymnNumber">Number</label>
          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            aria-describedby="openingHymnNumber-error"
          />
          <div id="openingHymnNumber-error" aria-live="polite">
            {state.errors?.openingHymnNumber?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>

          <label htmlFor="openingHymnTitle">Title</label>
          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            type="text"
            aria-describedby="openingHymnTitle-error"
          />
          <div id="openingHymnTitle-error" aria-live="polite">
            {state.errors?.openingHymnTitle?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="openingPrayer">Opening prayer</label>
          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            aria-describedby="openingPrayer-error"
          />
          <div id="openingPrayer-error" aria-live="polite">
            {state.errors?.openingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="wardBusiness">
            Ward business — one item per line
          </label>
          <textarea
            id="wardBusiness"
            name="wardBusiness"
            aria-describedby="wardBusiness-error"
          />
          <div id="wardBusiness-error" aria-live="polite">
            {state.errors?.wardBusiness?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
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
            aria-describedby="sacramentHymnNumber-error"
          />
          <div id="sacramentHymnNumber-error" aria-live="polite">
            {state.errors?.sacramentHymnNumber?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>

          <label htmlFor="sacramentHymnTitle">Title</label>
          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            type="text"
            aria-describedby="sacramentHymnTitle-error"
          />
          <div id="sacramentHymnTitle-error" aria-live="polite">
            {state.errors?.sacramentHymnTitle?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Speaker</legend>

          <label htmlFor="speakerName">Name</label>
          <input
            id="speakerName"
            name="speakerName"
            type="text"
            aria-describedby="speakerName-error"
          />
          <div id="speakerName-error" aria-live="polite">
            {state.errors?.speakerName?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>

          <label htmlFor="speakerTopic">Topic</label>
          <input
            id="speakerTopic"
            name="speakerTopic"
            type="text"
            aria-describedby="speakerTopic-error"
          />
          <div id="speakerTopic-error" aria-live="polite">
            {state.errors?.speakerTopic?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>

          <label htmlFor="speakerType">Type</label>
          <select
            id="speakerType"
            name="speakerType"
            aria-describedby="speakerType-error"
            defaultValue="speaker"
          >
            <option value="speaker">Speaker</option>
            <option value="musical-number">Musical number</option>
          </select>
          <div id="speakerType-error" aria-live="polite">
            {state.errors?.speakerType?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Closing hymn</legend>

          <label htmlFor="closingHymnNumber">Number</label>
          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            aria-describedby="closingHymnNumber-error"
          />
          <div id="closingHymnNumber-error" aria-live="polite">
            {state.errors?.closingHymnNumber?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>

          <label htmlFor="closingHymnTitle">Title</label>
          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            type="text"
            aria-describedby="closingHymnTitle-error"
          />
          <div id="closingHymnTitle-error" aria-live="polite">
            {state.errors?.closingHymnTitle?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="closingPrayer">Closing prayer</label>
          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            aria-describedby="closingPrayer-error"
          />
          <div id="closingPrayer-error" aria-live="polite">
            {state.errors?.closingPrayer?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        {state.message && (
          <p aria-live="polite">{state.message}</p>
        )}

        <button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Meeting'}
        </button>
      </form>
    </main>
  );
}
