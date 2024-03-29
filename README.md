# NLW Valoriza

## Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ ] Não é permitido um usuário cadastrar um elogio para si

  [ ] Não é permitido cadastrar elogios para usuários inválidos

  [ ] O usuário precisa estar autenticado na aplicação

  ## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [Docker](https://www.docker.com/)
## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.
- Rode `docker-compose up -d` para criar e iniciar os contêineres sem os logs
- Rode `docker-compose down` para paralisar e remover todos os contêineres e seus componentes como rede, imagem e volume.

Por fim, a aplicação estará disponível em `http://localhost:3000`
