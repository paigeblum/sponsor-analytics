export const sponsor = {
  name: "Twisted Tea",
  contact: { name: "S. Morales", email: "sponsor@demo.example" },
};

export const events = [
  { id: "usc-welcome-back-bash", name: "Welcome Back Bash", date: "2025-08-22", school: "USC", contact: "Liam Chen — liam.chen@usc.edu", occurred: false },
  { id: "usc-greek-row-kickoff", name: "Greek Row Kickoff", date: "2025-09-06", school: "USC", contact: "Panhellenic Council — panhel@usc.edu", occurred: false },
  { id: "usc-game-day-1", name: "Game Day Tailgate vs UCLA", date: "2025-11-15", school: "USC", contact: "Athletics — partners@usc.edu", occurred: false },
  { id: "asu-fall-fest", name: "Fall Fest", date: "2025-10-05", school: "ASU", contact: "Maria Flores — mflores@asu.edu", occurred: false },
  { id: "uta-night-market", name: "Night Market", date: "2025-04-18", school: "UT Austin", contact: "Events — events@utexas.edu", occurred: true },
  { id: "msu-spring-fling", name: "Spring Fling", date: "2025-04-10", school: "Michigan State", contact: "Dean Park — dpark@msu.edu", occurred: true },
  { id: "psu-thon-afterparty", name: "THON Afterparty", date: "2025-03-02", school: "Penn State", contact: "THON Ops — ops@thon.psu.edu", occurred: true },
  { id: "uiowa-hawkeyes-rally", name: "Hawkeyes Rally", date: "2025-02-21", school: "Iowa", contact: "Athletics — partners@uiowa.edu", occurred: true },
  { id: "ucla-block-party", name: "Block Party", date: "2025-05-24", school: "UCLA", contact: "ASUCLA — contact@asucla.ucla.edu", occurred: true },
  { id: "unc-spring-week", name: "Spring Week", date: "2025-04-03", school: "UNC", contact: "Student Life — life@unc.edu", occurred: true },
];

export const analyticsByEventId = {
  "uta-night-market": { attendance: 1800, checkIns: 1325, samplesDistributed: 1200, socialMentions: 540, socialReach: 180000, qrScans: 890, signupEmails: 620, postEventSalesLiftPct: 7.8, regionalFollowersGain: 2100, sentimentScore: 4.5, roiPct: 168, cpm: 7.9, notes: "Night Market drove high sampling and QR capture. Strong uplift week after event." },
  "msu-spring-fling": { attendance: 2300, checkIns: 1710, samplesDistributed: 1500, socialMentions: 760, socialReach: 240000, qrScans: 1040, signupEmails: 840, postEventSalesLiftPct: 9.4, regionalFollowersGain: 3200, sentimentScore: 4.6, roiPct: 192, cpm: 6.8, notes: "Excellent alignment with campus groups; strong reach with low CPM." },
  "psu-thon-afterparty": { attendance: 2600, checkIns: 1950, samplesDistributed: 2100, socialMentions: 980, socialReach: 310000, qrScans: 1475, signupEmails: 1130, postEventSalesLiftPct: 11.2, regionalFollowersGain: 4100, sentimentScore: 4.7, roiPct: 214, cpm: 6.1, notes: "THON halo effect boosted brand perception; sustained follower growth." },
  "uiowa-hawkeyes-rally": { attendance: 1500, checkIns: 1080, samplesDistributed: 980, socialMentions: 420, socialReach: 120000, qrScans: 620, signupEmails: 430, postEventSalesLiftPct: 5.1, regionalFollowersGain: 1200, sentimentScore: 4.3, roiPct: 136, cpm: 8.5, notes: "Solid performance; strong QR-to-email conversion." },
  "ucla-block-party": { attendance: 2000, checkIns: 1500, samplesDistributed: 1350, socialMentions: 610, socialReach: 200000, qrScans: 980, signupEmails: 730, postEventSalesLiftPct: 8.5, regionalFollowersGain: 2600, sentimentScore: 4.6, roiPct: 176, cpm: 7.1, notes: "Great energy and steady sales lift in adjacent ZIPs." },
  "unc-spring-week": { attendance: 1700, checkIns: 1210, samplesDistributed: 1100, socialMentions: 520, socialReach: 160000, qrScans: 760, signupEmails: 540, postEventSalesLiftPct: 6.9, regionalFollowersGain: 1900, sentimentScore: 4.4, roiPct: 158, cpm: 7.6, notes: "High-quality interactions; efficient spend." }
};

export const forecastsByEventId = {
  "usc-welcome-back-bash": { preregistrations: 640, estimatedAttendance: 1900, plannedSamples: 1400, forecastReach: 210000, sponsorSlotsBooked: 3 },
  "usc-greek-row-kickoff": { preregistrations: 880, estimatedAttendance: 2400, plannedSamples: 1700, forecastReach: 260000, sponsorSlotsBooked: 4 },
  "usc-game-day-1": { preregistrations: 1200, estimatedAttendance: 4000, plannedSamples: 2500, forecastReach: 480000, sponsorSlotsBooked: 5 },
  "asu-fall-fest": { preregistrations: 720, estimatedAttendance: 2100, plannedSamples: 1500, forecastReach: 230000, sponsorSlotsBooked: 3 }
};
