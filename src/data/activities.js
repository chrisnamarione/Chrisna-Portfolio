// All portfolio content lives here. Edit this file to change text or photos.
// Local photos go in /public/images and are referenced by file name only.
// Full URLs (https://...) also work.

const BASE = import.meta.env.BASE_URL;
export const imageUrl = (file) => (file.startsWith("http") ? file : `${BASE}images/${file}`);
export const videoUrl = (file) => (file.startsWith("http") ? file : `${BASE}videos/${file}`);

export const profile = {
  welcome:
    "Welcome to my Portfolio! This website is a compilation of my journey in learning about information and communication technology (ICT). I hope you enjoy exploring my works and the lessons I gained along the way.",
};

export const activities = [
  {
    id: "activity1",
    label: "Activity 01",
    title: "QR Code Making",
    full: "Activity 1 – QR Code Making",
    desc: "My first activity introduces my digital journey and a little about me. The QR code shows how information can be shared with a simple scan.",
    photos: ["activity1.jpg", "activity1.1.jpg"],
  },
  {
    id: "activity2",
    label: "Activity 02",
    title: "Digital Skills vs Digital Literacy",
    full: "Activity 2 – Digital Skills vs. Digital Literacy",
    desc: "This activity helped me understand the skills we need to develop in the 21st century.",
    photos: ["activity2.jpg"],
  },
  {
    id: "activity3",
    label: "Activity 03",
    title: "ICT Survey",
    full: "Activity 3 – ICT Survey",
    desc: "Through the ICT survey, I explored how technology is used in teaching and learning.",
    photos: ["activity3.jpg", "activity3.1.jpg", "activity3.2.jpg", "activity3.3.jpg"],
  },
  {
    id: "activity4",
    label: "Activity 04",
    title: "Word Cloud",
    full: "Activity 4 – Word Cloud",
    desc: "I made a word cloud about online learning and technology.",
    photos: ["activity4.jpg"],
  },
  {
    id: "activity5",
    label: "Activity 05",
    title: "E-Safety Rules",
    full: "Activity 5 – E-Safety Rules",
    desc: "We asked about the e-safety rules followed in schools.",
    photos: ["activity5.png", "activity5.1.png", "activity5.2.png"],
  },
  {
    id: "activity6",
    label: "Activity 06",
    title: "Infographic",
    full: "Activity 6 – Infographics",
    desc: "I connected digital creativity with Science by presenting information about the different types of geological faults.",
    photos: ["activity6.jpg"],
  },
  {
    id: "activity7",
    label: "Activity 07",
    title: "Flip Chart",
    full: "Activity 7 – Flip Chart",
    desc: "We made a flip chart as an instructional material, this activity shows our collaborative learning experience and how we presented ideas visually.",
    photos: ["activity7.jpg"],
  },
  {
    id: "activity8",
    title: "Demo Teaching",
    full: "Activity 8 – Demo Teaching",
    highlight: true,
    desc: "I conducted an individual microteaching demo as part of our final requirement in TTL1.",
    photos: [
      "activity8.6.jpg",
      "activity8.7.jpg",
      "activity8.3.jpg",
      "activity8.4.jpg",
      "activity8.5.jpg",
      "activity8.1.jpg",
      "activity8.2.jpg",
    ],
  },
    {
    id: "activity9",
    title: "Video Animations",
    full: "Activity 9 – Video Animations",
    desc: "We made an animation video entitled “The Land of Forgotten Words” In this story I learned that a real friends will understand and forgive us if we are honest and sincere in saying sorry.",
    photos: ["activity9.jpg"],
    link: "https://www.facebook.com/reel/1119930157568374",
    video: { facebook: true },
  },
];
