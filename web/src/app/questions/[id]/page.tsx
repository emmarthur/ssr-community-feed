import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { formatPostDate } from "@/lib/format";
import { getQuestionById } from "@/lib/questions";

export const dynamic = "force-dynamic";

type QuestionPageProps = {
  params: { id: string };
};

export function generateMetadata({ params }: QuestionPageProps): Metadata {
  const question = getQuestionById(params.id);
  return {
    title: question?.title ?? "Question",
  };
}

export default function QuestionDetailPage({ params }: QuestionPageProps) {
  const question = getQuestionById(params.id);
  if (!question) {
    notFound();
  }

  const paragraphs = question.body
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="feed-page feed-page--narrow">
      <header className="feed-header">
        <div>
          <Link href="/" className="feed-back">
            ← Back to feed
          </Link>
          <h1 className="feed-title feed-title--post">{question.title}</h1>
          <p className="feed-meta">
            {question.owner.display_name}
            {" · "}
            {formatPostDate(new Date(question.creation_date * 1000).toISOString())}
          </p>
          <p className="feed-meta">
            {`Views: ${question.view_count.toLocaleString()} | Answers: ${question.answer_count} | Score: ${question.score}`}
          </p>
          <ul className="feed-tags">
            {question.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <Link href="/#help-heading" className="help-jump-btn">
          Help
        </Link>
      </header>

      <article className="feed-article">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
