# ERD generated from Prisma schema

This file contains a Mermaid ER diagram generated from src/prisma/schema.prisma.

```mermaid
erDiagram
  USER {
    Int id PK
    String name
    String email UQ
    DateTime createdAt
  }

  EXAM {
    Int id PK
    String title
    String description
    DateTime createdAt
  }

  QUESTION {
    Int id PK
    Int examId FK
    String text
    DateTime createdAt
  }

  ANSWER {
    Int id PK
    Int questionId FK
    String text
    Boolean isCorrect
    DateTime createdAt
  }

  SUBMISSION {
    Int id PK
    Int examId FK
    Int userId FK
    String answers
    DateTime createdAt
  }

  EXAM ||--o{ QUESTION : has
  QUESTION ||--o{ ANSWER : has
  EXAM ||--o{ SUBMISSION : has
  USER ||--o{ SUBMISSION : makes
  SUBMISSION }o--|| EXAM : for
  SUBMISSION }o--|| USER : by

```

Notes:
- `Submission.answers` is stored as a string in the schema (likely JSON); consider normalizing if you want fully relational answer records per submission.

To view this diagram locally, use a Markdown viewer that supports Mermaid or convert with `mmdc` (Mermaid CLI):

```powershell
npm install -g @mermaid-js/mermaid-cli
mmdc -i src/ERD.md -o src/ERD.png
```
