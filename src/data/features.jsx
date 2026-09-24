export const FEATURES = [
  {
    tag: "Teachers",
    title: "Score entry, built for fast typing",
    body: "Classwork, groupwork, project work, tests, and exams — enter scores per class with validation that catches typos before they become report-card errors.",
    icon: <path d="M12 20V10 M18 20V4 M6 20v-16" />,
  },
  {
    tag: "Teachers · Students",
    title: "Class rankings & subject rankings",
    body: "Automatic position tracking per class and per subject, with a podium view for the term's top performers.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
      </>
    ),
  },
  {
    tag: "Admins",
    title: "Academic years, terms & class management",
    body: "Open and close terms for score entry, manage classes and subjects, and assign teachers — all from one panel.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18 M8 2v4 M16 2v4" />
      </>
    ),
  },
  {
    tag: "Admins",
    title: "Excel import & report card export",
    body: "Bulk-import students, teachers, and assignments from a spreadsheet, and export broadsheets and student report cards as PDF or Excel.",
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />,
  },
  {
    tag: "Everyone",
    title: "Progress at a glance",
    body: "Completion rings, an activity log, and a dashboard that shows exactly who still has scores outstanding before the deadline.",
    icon: (
      <path d="M12 2v4 M6.34 6.34l2.83 2.83 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M2 12h4 M18 12h4 M6.34 17.66l2.83-2.83 M14.83 9.17l2.83-2.83" />
    ),
  },
];
