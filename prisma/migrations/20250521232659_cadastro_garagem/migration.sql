/*
  Warnings:

  - You are about to drop the `TB_GARAGEM` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TB_GARAGEM";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cadastro_garagem" (
    "ID_GARAGEM" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NOME_GARAGEM" TEXT,
    "RUA" TEXT,
    "BAIRRO" TEXT,
    "NUMERO" INTEGER,
    "CEP" TEXT
);
