'use client';

import { useActionState } from 'react';
import { createMeeting } from '@/lib/actions';
import type { State } from '@/lib/meeting-schema';

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

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Administration
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Create Meeting
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Enter the sacrament meeting program details below.
        </p>
      </div>

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
                aria-describedby="date-error"
                className={inputClass}
              />

              <div
                id="date-error"
                aria-live="polite"
                className={errorClass}
              >
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
                aria-describedby="meetingType-error"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select a meeting type
                </option>
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
                aria-describedby="announcements-error"
                className={inputClass}
              />

              <div
                id="announcements-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.announcements?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-slate-800">
                Opening hymn
              </legend>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="openingHymnNumber"
                    className={labelClass}
                  >
                    Number
                  </label>

                  <input
                    id="openingHymnNumber"
                    name="openingHymnNumber"
                    type="number"
                    aria-describedby="openingHymnNumber-error"
                    className={inputClass}
                  />

                  <div
                    id="openingHymnNumber-error"
                    aria-live="polite"
                    className={errorClass}
                  >
                    {state.errors?.openingHymnNumber?.map((error) => (
                      <p key={error}>{error}</p>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="openingHymnTitle"
                    className={labelClass}
                  >
                    Title
                  </label>

                  <input
                    id="openingHymnTitle"
                    name="openingHymnTitle"
                    type="text"
                    aria-describedby="openingHymnTitle-error"
                    className={inputClass}
                  />

                  <div
                    id="openingHymnTitle-error"
                    aria-live="polite"
                    className={errorClass}
                  >
                    {state.errors?.openingHymnTitle?.map((error) => (
                      <p key={error}>{error}</p>
                    ))}
                  </div>
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
                aria-describedby="openingPrayer-error"
                className={inputClass}
              />

              <div
                id="openingPrayer-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.openingPrayer?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
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
              aria-describedby="wardBusiness-error"
              className={inputClass}
            />

            <div
              id="wardBusiness-error"
              aria-live="polite"
              className={errorClass}
            >
              {state.errors?.wardBusiness?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <input
              id="stakeBusiness"
              name="stakeBusiness"
              type="checkbox"
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
                <label
                  htmlFor="sacramentHymnNumber"
                  className={labelClass}
                >
                  Number
                </label>

                <input
                  id="sacramentHymnNumber"
                  name="sacramentHymnNumber"
                  type="number"
                  aria-describedby="sacramentHymnNumber-error"
                  className={inputClass}
                />

                <div
                  id="sacramentHymnNumber-error"
                  aria-live="polite"
                  className={errorClass}
                >
                  {state.errors?.sacramentHymnNumber?.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="sacramentHymnTitle"
                  className={labelClass}
                >
                  Title
                </label>

                <input
                  id="sacramentHymnTitle"
                  name="sacramentHymnTitle"
                  type="text"
                  aria-describedby="sacramentHymnTitle-error"
                  className={inputClass}
                />

                <div
                  id="sacramentHymnTitle-error"
                  aria-live="polite"
                  className={errorClass}
                >
                  {state.errors?.sacramentHymnTitle?.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
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
                aria-describedby="speakerName-error"
                className={inputClass}
              />

              <div
                id="speakerName-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.speakerName?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="speakerTopic" className={labelClass}>
                Topic
              </label>

              <input
                id="speakerTopic"
                name="speakerTopic"
                type="text"
                aria-describedby="speakerTopic-error"
                className={inputClass}
              />

              <div
                id="speakerTopic-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.speakerTopic?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="speakerType" className={labelClass}>
                Type
              </label>

              <select
                id="speakerType"
                name="speakerType"
                aria-describedby="speakerType-error"
                defaultValue="speaker"
                className={inputClass}
              >
                <option value="speaker">Speaker</option>
                <option value="musical-number">Musical number</option>
              </select>

              <div
                id="speakerType-error"
                aria-live="polite"
                className={errorClass}
              >
                {state.errors?.speakerType?.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
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
                <label
                  htmlFor="closingHymnNumber"
                  className={labelClass}
                >
                  Number
                </label>

                <input
                  id="closingHymnNumber"
                  name="closingHymnNumber"
                  type="number"
                  aria-describedby="closingHymnNumber-error"
                  className={inputClass}
                />

                <div
                  id="closingHymnNumber-error"
                  aria-live="polite"
                  className={errorClass}
                >
                  {state.errors?.closingHymnNumber?.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="closingHymnTitle"
                  className={labelClass}
                >
                  Title
                </label>

                <input
                  id="closingHymnTitle"
                  name="closingHymnTitle"
                  type="text"
                  aria-describedby="closingHymnTitle-error"
                  className={inputClass}
                />

                <div
                  id="closingHymnTitle-error"
                  aria-live="polite"
                  className={errorClass}
                >
                  {state.errors?.closingHymnTitle?.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
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
              aria-describedby="closingPrayer-error"
              className={inputClass}
            />

            <div
              id="closingPrayer-error"
              aria-live="polite"
              className={errorClass}
            >
              {state.errors?.closingPrayer?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
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
            {isPending ? 'Creating...' : 'Create Meeting'}
          </button>
        </div>
      </form>
    </main>
  );
}
