# restaurant-node-api

API Rest para um sistema de restaurante que estou desenvolvendo.

# Como usar
1. Tenha certeza de que você possui o NodeJS instalado
2. Tenha certeza de que você possui o Yarn instalado
3. Tenha certeza de que você possui o WAMP Server instalado
4. Tenha certeza de que você tem algum gerenciador de MySQL como Worchbenk
5. Clone a branch master desse diretório usando git bash
6. Entre em seu gerenciador do banco de dados e execute os scripts do arquivo "db_modeling/create_tables.sql" em ordem. Faça isso de um a um, preferencialmente, pois esse arquivo pode mudar, impedindo que todos os script sejam rodados de uma única vez
7. No cmd ou terminal digite esses dois comandos
```
yarn
...
yarn start
```
8. Pronto, tudo deve estar funcionando

# Tecnologias usadas

| Utilidade     |  lib/app      | descrição   |
| ------------- |:-------------:| :-----:|
| Banco de dados      | mysql | Queries MySQL inclusas |
| Ferramenta de testes      |    Postman   |   Postman Collections inclusas |
| Validações de input |    @hapi-joi    |  ...  |
| Controle de inicialização dev | nodemon      |   ...  |
| Controle de inicialização produção | pm2      |   // todo...  |
| Autenticação |    jsonwebtoken   |    JWT |

# Princípios que precisam ser respeitados:

## TELA GARÇOM (Mobile)
	- O garçom poderá fazer login no app, e só poderá utilizá-lo caso esteja logado
	- Poderá escanera/digitar o código da comanda (criar uma nova compra)
	- O garçom poderá ver todos os produtos disponíveis
	- O garçom poderá adicionar um produto à uma compra (item_compra)
	- Pode enviar o pedido para o caixa
	- Pode atualizar o pedido e reenviá-lo para o caixa
	- Poderá ver o total da compra

## TELA CAIXA (Web)
	- Poderá fazer login no painel, e só poderá utilizá-lo caso esteja logado
	- Poderá ver todos os produtos disponíveis
	- Poderá adicionar um produto à uma compra (item_compra)
	- Pode editar ou excluir um produto da compra
	- Poderá notificar o garçom do pedido pronto para ser entregue na mesa
	- Poderá ver o total da compra
	- Poderá finalizar ou cancelar um compra

## TELA ADMINISTRADOR (Web)
	- Poderá editar produtos totalmente, excluí-los ou adicioná-los
