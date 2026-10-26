import Link from "next/link";

export default function QuestionNotFound() {
  return (
    <div className="feed-page feed-page--narrow">
      <h1 className="feed-title">Question not found</h1>
      <p className="feed-tagline">That id is not in the feed.</p>
      <p>
        <Link href="/">Return to the feed</Link>
      </p>
    </div>
  );
}
