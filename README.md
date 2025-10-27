# Fullstack AI

Aplicação fullstack para captura e inspeção de webhooks com interface web moderna.

## 🚀 Tecnologias

### Backend (API)
- **Node.js** + **TypeScript**
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **Zod** - Validação de schemas
- **PostgreSQL** - Banco de dados
- **Docker** - Containerização

### Frontend (Web)
- **React 19** + **TypeScript**
- **Vite** - Build tool moderna
- **ESLint** + **Prettier** - Qualidade de código

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- pnpm
- Docker (para PostgreSQL)

### Setup do projeto

```bash
# Clone o repositório
git clone <url-do-repo>
cd fullstack-ai

# Instale as dependências
pnpm install
```

### Configuração do banco de dados

```bash
# Inicie o PostgreSQL com Docker
cd api
docker-compose up -d

# Execute as migrações
pnpm db:migrate
```

### Variáveis de ambiente

Crie um arquivo `.env` na pasta `api`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/webhooks"
PORT=3333
NODE_ENV=development
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento

```bash
# API (porta 3333)
cd api
pnpm dev

# Web (porta 5173)
cd web
pnpm dev
```

### Produção

```bash
# Build da API
cd api
pnpm build
pnpm start

# Build do Web
cd web
pnpm build
pnpm preview
```

## 📚 Recursos

- **API REST** com documentação automática (Swagger)
- **Validação de dados** com Zod
- **Type safety** completo
- **Hot reload** em desenvolvimento
- **Linting** e **formatação** automática
- **Banco de dados** com migrations

## 🔗 URLs

- **API**: http://localhost:3333
- **Documentação**: http://localhost:3333/docs
- **Web**: http://localhost:5173
- **Database Studio**: `pnpm db:studio` (na pasta api)

## 📝 Scripts úteis

### API
```bash
pnpm dev          # Desenvolvimento
pnpm lint         # Verificar código
pnpm format       # Formatar código
pnpm db:generate  # Gerar migrations
pnpm db:studio    # Interface do banco
```

### Web
```bash
pnpm dev          # Desenvolvimento
pnpm build        # Build de produção
pnpm preview      # Preview do build
```