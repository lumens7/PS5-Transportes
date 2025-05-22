-- CreateTable
CREATE TABLE "cadastro_funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "turno" TEXT NOT NULL,
    "alojamento" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cadastro_alojamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alojamento" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TB_GARAGEM" (
    "ID_GARAGEM" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NOME_GARAGEM" TEXT,
    "RUA" TEXT,
    "BAIRRO" TEXT,
    "NUMERO" INTEGER,
    "CEP" TEXT
);
