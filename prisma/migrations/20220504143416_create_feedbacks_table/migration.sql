-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "screenshot" TEXT,
    "user" TEXT DEFAULT 'xSallus'
);
