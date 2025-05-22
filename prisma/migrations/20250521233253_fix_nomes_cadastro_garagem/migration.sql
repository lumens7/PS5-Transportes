/*
  Warnings:

  - You are about to drop the column `BAIRRO` on the `cadastro_garagem` table. All the data in the column will be lost.
  - You are about to drop the column `CEP` on the `cadastro_garagem` table. All the data in the column will be lost.
  - You are about to drop the column `NOME_GARAGEM` on the `cadastro_garagem` table. All the data in the column will be lost.
  - You are about to drop the column `NUMERO` on the `cadastro_garagem` table. All the data in the column will be lost.
  - You are about to drop the column `RUA` on the `cadastro_garagem` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `cadastro_garagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `cadastro_garagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_garagem` to the `cadastro_garagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `cadastro_garagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `cadastro_garagem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cadastro_garagem" (
    "ID_GARAGEM" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_garagem" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" TEXT NOT NULL
);
INSERT INTO "new_cadastro_garagem" ("ID_GARAGEM") SELECT "ID_GARAGEM" FROM "cadastro_garagem";
DROP TABLE "cadastro_garagem";
ALTER TABLE "new_cadastro_garagem" RENAME TO "cadastro_garagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
