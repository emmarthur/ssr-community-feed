# Book directions — SSR community feed

**Catalog #407** · Roy Derks, *React Projects* (2nd ed., 2022), **Chapter 4** — Building a server-side-rendered community feed using Next.js

- Finished chapter (upstream): [Chapter04](https://github.com/PacktPublishing/React-Projects-Second-Edition/tree/main/Chapter04)
- Local app: [`web/`](./web/)

The Packt repo’s `Chapter07` folder is the later GraphQL shop, not this project.

## What the book asks you to build

A **community question feed** with Next.js **server-side rendering**:

1. **Header** titled “Community Feed”, plus global page styles.
2. **Questions list** via `getServerSideProps`. The chapter requests one page from the Stack Exchange API (`order=desc&sort=hot&tagged=reactjs&site=stackoverflow`) and passes `page` from the query string.
3. **Card** for each question: title, `Views`, and `Answers`.
4. Each card links to **`/questions/[id]`**.
5. **Pagination**: Previous / Next. Next stays available while the API reports `has_more`. Previous uses `page - 1`.
6. **Home** re-exports the questions page and the same `getServerSideProps`.
7. **Question detail** loads one question by id (the finished chapter does this in the browser with `useEffect`).
8. **styled-components** collected during SSR in `_document.js`, with the Next compiler flag `styledComponents: true`.

## This demo (`web/` — port **3013**)

Same list, card fields, pagination, and detail route. Differences from the chapter, so the demo runs with no API key and no external service:

| Book piece | Web equivalent |
|------------|----------------|
| Pages Router + `getServerSideProps` | App Router server components, `dynamic = "force-dynamic"` |
| Stack Exchange `items` / `has_more` | [`web/data/questions.json`](./web/data/questions.json), page size **5**, ordered by score then views |
| `styled-components` | [`web/src/app/globals.css`](./web/src/app/globals.css) |
| Detail fetched in `useEffect` | Detail rendered on the server from the same JSON |

```powershell
Set-Location "c:\Users\emmak\Desktop\Content\CodingProjects\PortProjects\demos\ssr-community-feed\web"
npm install
npm run dev
```
