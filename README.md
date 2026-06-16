# Computer Based Exam Backend

This is the backend-only version of the Computer Based Examination System.

## Run

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## Database

SQLite database file:

```text
server/data/cbt.sqlite
```

## API Routes

```text
GET  /api/health
GET  /api/exams
GET  /api/exams/:id
POST /api/exams
POST /api/exams/:id/submit
GET  /api/submissions
```

## Tables

```text
exams
submissions
```
