# Desafio Técnico: Fontes Promotora

## Sumário

1. [TODO](#todo-list)
2. [Implementação](#implementação)
    - [Variáveis de ambiente](#variáveis-de-ambiente)
    - [Iniciando a aplicação localmente](#iniciando-a-aplicação-localmente)
3. [Git](./docs/pt-br/git.md)
4. [Docker](./docs/pt-br/docker.md)

### TODO List

- [x] Configurar database via docker
- [x] Implementar boilerplate do back-end
- [x] Implementar boilerplate do front-end
- [ ] Implementar endpoint `/users` (POST) para criação de usuários
- [ ] Configurar Swagger para o endpoint `/users`
- [ ] Implementar endpoint `/projects` (POST) para criação de projetos
- [ ] Configurar Swagger para o endpoint `/projects`
- [ ] Implementar endpoint `/projects` (GET) para listagem de projetos
- [ ] Configurar Swagger para o `/projects`
- [ ] Implementar endpoint `/project/:id` (GET) para retornar um projeto pelo `id`
- [ ] Configurar Swagger para o `/project/:id`
- [ ] Implementar endpoint `/project/:id` (PUT) para editar `title`, `zip-code`, `cost` e/ou `deadline`
- [ ] Configurar Swagger para o `/project/:id`
- [ ] Implementar endpoint `/project/:id/done` (PATCH) para marcar um projeto como concluído
- [ ] Configurar Swagger para o `/project/:id/done`
- [ ] Implementar endpoint `/project/:id` (DELETE) para excluir um projeto
- [ ] Configurar Swagger para o `/project/:id`
- [x] Implementar componente Text
- [x] Implementar componente Heading
- [x] Implementar componente Card
- [ ] Implementar componente Button
- [ ] Implementar componente Pagination
- [ ] Implementar componente TextInput
- [ ] Implementar componente CheckBox
- [ ] Implementar componente Avatar
- [ ] Implementar componente SnackBar
- [ ] Implementar componente BreadCrumb
- [ ] Implementar componente MessageBox
- [ ] Implementar componente CardProject
- [ ] Implementar página SignUp
- [ ] Implementar página SignIn
- [ ] Implementar página ListProjects
- [ ] Implementar página ViewProject
- [ ] Implementar página EditProject
- [ ] Publicar Storybook do projeto no GH Pages

### Implementação

#### Variáveis de ambiente

Edite o arquivo `.env.local`:

```properties
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fontespromotora
DB_USERNAME=fontespromotora
DB_PASSWORD=fontespromotora
```

[← Voltar para o sumário](#sumário)

#### Iniciando a aplicação localmente

1. Crie um link simbólico para o arquivo `.env.local` na pasta `backend`.

    ```bash
    ln -s $(pwd)/.env.local $(pwd)/backend  
    ```

2. Inicie o banco de dados MySQL via Docker:

    Abra um novo terminal e na raíz do projeto, execute:

    ```bash
    docker-compose --env-file .env.local up database
    ```

3. Inicie o back-end:

    Abra um novo terminal e na raíz do projeto, execute:

    ```bash
    cd backend
    npm install
    npm run start:dev
    ```

4. Inicie o front-end:

    Abra um novo terminal e na raíz do projeto, execute:

    ```bash
    cd frontend
    npm install
    npm run start:dev
    ```
