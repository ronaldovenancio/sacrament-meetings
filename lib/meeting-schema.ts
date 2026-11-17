import { z } from 'zod';

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    speakerName?: string[];
    speakerTopic?: string[];
    speakerType?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

export const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: z.enum(
    ['testimony', 'regular', 'stake', 'general'],
    { error: 'Please select a meeting type.' }
  ),
  presiding: z.string().min(1, 'Presiding leader is required.'),
  conducting: z.string().min(1, 'Conducting leader is required.'),

  announcements: z.string().optional(),

  openingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Opening hymn number must be positive.'),
  openingHymnTitle: z.string().min(1, 'Opening hymn title is required.'),

  openingPrayer: z.string().min(1, 'Opening prayer is required.'),

  wardBusiness: z.string().optional(),

  stakeBusiness: z.preprocess(
    (value) => value === 'on' || value === 'true',
    z.boolean()
  ),

  sacramentHymnNumber: z.coerce
    .number()
    .int()
    .positive('Sacrament hymn number must be positive.'),
  sacramentHymnTitle: z.string().min(1, 'Sacrament hymn title is required.'),

  speakerName: z.string().min(1, 'Speaker name is required.'),
  speakerTopic: z.string().min(1, 'Speaker topic is required.'),
  speakerType: z.enum(['speaker', 'musical-number']),

  closingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Closing hymn number must be positive.'),
  closingHymnTitle: z.string().min(1, 'Closing hymn title is required.'),

  closingPrayer: z.string().min(1, 'Closing prayer is required.'),
});
