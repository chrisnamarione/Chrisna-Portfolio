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
    desc: "This activity helped me understand the skills we need to develop in the 21st century and the importance of using technology wisely, safely, and responsibly.",
    photos: ["activity2.jpg"],
  },
  {
    id: "activity3",
    label: "Activity 03",
    title: "ICT Survey",
    full: "Activity 3 – ICT Survey",
    desc: "Through this ICT survey, I explored how technology is used in teaching and learning and how it influences their learning experience. By gathering responses and presenting the results through a pie chart, I practiced organizing data and interpreting information. This activity showed me how technology and data can help us understand the world around us.",
    photos: ["activity3.jpg", "activity3.1.jpg", "activity3.2.jpg", "activity3.3.jpg"],
  },
  {
    id: "activity4",
    label: "Activity 04",
    title: "Word Cloud",
    full: "Activity 4 – Word Cloud",
    desc: "This activity helped me organize words into an eye-catching design. It allowed me to express my ideas creatively while improving my digital design skills and learning how to present information visually.",
    photos: ["activity4.jpg"],
  },
  {
    id: "activity5",
    label: "Activity 05",
    title: "E-Safety Rules",
    full: "Activity 5 – E-Safety Rules",
    desc: "This activity teaches the importance of staying safe online. I learned to protect my personal information, respect others, and think carefully before sharing anything on the internet.",
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
    desc: "In this activity, we had our individual demo teaching. Although I felt nervous, I learned the importance of preparation, patience, and engaging activities. This experience inspired me to keep learning and improving as a future educator.",
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
