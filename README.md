# 🚀 Full-Cycle QA Suite — UI & API Automation

Projeto de Quality Assurance desenvolvido para demonstrar um fluxo de testes envolvendo planejamento, definição de cenários, automação de API e interface, execução de regressão, validação de resultados e geração de evidências.

A suíte utiliza **Cypress e JavaScript** e atualmente possui **13 testes automatizados**, distribuídos entre testes de API REST e testes E2E de interface.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript / Node.js** — linguagem e ambiente de execução
- **Cypress** — automação de testes E2E e API via `cy.request`
- **REST / JSON** — validação de serviços e dados retornados
- **Markdown** — documentação de cenários e resultados
- **Git / GitHub** — versionamento do projeto

---

## 📂 Estrutura do Projeto

```text
automacao-qa-fullcycle/
├── cypress/
│   ├── e2e/
│   │   ├── api_restful_booker.cy.js
│   │   └── fluxo_ecommerce.cy.js
│   ├── fixtures/
│   └── support/
├── docs/
│   ├── cenarios_teste/
│   └── relatorios_bugs/
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🎯 Objetivo do Projeto

O projeto simula diferentes etapas de um processo de Quality Assurance, desde a definição dos cenários até a execução automatizada e análise dos resultados.

A cobertura foi estruturada em duas frentes:

- **API REST:** autenticação, criação, consulta e atualização de reservas.
- **E2E / UI:** autenticação, carrinho, checkout e conclusão de compra.

Os testes contemplam cenários positivos e negativos, validações de respostas HTTP, dados retornados, regras da interface e fluxos relevantes para regressão.

---

## 🧪 Estratégia de Testes

A estratégia contempla:

- **Testes funcionais:** validação dos comportamentos esperados.
- **Testes E2E:** validação de fluxos completos pela interface.
- **Testes de API:** validação de endpoints REST utilizando `cy.request`.
- **Cenários positivos e negativos:** happy paths e comportamentos de erro.
- **Autenticação e autorização:** validação de acesso válido, inválido e operações protegidas.
- **Testes de regressão:** reexecução automatizada dos fluxos implementados.
- **Dados dinâmicos:** criação de recursos e reutilização dos IDs retornados pela API.
- **Documentação:** organização de cenários e resultados do processo de testes.
- **Evidências:** geração automática de vídeos das execuções Cypress.

---

## 🔌 Cobertura de Testes de API

A suíte utiliza a **Restful-Booker API** para validar diferentes comportamentos de serviços REST.

| Caso | Cenário | Tipo |
|---|---|---|
| CT03 | Geração de token com credenciais válidas | Positivo |
| CT04 | Criação de reserva e validação de status e dados | Positivo |
| CT05 | Autenticação com credenciais inválidas | Negativo |
| CT06 | Consulta de reserva inexistente | Negativo |
| CT07 | Tentativa de atualização sem autenticação | Negativo |
| CT08 | Criação e consulta utilizando ID dinâmico | Positivo |
| CT09 | Atualização autenticada utilizando token e ID dinâmicos | Positivo |

### Validações realizadas

- Status HTTP
- Propriedades do response body
- Conteúdo dos dados retornados
- Token de autenticação
- IDs gerados dinamicamente
- Comportamento de recursos inexistentes
- Restrição de operações sem autenticação
- Atualização de dados via requisição autenticada

---

## 🖥️ Cobertura de Testes E2E

Os testes de interface utilizam o **SauceDemo** para validar fluxos de autenticação, carrinho e checkout.

| Caso | Cenário | Tipo |
|---|---|---|
| CT01 | Login e conclusão de compra | Happy Path |
| CT02 | Login com senha inválida | Negativo |
| CT10 | Login com usuário bloqueado | Negativo |
| CT11 | Adição e remoção de produto do carrinho | Funcional |
| CT12 | Validação dos campos obrigatórios do checkout | Negativo |
| CT13 | Adição de múltiplos produtos e validação do carrinho | Funcional |

### Fluxos validados

- Autenticação
- Tratamento de credenciais inválidas
- Usuário bloqueado
- Catálogo de produtos
- Adição e remoção de itens
- Quantidade de produtos no carrinho
- Validação de campos obrigatórios
- Checkout
- Confirmação da compra

---

## 📊 Resultado da Execução

Última execução completa da suíte:

| Suíte | Testes | Aprovados | Falhas |
|---|---:|---:|---:|
| API REST | 7 | 7 | 0 |
| E2E / UI | 6 | 6 | 0 |
| **Total** | **13** | **13** | **0** |

**Resultado: 100% dos testes executados com sucesso.**

A suíte pode ser executada em modo headless e gera evidências em vídeo automaticamente por meio do Cypress.

---

## ▶️ Como Executar

Clone o repositório e instale as dependências:

```bash
npm install
```

Execute toda a suíte:

```bash
npx cypress run
```

Para executar somente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/api_restful_booker.cy.js"
```

Para executar somente os testes E2E:

```bash
npx cypress run --spec "cypress/e2e/fluxo_ecommerce.cy.js"
```

---

## 📌 Boas Práticas Aplicadas

- Separação dos testes por contexto e responsabilidade
- Reutilização de funções auxiliares
- Redução de código duplicado
- Assertions em diferentes etapas dos fluxos
- Uso de IDs e tokens dinâmicos
- Cenários positivos e negativos
- Ausência de esperas fixas (`cy.wait`) nos fluxos E2E
- Versionamento com Git
- Organização voltada à manutenção e expansão da suíte

---

## 🔄 Próximas Evoluções

- Integração contínua com GitHub Actions
- Geração de relatórios automatizados de execução
- Evolução das métricas de qualidade da suíte
- Ampliação gradual da cobertura de regressão