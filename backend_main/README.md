# Desenvolvimento do projeto: OneBitFlix

## Instalção das primeiras dependências e inicialização do servidor

- ``` npm init ```: iniciar o projeto NPM
- ``` npm i express@~4.17.2 express-formidable@~1.2.0 adminjs@~5.5.1 @adminjs/express@~4.0.1 @adminjs/sequelize@~2.1.0 @adminjs/upload@~2.0.1 pg@~8.7.1 sequelize@~6.13.0 ```: instalação das dependências.
- ``` npm i -D typescript@~4.5.4 ts-node-dev@~1.1.8 sequelize-cli@~6.4.1 @types/express@~4.17.13 @types/node@~17.0.10 ```: instalação das dependências de desenvolvimento.
- ``` npx tsc --init ```: arquivo de configuração do TS.


Caso ainda não possua um usuário no PostgreSQL, crie um com a permissão CREATEDB:
sudo -u postgres psql

CREATE USER onebitflix WITH CREATEDB ENCRYPTED PASSWORD 'onebitflix';

- ``` npx sequelize-cli db:create ```: Criação do DB