# 🚀 Next.js Chat API com Prisma e SQLite

Este projeto é uma aplicação **Next.js 15** que implementa uma **API de chats** com rotas REST, utilizando **Prisma ORM** com banco de dados **SQLite** e rodando em um ambiente **Docker**.

---

## **📝 Funcionalidades**

1. **API**:
   - **POST /api/chats**: Cria um novo chat.
   - **GET /api/chats**: Lista todos os chats.

2. **Interface Web**:
   - Lista de mensagens existentes.
   - Formulário para enviar novas mensagens.

3. **Tecnologias**:
   - **Next.js** (Frontend e API).
   - **Prisma ORM** (Banco de dados).
   - **SQLite** (Banco de dados local).
   - **Docker** e **Docker Compose**.

---

## **⚙️ Pré-requisitos**

Antes de começar, você precisará ter instalado:

- **Docker** e **Docker Compose**: [Guia de instalação](https://docs.docker.com/get-docker/)

---

## **🚀 Como rodar o projeto**

### **1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/nextjs-chat-api.git
cd nextjs-chat-api
```

### **2. Suba o projeto com Docker Compose**
```bash
docker-compose up --build
```

- O projeto será construído e estará disponível em [localhost:3000](http://localhost:3000).

### **3. Testar as APIs**

- Você pode testar as rotas da API usando ferramentas como Insomnia, Postman ou diretamente via VSCode com o arquivo api.http fornecido.

### **4. Testar as APIs**
```bash
### Criar chat
POST http://localhost:3000/api/chats
Content-Type: application/json

{
  "message": "Olá, mundo!"
}

### Listar chats
GET http://localhost:3000/api/chats
```

🛠️ Tecnologias Utilizadas

- Next.js 15
- Prisma ORM
- SQLite
- Docker

## 🖥️ Estrutura do Projeto

```plaintext
nextjs-chat-api/
├── prisma/                  # Configuração do Prisma e banco SQLite
│   ├── schema.prisma        # Modelo do banco de dados
│   └── dev.db               # Arquivo do banco de dados SQLite
├── src/
│   ├── app/
│   │   ├── page.tsx         # Página principal
│   │   └── api/             # Rotas da API
│   │       └── chats/      
│   │           └── route.ts # Rotas POST e GET de chats
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Chat.tsx         # Lista os chats
│   │   └── SubmitChat.tsx   # Formulário para enviar chats
├── .dockerignore            # Ignora arquivos no Docker
├── Dockerfile               # Configuração do Docker
├── docker-compose.yml       # Configuração do Docker Compose
├── api.http                 # Exemplo de chamadas para a API
├── package.json             # Dependências do projeto
└── README.md                # Documentação
```

## 🧑‍💻 Autor
- Desenvolvido por **Alexandre Noguez**
- 🔗 [LinkedIn](https://www.linkedin.com/in/alexandre-noguez/)