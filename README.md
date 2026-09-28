# Post Composer (React)

A simple Post Composer built with React and Vite.

## Features
- Textarea for writing a post
- Platform selector: Twitter or LinkedIn
- Character limit: 280 (Twitter) and 3000 (LinkedIn)
- Live character count (e.g. `120 / 280 characters`)
- Error message when the limit is exceeded
- Post button is disabled when the post is empty or over the limit

## Concepts used
- Controlled components (`value` + `onChange`)
- `useState` for the text and the selected platform
- Derived values (count, limit, over-limit check) calculated during render
- Conditional rendering for the error message

## Run locally
```bash
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).
