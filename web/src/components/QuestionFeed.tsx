import { Pagination } from "@/components/Pagination";
import { QuestionCard } from "@/components/QuestionCard";
import type { QuestionPage } from "@/lib/questions";

type QuestionFeedProps = QuestionPage & {
  basePath?: string;
};

export function QuestionFeed({
  questions,
  hasMore,
  page,
  basePath = "/",
}: QuestionFeedProps) {
  return (
    <section className="feed-list" aria-labelledby="feed-list-heading">
      <h2 id="feed-list-heading" className="feed-section-title">
        Questions
      </h2>
      <div className="feed-cards">
        {questions.map((question) => (
          <QuestionCard key={question.question_id} question={question} />
        ))}
      </div>
      <Pagination currentPage={page} hasMore={hasMore} basePath={basePath} />
    </section>
  );
}
