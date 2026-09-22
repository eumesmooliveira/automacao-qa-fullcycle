# 🚀 Full-Cycle QA Suite — UI & API Automation

[![Cypress Tests](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml)

Projeto de automação de testes desenvolvido para demonstrar, na prática, a construção e evolução de uma suíte de **Quality Assurance**, envolvendo testes **E2E (UI)** e **API REST**, arquitetura de automação, gerenciamento de massas de teste, qualidade de código e integração contínua.

A suíte utiliza **Cypress + JavaScript** e possui atualmente **15 casos de teste automatizados**, distribuídos entre testes de interface e API.

O projeto aplica **Page Object Model**, **Custom Commands**, **Fixtures** e uma **Service Layer para testes de API**, além de executar validações de qualidade com **ESLint** antes dos testes no pipeline.

No CI, a suíte é executada automaticamente em **Google Chrome e Mozilla Firefox** através do **GitHub Actions**, com geração de relatórios **Mochawesome** e armazenamento das evidências como artifacts.

> **15 testes | E2E + API | POM | Service Layer | Fixtures | ESLint | Cross-Browser | CI | Mochawesome**

---

## 📊 Status da Suíte

| Suíte | Testes | Aprovados | Falhas |
|---|---:|---:|---:|
| API REST | 9 | 9 | 0 |
| E2E / UI | 6 | 6 | 0 |
| **Total** | **15** | **15** | **0** |

Os 15 casos de teste são executados em **Chrome e Firefox** no pipeline, resultando em **30 execuções de testes por workflow completo**.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de aplicar conceitos utilizados em projetos reais de automação de testes, indo além da criação isolada de scripts.

A suíte demonstra práticas como:

- automação de testes E2E;
- testes de API REST;
- cenários positivos e negativos;
- Page Object Model;
- Custom Commands;
- gerenciamento de dados com Fixtures;
- Service Layer para abstração das requisições de API;
- autenticação e manipulação de dados dinâmicos;
- validação de respostas e regras de negócio;
- geração de relatórios automatizados;
- execução cross-browser;
- análise estática de código com ESLint;
- Quality Gate antes da execução dos testes;
- integração contínua com GitHub Actions;
- armazenamento de relatórios como artifacts;
- documentação de estratégia e arquitetura;
- preservação de evidências selecionadas de execução.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia / Ferramenta | Utilização |
|---|---|
| **Cypress** | Automação E2E e testes de API |
| **JavaScript** | Linguagem utilizada na suíte |
| **Node.js / npm** | Ambiente e gerenciamento de dependências |
| **Page Object Model** | Organização da camada de interação com a UI |
| **Custom Commands** | Reutilização de comportamentos comuns |
| **Fixtures** | Separação e gerenciamento das massas de teste |
| **Service Layer** | Abstração das operações da API |
| **ESLint** | Análise estática e padronização do código |
| **Mochawesome** | Geração de relatórios HTML |
| **GitHub Actions** | Integração contínua |
| **Google Chrome** | Execução cross-browser |
| **Mozilla Firefox** | Execução cross-browser |
| **Git / GitHub** | Versionamento e hospedagem do projeto |

---

# 🧪 Testes E2E — SauceDemo

Os testes de interface utilizam a aplicação pública **SauceDemo** para simular fluxos reais de um e-commerce.

A suíte cobre autenticação, manipulação de produtos, carrinho e checkout.

## Cenários automatizados

### Autenticação

**CT02 — Login com senha inválida**

Valida:

- tentativa de autenticação com credenciais inválidas;
- exibição da mensagem de erro esperada.

**CT10 — Login de usuário bloqueado**

Valida:

- tentativa de autenticação utilizando usuário bloqueado;
- mensagem de bloqueio;
- permanência na página de login.

### Fluxo de compra

**CT01 — Compra completa com sucesso (Happy Path)**

Valida o fluxo:

```text
Login
  ↓
Inventário
  ↓
Adicionar produto
  ↓
Carrinho
  ↓
Checkout
  ↓
Overview
  ↓
Finalização da compra
```

Durante o cenário são verificadas as páginas acessadas, o produto selecionado e a conclusão do pedido.

**CT11 — Adicionar e remover produto do carrinho**

Valida:

- adição de produto;
- atualização do badge do carrinho;
- presença do produto;
- remoção;
- carrinho vazio após a remoção.

**CT12 — Validação dos campos obrigatórios do checkout**

Valida sequencialmente:

- First Name obrigatório;
- Last Name obrigatório;
- Postal Code obrigatório;
- permanência na etapa de preenchimento enquanto existirem dados obrigatórios ausentes.

**CT13 — Adicionar múltiplos produtos ao carrinho**

Valida:

- inclusão de múltiplos produtos;
- quantidade apresentada no badge;
- presença dos produtos esperados no carrinho.

---

# 🔌 Testes de API — Restful-Booker

A camada de API utiliza a **Restful-Booker API** para testar autenticação e operações relacionadas a reservas.

Os testes trabalham com criação dinâmica de dados e reaproveitamento de IDs e tokens durante os fluxos.

## Cenários automatizados

**CT03 — Gerar token de autenticação**

Valida:

- status da resposta;
- existência do token de autenticação.

**CT05 — Autenticação com credenciais inválidas**

Valida:

- comportamento da API diante de credenciais inválidas;
- mensagem de erro;
- ausência de token.

**CT04 — Criar nova reserva**

Valida:

- criação da reserva;
- status HTTP;
- geração de `bookingid`;
- estrutura da resposta;
- dados principais retornados.

**CT15 — Não criar reserva sem o campo obrigatório `firstname`**

Valida:

- envio de uma requisição de criação sem o campo `firstname`;
- tratamento de cenário negativo sem interromper automaticamente o teste por status HTTP;
- retorno `500 Internal Server Error` apresentado pela Restful-Booker para essa entrada inválida.

> O teste documenta o comportamento observado da API. Embora o cenário automatizado valide o retorno efetivamente apresentado pela aplicação, um erro `500` indica falha interna do servidor e não necessariamente a resposta ideal para uma validação de entrada.

**CT06 — Consultar reserva inexistente**

Valida:

- consulta utilizando ID inexistente;
- retorno HTTP esperado para recurso não encontrado.

**CT08 — Criar e consultar reserva utilizando ID dinâmico**

Fluxo:

```text
POST /booking
      ↓
bookingid
      ↓
GET /booking/{bookingid}
      ↓
Validação dos dados retornados
```

São validados dados como:

- firstname;
- lastname;
- totalprice;
- depositpaid;
- checkin;
- checkout;
- additionalneeds.

**CT07 — Impedir atualização sem autenticação**

Valida:

- tentativa de atualização sem token;
- resposta de autorização esperada.

**CT09 — Atualizar reserva com autenticação e ID dinâmico**

Fluxo:

```text
POST /auth
     ↓
   token
     ↓
POST /booking
     ↓
 bookingid
     ↓
PUT /booking/{bookingid}
     ↓
Validação dos dados atualizados
```

**CT14 — Excluir reserva utilizando autenticação e ID dinâmico**

Fluxo:

```text
POST /auth
     ↓
   token
     ↓
POST /booking
     ↓
 bookingid
     ↓
DELETE /booking/{bookingid}
     ↓
Validação da exclusão
```

Esse cenário completa o fluxo de operações principais da API utilizando dados criados dinamicamente durante a própria execução.

---

# 🏗️ Arquitetura do Projeto

O projeto separa responsabilidades entre specs, dados, componentes de interface, serviços de API, documentação e evidências.

```text
automacao-qa-fullcycle/
│
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── api_restful_booker.cy.js
│   │   └── fluxo_ecommerce.cy.js
│   │
│   ├── fixtures/
│   │   ├── booking.json
│   │   ├── checkout.json
│   │   ├── example.json
│   │   └── users.json
│   │
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   │
│   ├── services/
│   │   └── BookingService.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── docs/
│   ├── evidence/
│   │   ├── e2e-full-suite-success.mp4
│   │   └── README.md
│   ├── relatorios_bugs/
│   │   └── relatorio_execucao.md
│   ├── architecture.md
│   └── test-strategy.md
│
├── .gitignore
├── cypress.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

A documentação detalhada das decisões arquiteturais está disponível em [`docs/architecture.md`](docs/architecture.md).

---

# 🧱 Page Object Model

Os testes E2E utilizam **Page Object Model (POM)** para separar a lógica dos testes da interação direta com os elementos da interface.

```text
fluxo_ecommerce.cy.js
        │
        ├── LoginPage
        ├── InventoryPage
        ├── CartPage
        └── CheckoutPage
```

Essa organização reduz duplicação de seletores e melhora a manutenção da suíte.

Exemplo conceitual:

```javascript
InventoryPage.addBackpackToCart();
InventoryPage.validateCartBadge(1);
InventoryPage.openCart();

CartPage.validateProduct('Sauce Labs Backpack');
CartPage.proceedToCheckout();
```

---

# ⚡ Custom Commands

O projeto utiliza **Custom Commands do Cypress** para comportamentos reutilizáveis que fazem sentido em nível global.

O login padrão pode ser executado através de:

```javascript
cy.login();
```

Também é possível fornecer credenciais:

```javascript
cy.login(username, password);
```

A utilização de Custom Commands foi mantida de forma controlada para evitar duplicação de responsabilidades com o Page Object Model.

---

# 📦 Fixtures

As massas de teste ficam separadas da lógica de automação através de **Fixtures**.

```text
cypress/fixtures/
├── booking.json
├── checkout.json
├── example.json
└── users.json
```

Exemplos de dados armazenados:

- usuários válidos;
- usuários inválidos;
- usuário bloqueado;
- dados de checkout;
- credenciais da API;
- dados padrão para criação de reservas.

Essa abordagem facilita manutenção e reutilização dos dados entre diferentes cenários.

---

# 🔧 Service Layer — API

Os testes de API utilizam uma camada dedicada de serviços.

```text
api_restful_booker.cy.js
          │
          ├── booking.json
          │
          ▼
    BookingService
          │
          ├── authenticate()
          ├── createBooking()
          ├── getBooking()
          ├── updateBooking()
          └── deleteBooking()
          │
          ▼
   Restful-Booker API
```

O `BookingService` centraliza as requisições HTTP utilizadas pela suíte.

Isso permite que o arquivo de testes permaneça focado nos **cenários e validações**, enquanto detalhes como endpoints, métodos HTTP, headers e autenticação ficam concentrados na camada de serviço.

Os métodos que participam de cenários negativos também permitem controlar `failOnStatusCode`, possibilitando validar explicitamente respostas HTTP de erro esperadas sem que o Cypress interrompa o cenário automaticamente.

---

# 🔍 Qualidade de Código com ESLint

O projeto utiliza **ESLint** em conjunto com regras específicas para Cypress.

Para executar a análise localmente:

```bash
npm run lint
```

O lint verifica o código antes da execução da suíte no pipeline.

Entre as verificações estão:

- variáveis não utilizadas;
- referências não definidas;
- regras recomendadas para Cypress;
- padrões que podem resultar em comandos Cypress inseguros.

---

# ⚙️ Integração Contínua — GitHub Actions

A suíte possui pipeline automatizado através do **GitHub Actions**.

O workflow é executado em alterações configuradas para a branch principal e utiliza um **Quality Gate** antes da execução dos testes.

## Fluxo do pipeline

```text
Push / Pull Request
        │
        ▼
ESLint Quality Gate
        │
        ├── Falha
        │     ↓
        │ Pipeline interrompido
        │
        └── Sucesso
              ↓
         Matrix Strategy
           /       \
        Chrome    Firefox
           │         │
        Cypress   Cypress
           │         │
     Mochawesome Mochawesome
           \         /
            Artifacts
```

O job de testes possui dependência do job de lint.

Isso significa que os testes Cypress somente são executados quando o código passa pelo **ESLint Quality Gate**.

---

# 🌐 Cross-Browser Testing

O pipeline utiliza uma estratégia de matriz para executar a suíte nos navegadores:

- Google Chrome;
- Mozilla Firefox.

Cada navegador executa os **15 casos de teste**.

Portanto:

```text
15 testes × 2 navegadores = 30 execuções
```

A estratégia utiliza `fail-fast: false`, permitindo que os resultados dos navegadores sejam obtidos independentemente.

---

# 📊 Relatórios Mochawesome

A suíte utiliza **cypress-mochawesome-reporter** para geração de relatórios HTML.

Após uma execução local:

```bash
npm test
```

o relatório pode ser encontrado em:

```text
cypress/reports/index.html
```

Os relatórios apresentam informações como:

- suítes executadas;
- testes aprovados;
- testes com falha;
- duração;
- evidências da execução.

Como os relatórios são regenerados automaticamente, `cypress/reports/` permanece fora do versionamento.

---

# 🎥 Evidências de Execução

O Cypress gera vídeos das execuções automatizadas em:

```text
cypress/videos/
```

Esses arquivos são artefatos temporários e não são versionados.

Para fins de documentação e portfólio, uma evidência selecionada da suíte E2E foi preservada em:

[`docs/evidence/e2e-full-suite-success.mp4`](docs/evidence/e2e-full-suite-success.mp4)

A evidência registra uma execução automatizada dos cenários E2E do SauceDemo.

A documentação das evidências está disponível em:

[`docs/evidence/README.md`](docs/evidence/README.md)

> O vídeo representa a execução da suíte E2E. O resultado consolidado de **15 testes** inclui também os 9 cenários de API.

---

# 📦 Artifacts no CI

Após a execução da suíte no GitHub Actions, os relatórios são disponibilizados como artifacts separados por navegador.

Exemplos:

```text
mochawesome-report-chrome
mochawesome-report-firefox
```

Isso permite consultar as evidências produzidas por cada execução do pipeline.

---

# 📚 Documentação Técnica

Além deste README, o projeto possui documentação técnica dedicada para facilitar a análise da estratégia, arquitetura e resultados da automação.

| Documento | Conteúdo |
|---|---|
| [Estratégia de Testes](docs/test-strategy.md) | Escopo, cobertura, abordagem, cenários positivos e negativos e critérios adotados |
| [Arquitetura da Automação](docs/architecture.md) | Estrutura, Page Object Model, Service Layer, Fixtures e decisões arquiteturais |
| [Relatório de Execução](docs/relatorios_bugs/relatorio_execucao.md) | Resultado consolidado da execução da suíte |
| [Evidências](docs/evidence/README.md) | Descrição das evidências selecionadas para o portfólio |

Essa documentação complementa o código e permite compreender não apenas **o que foi automatizado**, mas também **como e por que a solução foi estruturada dessa forma**.

---

# ▶️ Executando o Projeto Localmente

## Pré-requisitos

É necessário possuir:

- Node.js;
- npm;
- Git.

## 1. Clonar o repositório

```bash
git clone https://github.com/eumesmooliveira/automacao-qa-fullcycle.git
```

## 2. Entrar no projeto

```bash
cd automacao-qa-fullcycle
```

## 3. Instalar as dependências

```bash
npm ci
```

## 4. Executar o lint

```bash
npm run lint
```

## 5. Executar toda a suíte

```bash
npm test
```

Após a execução, o relatório Mochawesome estará disponível em:

```text
cypress/reports/index.html
```

---

# 🧪 Scripts Disponíveis

### Executar todos os testes

```bash
npm test
```

### Executar somente os testes de API

```bash
npm run test:api
```

### Executar somente os testes E2E

```bash
npm run test:e2e
```

### Executar no Chrome

```bash
npm run test:chrome
```

### Executar no Firefox

```bash
npm run test:firefox
```

### Executar análise estática

```bash
npm run lint
```

---

# 📈 Evolução do Projeto

A suíte foi construída de forma incremental.

```text
Testes E2E
    ↓
Testes de API
    ↓
Cenários positivos e negativos
    ↓
Dados e IDs dinâmicos
    ↓
Mochawesome
    ↓
GitHub Actions
    ↓
Page Object Model
    ↓
Fixtures
    ↓
Cross-Browser Testing
    ↓
Custom Commands
    ↓
Service Layer para API
    ↓
CRUD de reservas
    ↓
Validação negativa de campo obrigatório
    ↓
ESLint
    ↓
Quality Gate
    ↓
Documentação técnica
    ↓
Evidências de execução
    ↓
v1.0.0
```

Essa evolução permitiu transformar uma suíte inicial de automação em um projeto organizado com diferentes camadas e práticas de qualidade aplicadas ao ciclo de testes.

---

# 🧠 Conceitos Aplicados

Durante o desenvolvimento deste projeto foram aplicados conceitos de:

- Quality Assurance;
- automação de testes;
- testes funcionais;
- testes E2E;
- testes de API REST;
- cenários positivos e negativos;
- Page Object Model;
- separação de responsabilidades;
- reutilização de código;
- gerenciamento de massa de testes;
- autenticação via API;
- dados dinâmicos;
- operações CRUD;
- validação de status HTTP;
- validação de campos obrigatórios;
- análise estática de código;
- Continuous Integration;
- Quality Gates;
- cross-browser testing;
- geração de evidências e relatórios;
- documentação de estratégia de testes;
- documentação de decisões arquiteturais.

---

# 🏁 Versão 1.0

A versão **v1.0.0** representa a consolidação da primeira versão estável da suíte.

Nesta versão, o projeto demonstra uma estrutura de automação envolvendo:

**UI + API + arquitetura + dados + qualidade de código + CI + cross-browser + relatórios + documentação + evidências.**

A versão atual possui **15 cenários automatizados**, sendo:

```text
API REST: 9
E2E / UI: 6
Total:   15
```

A última execução completa validada apresentou:

```text
15 testes executados
15 aprovados
0 falhas
```

O objetivo da v1.0 não é concentrar o maior número possível de ferramentas, mas demonstrar uma suíte organizada, reproduzível, documentada e de fácil compreensão.

---

## 👨‍💻 Autor

**Felipe de Oliveira**

QA | Test Automation | Cypress | Playwright | API Testing

Projeto desenvolvido como parte do portfólio profissional na área de **Quality Assurance e QA Automation**.