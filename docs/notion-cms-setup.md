# Notion CMS Setup

This site can read Projects, AI Lab, and Notes from Notion. If the Notion
environment variables are missing or invalid, the site falls back to
`lib/site-data.ts`.

## Environment Variables

Add these variables in Vercel Project Settings > Environment Variables:

```txt
NOTION_TOKEN=
NOTION_PROJECTS_DATABASE_ID=
NOTION_AI_LAB_DATABASE_ID=
NOTION_NOTES_DATABASE_ID=
```

Use the same values locally in `.env.local` when testing.

## Projects Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Name | Title | Project name |
| Scene | Text | Business scene |
| Role | Text | What you did |
| Outcome | Text | Result, metric, or TODO |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Project` or `Title` for `Name`
- `Business Scene` or `Summary` for `Scene`
- `Action` or `Contribution` for `Role`
- `Result` or `Impact` for `Outcome`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## AI Lab Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Title | Title | Experiment title |
| Body | Text | Workflow or result summary |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Name` for `Title`
- `Workflow`, `Summary`, or `Result` for `Body`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## Notes Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Title | Title | Note title |
| Topic | Select or Text | Topic label |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Name` for `Title`
- `Category` or `Summary` for `Topic`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## Notion Integration Checklist

1. Create an internal Notion integration.
2. Copy its secret as `NOTION_TOKEN`.
3. Share each database with that integration.
4. Copy each database ID from the database URL.
5. Add the four environment variables in Vercel.
6. Redeploy once, or wait for the next deployment.

The homepage revalidates every 5 minutes.
