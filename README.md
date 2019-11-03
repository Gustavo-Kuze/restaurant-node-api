# restaurant-node-api

API Rest para um sistema de restaurante que estou desenvolvendo.

# Como usar
1. No cmd ou terminal digite esses dois comandos
```
yarn
...
yarn start
```

| Tecnologias   |               |      |
| ------------- |:-------------:| -----:|
| Banco de dados      | MySQL | Queries inclusas |
| Ferramenta de testes      | Postman      |   Collection inclusa |
| Validações de input | @hapi-joi      |     |
| Controle de inicialização dev | Nodemon      |     |
| Controle de inicialização produção | // a implementar pm2...      |     |

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
