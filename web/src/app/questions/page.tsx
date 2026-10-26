import type { Metadata } from "next";

import { DemoHelpSection } from "@/components/DemoHelpSection";
import { HelpJumpButton } from "@/components/HelpJumpButton";
import { QuestionFeed } from "@/components/QuestionFeed";
import { getQuestionsPage, parsePage } from "@/lib/questions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Questions",
};

type QuestionsPageProps = {
  searchParams: { page?: string | string[] };
};

export default function QuestionsPage({ searchParams }: QuestionsPageProps) {
  const feed = getQuestionsPage(parsePage(searchParams.page));

  return (
    <div className="feed-page">
      <header className="feed-header">
        <div>
          <p className="feed-kicker">Server-rendered</p>
          <h1 className="feed-title">Questions</h1>
          <p className="feed-tagline">
            The same page of questions as the home feed, rendered on the server
            for this route.
          </p>
        </div>
        <HelpJumpButton />
      </header>

      <QuestionFeed {...feed} basePath="/questions" />
      <DemoHelpSection />
    </div>
  );
}
