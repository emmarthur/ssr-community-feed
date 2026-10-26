import Link from "next/link";

import type { Question } from "@/lib/questions";

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className="feed-card">
      <h2 className="feed-card-title">
        <Link href={`/questions/${question.question_id}`}>{question.title}</Link>
      </h2>
      <p className="feed-meta">
        {question.owner.display_name}
        {" · "}
        {`Views: ${question.view_count.toLocaleString()} | Answers: ${question.answer_count}`}
      </p>
    </article>
  );
}
