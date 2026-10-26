export function DemoHelpSection() {
  return (
    <section className="feed-help" aria-labelledby="help-heading">
      <h2 id="help-heading">Help</h2>
      <h3>About this app</h3>
      <p>
        A community question feed. Each page of the list is rendered on the
        server, so the first HTML response already contains the titles, view
        counts, and answer counts for that page.
      </p>
      <h3>Data</h3>
      <ul>
        <li>
          Questions ship with the app as a local JSON file. Nothing is loaded
          from an external service.
        </li>
        <li>
          The list is ordered by score, then by views. Five questions appear on
          each page.
        </li>
      </ul>
      <h3>How to use it</h3>
      <ol>
        <li>Open a title to read the full question.</li>
        <li>
          Use <strong>Next</strong> and <strong>Previous</strong> to change pages.
          Each page is requested from the server.
        </li>
        <li>
          Use <strong>Back to feed</strong> on a question to return to the list.
        </li>
      </ol>
    </section>
  );
}
