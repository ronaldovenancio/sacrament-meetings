import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-11-01",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Ward activity this Saturday"],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of new Primary president" }],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
  },
  {
    id: 2,
    date: "2026-10-25",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Taylor",
    openingHymn: { number: 85, title: "How Firm a Foundation" },
    openingPrayer: "Sister Lee",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: "In Humility, Our Savior" },
    speakers: [
      {
        name: "Brother Wilson",
        topic: "Service",
        type: "speaker",
      },
    ],
    closingHymn: { number: 98, title: "I Need Thee Every Hour" },
    closingPrayer: "Brother Clark",
  },
  {
    id: 3,
    date: "2026-10-18",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 136, title: "I Know That My Redeemer Lives" },
    openingPrayer: "Sister Adams",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 173, title: "While of These Emblems We Partake" },
    speakers: [],
    closingHymn: { number: 152, title: "God Be with You Till We Meet Again" },
    closingPrayer: "Brother Miller",
  },
  {
    id: 4,
    date: "2026-10-11",
    meetingType: "stake",
    presiding: "President Johnson",
    conducting: "President Johnson",
    openingHymn: { number: 58, title: "Come, Ye Children of the Lord" },
    openingPrayer: "Sister Carter",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 170, title: "God, Our Father, Hear Us Pray" },
    speakers: [
      {
        name: "President Johnson",
        topic: "Discipleship",
        type: "speaker",
      },
    ],
    closingHymn: { number: 100, title: "Nearer, My God, to Thee" },
    closingPrayer: "Brother White",
  },
  {
    id: 5,
    date: "2026-10-04",
    meetingType: "general",
    presiding: "General Authorities",
    conducting: "General Conference",
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Assigned Speaker",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: "Jesus, Once of Humble Birth" },
    speakers: [
      {
        name: "General Authority",
        topic: "Following Jesus Christ",
        type: "speaker",
      },
      {
        name: "Conference Choir",
        topic: "",
        type: "musical-number",
      },
    ],
    closingHymn: { number: 134, title: "I Believe in Christ" },
    closingPrayer: "Assigned Speaker",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}