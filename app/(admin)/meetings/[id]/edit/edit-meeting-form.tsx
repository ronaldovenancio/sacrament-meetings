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

const inputClass =
  'mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

const labelClass =
  'block text-sm font-medium text-slate-700';

const errorClass =
  'mt-1 text-sm text-red-600';

const sectionClass =
  'rounded-xl border border-slate-200 bg-slate-50 p-5';

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
    <div className="space-y-6">
      <form
        action={formAction}
        className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Meeting Details
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className={labelClass}>
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                defaultValue={meeting.date}
                aria-describedby="date-error"
                className={inputClass}
              />
              <div id="date-error" aria-live="polite" className={errorClass}>
                {state.errors?.date?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="meetingType" className={labelClass}>
                Meeting type
              </label>
              <select
                id="meetingType"
                name="meetingType"
                defaultValue={meeting.meetingType}
                aria-describedby="meetingType-error"
                className={inputClass}
              >
                <option value="regular">Regular</option>
                <option value="testimony">Testimony</option>
                <option value="stake">Stake</option>
                <option value="general">General</option>
              </select>
              <div
                id="meetingType-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.meetingType?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="presiding" className={labelClass}>
                Presiding
              </label>
              <input
                id="presiding"
                name="presiding"
                type="text"
                defaultValue={meeting.presiding}
                aria-describedby="presiding-error"
                className={inputClass}
              />
              <div
                id="presiding-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.presiding?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="conducting" className={labelClass}>
                Conducting
              </label>
              <input
                id="conducting"
                name="conducting"
                type="text"
                defaultValue={meeting.conducting}
                aria-describedby="conducting-error"
                className={inputClass}
              />
              <div
                id="conducting-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.conducting?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Opening
          </h2>

          <div className="space-y-5">
            <div>
              <label htmlFor="announcements" className={labelClass}>
                Announcements
              </label>
              <p className="mt-1 text-xs text-slate-500">
                Enter one announcement per line.
              </p>
              <textarea
                id="announcements"
                name="announcements"
                rows={4}
                defaultValue={meeting.announcements?.join('\n') ?? ''}
                className={inputClass}
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-slate-800">
                Opening hymn
              </legend>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="openingHymnNumber" className={labelClass}>
                    Number
                  </label>
                  <input
                    id="openingHymnNumber"
                    name="openingHymnNumber"
                    type="number"
                    defaultValue={meeting.openingHymn.number}
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="openingHymnTitle" className={labelClass}>
                    Title
                  </label>
                  <input
                    id="openingHymnTitle"
                    name="openingHymnTitle"
                    type="text"
                    defaultValue={meeting.openingHymn.title}
                    className={inputClass}
                  />
                </div>
              </div>
            </fieldset>

            <div>
              <label htmlFor="openingPrayer" className={labelClass}>
                Opening prayer
              </label>
              <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                defaultValue={meeting.openingPrayer}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Ward Business
          </h2>

          <div>
            <label htmlFor="wardBusiness" className={labelClass}>
              Ward business
            </label>
            <p className="mt-1 text-xs text-slate-500">
              Enter one item per line.
            </p>
            <textarea
              id="wardBusiness"
              name="wardBusiness"
              rows={4}
              defaultValue={meeting.wardBusiness
                .map((item) => item.description)
                .join('\n')}
              className={inputClass}
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <input
              id="stakeBusiness"
              name="stakeBusiness"
              type="checkbox"
              defaultChecked={meeting.stakeBusiness}
              className="h-4 w-4 rounded border-slate-300"
            />
            <label
              htmlFor="stakeBusiness"
              className="text-sm font-medium text-slate-700"
            >
              Include stake business
            </label>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Sacrament
          </h2>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-slate-800">
              Sacrament hymn
            </legend>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="sacramentHymnNumber" className={labelClass}>
                  Number
                </label>
                <input
                  id="sacramentHymnNumber"
                  name="sacramentHymnNumber"
                  type="number"
                  defaultValue={meeting.sacramentHymn.number}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="sacramentHymnTitle" className={labelClass}>
                  Title
                </label>
                <input
                  id="sacramentHymnTitle"
                  name="sacramentHymnTitle"
                  type="text"
                  defaultValue={meeting.sacramentHymn.title}
                  className={inputClass}
                />
              </div>
            </div>
          </fieldset>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Speaker
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="speakerName" className={labelClass}>
                Name
              </label>
              <input
                id="speakerName"
                name="speakerName"
                type="text"
                defaultValue={speaker?.name ?? ''}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="speakerTopic" className={labelClass}>
                Topic
              </label>
              <input
                id="speakerTopic"
                name="speakerTopic"
                type="text"
                defaultValue={speaker?.topic ?? ''}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="speakerType" className={labelClass}>
                Type
              </label>
              <select
                id="speakerType"
                name="speakerType"
                defaultValue={speaker?.type ?? 'speaker'}
                className={inputClass}
              >
                <option value="speaker">Speaker</option>
                <option value="musical-number">Musical number</option>
              </select>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Closing
          </h2>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-slate-800">
              Closing hymn
            </legend>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="closingHymnNumber" className={labelClass}>
                  Number
                </label>
                <input
                  id="closingHymnNumber"
                  name="closingHymnNumber"
                  type="number"
                  defaultValue={meeting.closingHymn.number}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="closingHymnTitle" className={labelClass}>
                  Title
                </label>
                <input
                  id="closingHymnTitle"
                  name="closingHymnTitle"
                  type="text"
                  defaultValue={meeting.closingHymn.title}
                  className={inputClass}
                />
              </div>
            </div>
          </fieldset>

          <div className="mt-5">
            <label htmlFor="closingPrayer" className={labelClass}>
              Closing prayer
            </label>
            <input
              id="closingPrayer"
              name="closingPrayer"
              type="text"
              defaultValue={meeting.closingPrayer}
              className={inputClass}
            />
          </div>
        </section>

        {state.message && (
          <p
            aria-live="polite"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {state.message}
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? 'Updating...' : 'Update Meeting'}
          </button>
        </div>
      </form>

      <form
        action={deleteMeetingWithId}
        className="rounded-2xl border border-red-200 bg-red-50 p-6"
      >
        <h2 className="text-lg font-semibold text-red-900">
          Delete Meeting
        </h2>

        <p className="mt-2 text-sm text-red-700">
          Permanently delete this meeting. This action cannot be undone.
        </p>

        <button
          type="submit"
          className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
        >
          Delete Meeting
        </button>
      </form>
    </div>
  );
}
