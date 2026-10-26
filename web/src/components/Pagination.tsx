import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  hasMore: boolean;
  basePath?: string;
};

function pageHref(basePath: string, page: number): string {
  if (page <= 1) {
    return basePath;
  }
  return `${basePath}?page=${page}`;
}

export function Pagination({
  currentPage,
  hasMore,
  basePath = "/",
}: PaginationProps) {
  return (
    <nav className="feed-pagination" aria-label="Question pages">
      {currentPage > 1 ? (
        <Link className="feed-page-btn" href={pageHref(basePath, currentPage - 1)}>
          Previous
        </Link>
      ) : (
        <span className="feed-page-btn is-disabled" aria-disabled="true">
          Previous
        </span>
      )}
      <span className="feed-page-status">Page {currentPage}</span>
      {hasMore ? (
        <Link className="feed-page-btn" href={pageHref(basePath, currentPage + 1)}>
          Next
        </Link>
      ) : (
        <span className="feed-page-btn is-disabled" aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
}
