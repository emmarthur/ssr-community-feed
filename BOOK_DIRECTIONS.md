# Book directions — SSR community feed

**Catalog #407** · Roy Derks, *React Projects* (2nd ed., 2022), **Chapter 4** — Building a Server-Side-Rendered Community Feed Using Next.js

- Local PDF: `E:\Books\Other\React Projects Build advanced cross-platform projects with React and React Native to become a professional developer, 2nd Ed (Roy Derks) (z-lib.org).pdf`
- Printed pages **104–135** (PDF indices **120–151**)
- Finished chapter (upstream): [Chapter04](https://github.com/PacktPublishing/React-Projects-Second-Edition/tree/main/Chapter04)
- Local app: [`web/`](./web/)

The Packt repo’s `Chapter07` folder is the later GraphQL shop, not this project.

## Section order

### Project overview / Getting started

Community feed of recent questions tagged `reactjs`, loaded on the server, with pages that search engines can read. Book build time is about 2 hours. Data in the book comes from the public Stack Exchange questions API (`order=desc&sort=hot&tagged=reactjs&site=stackoverflow`).

### Setting up Next.js

1. `npx create-next-app` (book uses Next.js 12, Pages Router).
2. Add **styled-components**.
3. Custom `pages/_document.js` collects styles with `ServerStyleSheet` so CSS is in the server HTML.
4. `next.config.js`: `compiler.styledComponents: true`.
5. Global styles and a **Header** (“Community Feed”) in `pages/_app.js`, plus a default `<title>` and meta description.

### Routing with Next.js

1. `pages/questions/index.js` → `/questions`, heading “Questions”.
2. **Card**: `title`, `Views`, `Answers` (`view_count`, `answer_count`).
3. First version fetches the API in the browser (`useEffect`).
4. `pages/questions/[id].js` reads `id` from the router and fetches that question (the book’s detail page stays a client fetch and renders the same card).
5. Each card is a `next/link` to `/questions/{question_id}`.
6. `pages/index.js` renders the same questions list on `/`.

### Handling query strings

1. Read `page` from the query string and append it to the API URL when it is set.
2. **Pagination**: Previous is `?page={current - 1}`, Next is `?page={current + 1}`.
3. Disable Previous when `currentPage <= 1`. Disable Next when `has_more` is false.

### Enabling SSR

1. Replace the client fetch with **`getServerSideProps`**. Props: `questions` (`result.items`), `hasMore` (`result.has_more`), `page` (`page || 1`).
2. Drop the loading state. The list is already in the HTML.
3. Re-export that `getServerSideProps` from `pages/index.js` and pass the props through, or `/` has no data.
4. **Head tags**: Header sets the default title and description. `/questions` sets the title to “Questions”. The detail route sets the title to the question title.

## This demo (`web/` — port **3013**)

| Book piece | Web equivalent |
|------------|----------------|
| Pages Router + `getServerSideProps` | App Router server components, `dynamic = "force-dynamic"` |
| Stack Exchange `items` / `has_more` / `page` | [`web/data/questions.json`](./web/data/questions.json). Page size **5** (the API default is 30) so Previous and Next both show up. Ordered by score, then views, as a stand-in for `sort=hot`. |
| `styled-components` + `_document` | [`web/src/app/globals.css`](./web/src/app/globals.css) |
| Detail fetched in the browser | Detail rendered on the server from the same JSON, with the question title in the document title |
| `/` and `/questions` | Both routes render a page of questions. Pagination keeps the route you are on. |

```powershell
Set-Location "c:\Users\emmak\Desktop\Content\CodingProjects\PortProjects\demos\ssr-community-feed\web"
npm install
npm run dev
```
