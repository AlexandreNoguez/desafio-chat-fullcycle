#!/bin/sh

# Rodar as migrações do Prisma
npx prisma migrate dev --name init

# Gerar o cliente do Prisma
npx prisma generate

# Iniciar o servidor de desenvolvimento
npm run dev
