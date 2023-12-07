import quiz from "../assets/images/advantages/quiz.svg";
import difference from "../assets/images/advantages/difference.svg";
import notification from "../assets/images/advantages/notifications.svg";

export const advantages = [
  {
    img: quiz,
    imgWidth: "6.7rem",
    title: "Challenge Your Word Wisdom with Quizzes!",
    description: `Here, we believe in making language learning not only informative
      but also fun and interactive. That's why we've introduced an
      exciting new feature: Word Quizzes!`,
    type: "",
  },
  {
    img: notification,
    imgWidth: "14rem",
    title: "Never Forget a Word: Personalized Repetition Notifications",
    description: `We're taking your language-learning journey to the next level!
      Introducing our latest feature: Repetition Notifications.`,
    type: "primary",
  },
  {
    img: difference,
    imgWidth: "15rem",
    title: "Explore Nuances of Language with Synonyms and Antonyms",
    description: `Dive deeper into the rich tapestry of language. Uncover the subtle
      shades of meaning, expand your vocabulary, and express yourself
      with greater precision.`,
    type: "",
  },
] as const;
