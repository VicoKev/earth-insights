export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: QuizQuestion[];
}

export interface LeaderboardEntry {
  pseudo: string;
  score: number;
  theme: string;
  date: number;
}
