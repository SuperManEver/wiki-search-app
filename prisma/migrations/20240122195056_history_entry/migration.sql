-- CreateTable
CREATE TABLE "SearchHistoryEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "SearchHistoryEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SearchHistoryEntry_userId_id_key" ON "SearchHistoryEntry"("userId", "id");
