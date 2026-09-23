# SPRINT 4 - Projeto Acadêmico para Front-End Design e Web Development (Notez)

Aplicação web para pesquisa e consulta de livros, criada como continuidade do projeto da Sprint 03 e da solução da Challenge.

## Tecnologias utilizadas

- React 19

- Next.js 16 com App Router

- Tailwind CSS 4

- JavaScript

- ESLint

- Open Library API

- Vercel para deploy

## Funcionalidades

- Busca de livros por título ou tema.

- Visualização dos detalhes de um livro.

- Rotas públicas e rotas protegidas.

- Login simulado para acesso ao sistema.

- Layout responsivo, adaptado a celulares, tablets e desktops.

- Estados de carregamento, erro e conteúdo vazio na busca de livros.

## Estrutura principal

- `app/components`: componentes reutilizáveis e guards de autenticação.

- `app/features/auth`: hook para autenticação.

- `app/features/books`: componentes e hook para consumo da API de livros.

- `app/login`: página de login.

- `app/contato`: página protegida de contato.

## Como instalar

É necessário ter Node.js instalado.

```bash

npm install

```

## Como executar

Inicie o servidor de desenvolvimento:

```bash

npm run dev

```

Acesse https://fiap-sprint4-webfront.vercel.app/login

Para verificar o código:

```bash

npm run lint

```

Para gerar a versão de produção:

```bash

npm run build

npm run start

```

O projeto não possui servidor back-end. A aplicação se conecta diretamente à API pública da Open Library:

```text

https://openlibrary.org/search.json

```

## Login para testes

O login é simulado no navegador e aceita apenas as credenciais abaixo:

- **E-mail:** `email-exemplo@aura.com`

- **Senha:** `42426767`

As credenciais são armazenadas no `localStorage` apenas para fins acadêmicos. Não há autenticação real, nem banco de dados ou sessão segura no servidor.

## Uso de Inteligência Artificial

A Inteligência Artificial foi usada como suporte durante o desenvolvimento. Ela ajudou com consultoria, revisão da organização dos componentes, sugestões de melhoria em responsividade e acessibilidade, além de revisão da documentação e do código. As decisões finais, testes, integração com a API e os ajustes no código foram realizados e validados pela equipe. Um exemplo de prompt usado: 'Analise o código em questão, e identifique erros de lógica e formas de simplificar o código, de forma inteligente. Me dê diversas sugestões de como melhorar o código, com fins de aprendizado. Não quero resposta com o código todo escrito, e sim sugestões de como melhorar e no que melhorar'.
