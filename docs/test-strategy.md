# Estratégia de Testes — QA Full-Cycle

## 1. Objetivo

Este documento descreve a estratégia de testes adotada no projeto **QA Full-Cycle**, desenvolvido com Cypress e JavaScript para demonstrar práticas de automação de testes de interface (E2E) e API REST.

A estratégia foi definida com foco em cenários funcionais relevantes, cobertura de fluxos positivos e negativos, reutilização de código, separação de responsabilidades e geração de evidências de execução.

---

## 2. Aplicações utilizadas

O projeto utiliza duas aplicações públicas para execução dos testes automatizados.

### SauceDemo

Aplicação utilizada para os testes End-to-End de interface.

Os cenários abrangem:

- autenticação;
- validação de usuários inválidos ou bloqueados;
- manipulação do carrinho;
- validação do checkout;
- conclusão do fluxo de compra.

### Restful-Booker

API REST utilizada para os testes de integração e validação de serviços.

Os cenários abrangem:

- autenticação;
- criação de reservas;
- consulta de reservas;
- atualização de reservas;
- exclusão de reservas;
- autorização;
- validação de respostas de erro;
- validação de payload incompleto.

---

## 3. Tipos de testes

### Testes E2E

Os testes E2E validam o comportamento da aplicação através da interface do usuário, simulando fluxos reais no SauceDemo.

A suíte possui **6 cenários E2E**.

### Testes de API

Os testes de API utilizam `cy.request()` para realizar requisições HTTP diretamente à Restful-Booker.

A suíte possui **9 cenários de API**.

### Cobertura total

A versão atual do projeto possui:

| Suíte | Cenários |
|---|---:|
| API REST | 9 |
| E2E / UI | 6 |
| **Total** | **15** |

A última execução completa validada apresentou **15 testes aprovados e 0 falhas**.

---

## 4. Cenários E2E cobertos

### Autenticação

- **CT02** — Deve exibir mensagem de erro ao tentar logar com senha inválida.
- **CT10** — Deve impedir login de usuário bloqueado.

### Fluxo de compra

- **CT01** — Deve realizar login e concluir a compra com sucesso (Happy Path).
- **CT11** — Deve adicionar e remover um produto do carrinho.
- **CT12** — Deve validar campos obrigatórios no checkout.
- **CT13** — Deve adicionar múltiplos produtos e validar o carrinho.

---

## 5. Cenários de API cobertos

### Autenticação

- **CT03** — Deve gerar um token de autenticação com sucesso.
- **CT05** — Não deve autenticar com credenciais inválidas.

### Criação e consulta de reservas

- **CT04** — Deve criar uma nova reserva e validar status e dados retornados.
- **CT15** — Não deve criar uma reserva sem o campo obrigatório `firstname`.
- **CT06** — Deve retornar erro ao consultar uma reserva inexistente.
- **CT08** — Deve criar e consultar uma reserva utilizando ID dinâmico.

### Atualização e autorização

- **CT07** — Não deve atualizar uma reserva sem autenticação.
- **CT09** — Deve atualizar uma reserva utilizando autenticação e ID dinâmico.

### Exclusão

- **CT14** — Deve excluir uma reserva utilizando autenticação e ID dinâmico.

---

## 6. Estratégia de dados de teste

Os dados reutilizáveis são mantidos em **fixtures**, evitando a repetição de informações diretamente nos arquivos de teste.

Entre as fixtures utilizadas estão:

```text
cypress/fixtures/
├── booking.json
├── checkout.json
└── users.json