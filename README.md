# SSR Community Feed

Next.js server-rendered question feed. Each page of the list is built on the server from local JSON—no cloud API.

| Artifact | Path |
|----------|------|
| Book steps | [`BOOK_DIRECTIONS.md`](./BOOK_DIRECTIONS.md) |
| Web (Next.js) | [`web/`](./web/) — port **3013** |

## Run the web demo

```powershell
Set-Location "c:\Users\emmak\Desktop\Content\CodingProjects\PortProjects\demos\ssr-community-feed\web"
npm install
npm run dev
```

Open [http://127.0.0.1:3013/](http://127.0.0.1:3013/).

If `npm install` fails with `EBUSY` or `next` is missing files, stop any running dev servers, delete `web\node_modules`, and run `npm install` again. The npm scripts call Next through `node` so a broken `.bin` shim on Windows is less likely to break builds.
