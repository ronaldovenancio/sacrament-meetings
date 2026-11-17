'use server';

import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from './meetings-db';
import { MeetingFormSchema, type State } from './meeting-schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    speakerName: formData.get('speakerName'),
    speakerTopic: formData.get('speakerTopic'),
    speakerType: formData.get('speakerType'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields.',
    };
  }

  const data = validatedFields.data;

  const announcements =
    data.announcements
      ?.split('\n')
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  const wardBusiness = data.wardBusiness
    ? data.wardBusiness
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((description) => ({ description }))
    : [];

  try {
    await addMeeting({
      date: data.date,
      meetingType: data.meetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      announcements,
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      wardBusiness,
      stakeBusiness: data.stakeBusiness,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      speakers: [
        {
          name: data.speakerName,
          topic: data.speakerTopic,
          type: data.speakerType,
        },
      ],
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });
  } catch (error) {
    console.error('Failed to create meeting:', error);
    throw new Error('Unable to create the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    speakerName: formData.get('speakerName'),
    speakerTopic: formData.get('speakerTopic'),
    speakerType: formData.get('speakerType'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields.',
    };
  }

  const data = validatedFields.data;

  const announcements =
    data.announcements
      ?.split('\n')
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  const wardBusiness = data.wardBusiness
    ? data.wardBusiness
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((description) => ({ description }))
    : [];

  try {
    const updatedMeeting = await updateMeetingDb(id, {
      date: data.date,
      meetingType: data.meetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      announcements,
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      wardBusiness,
      stakeBusiness: data.stakeBusiness,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      speakers: [
        {
          name: data.speakerName,
          topic: data.speakerTopic,
          type: data.speakerType,
        },
      ],
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });

    if (!updatedMeeting) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Failed to update meeting:', error);
    throw new Error('Unable to update the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    const deleted = await deleteMeetingDb(id);

    if (!deleted) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Failed to delete meeting:', error);
    throw new Error('Unable to delete the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}