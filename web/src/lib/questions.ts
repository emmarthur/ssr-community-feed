import fs from "fs";
import path from "path";

/** Five items per page keeps pagination easy to try in the demo. */
export const PAGE_SIZE = 5;

export type Question = {
  question_id: number;
  title: string;
  body: string;
  view_count: number;
  answer_count: number;
  score: number;
  tags: string[];
  owner: { display_name: string };
  creation_date: number;
};

export type QuestionPage = {
  questions: Question[];
  hasMore: boolean;
  page: number;
};

const DATA_PATH = path.join(process.cwd(), "data", "questions.json");

function loadQuestions(): Question[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  const questions = JSON.parse(raw) as Question[];
  return [...questions].sort(
    (a, b) => b.score - a.score || b.view_count - a.view_count,
  );
}

export function parsePage(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const page = Number(raw);
  if (!Number.isFinite(page) || page < 1) {
    return 1;
  }
  return Math.floor(page);
}

export function getQuestionsPage(pageInput: number): QuestionPage {
  const all = loadQuestions();
  const pageCount = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, pageInput), pageCount);
  const start = (page - 1) * PAGE_SIZE;

  return {
    questions: all.slice(start, start + PAGE_SIZE),
    hasMore: start + PAGE_SIZE < all.length,
    page,
  };
}

export function getQuestionById(id: string): Question | undefined {
  const questionId = Number(id);
  if (!Number.isFinite(questionId)) {
    return undefined;
  }
  return loadQuestions().find((question) => question.question_id === questionId);
}
