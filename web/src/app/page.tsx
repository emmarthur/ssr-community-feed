import { DemoHelpSection } from "@/components/DemoHelpSection";
import { HelpJumpButton } from "@/components/HelpJumpButton";
import { QuestionFeed } from "@/components/QuestionFeed";
import { getQuestionsPage, parsePage } from "@/lib/questions";

export const dynamic = "force-dynamic";

type HomePageProps = {
  searchParams: { page?: string | string[] };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const feed = getQuestionsPage(parsePage(searchParams.page));

  return (
    <div className="feed-page">
      <header className="feed-header">
        <div>
          <p className="feed-kicker">Server-rendered</p>
          <h1 className="feed-title">Community Feed</h1>
          <p className="feed-tagline">
            Hot questions for this page are rendered on the server. Open one for
            the full post, or move to the next page.
          </p>
        </div>
        <HelpJumpButton />
      </header>

      <QuestionFeed {...feed} />
      <DemoHelpSection />
    </div>
  );
}
