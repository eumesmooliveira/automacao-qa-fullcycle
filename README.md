# 🚀 Full-Cycle QA Suite — UI & API Automation

[![Cypress Tests](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml)

Projeto de Quality Assurance desenvolvido para demonstrar um fluxo completo de automação de testes, envolvendo planejamento, definição de cenários, automação de API e interface, arquitetura Page Object Model, gerenciamento de massas de teste com fixtures, execução de regressão, testes cross-browser, integração contínua e geração automatizada de relatórios e evidências.

A suíte utiliza **Cypress e JavaScript** e possui atualmente **13 testes automatizados**, distribuídos entre testes de API REST e testes E2E de interface.

As execuções são integradas ao **GitHub Actions**, com execução automática em **Google Chrome e Mozilla Firefox**, geração de relatórios HTML através do **Mochawesome** e armazenamento dos relatórios como artifacts do pipeline.

> **13 testes automatizados | E2E + API | Page Object Model | Fixtures | Cross-Browser | CI/CD | Mochawesome**

---

## 🎯 Objetivo do Projeto

Demonstrar na prática conhecimentos aplicados ao processo de Quality Assurance, contemplando:

- planejamento e definição de cenários de teste;
- automação de testes de interface;
- automação de testes de API REST;
- validação de cenários positivos e negativos;
- utilização de dados dinâmicos durante os testes;
- organização da automação E2E com Page Object Model;
- gerenciamento de massas de teste através de fixtures;
- execução automatizada da suíte;
- execução cross-browser;
- integração contínua;
- geração de relatórios e evidências;
- documentação dos resultados.

O projeto foi estruturado como uma suíte de regressão automatizada, permitindo validar diferentes camadas de uma aplicação dentro de um único repositório.

---

## 🛠️ Tecnologias e Práticas Utilizadas

- **JavaScript / Node.js** — linguagem e ambiente de execução
- **Cypress** — automação de testes E2E e API
- **Page Object Model (POM)** — organização e separação das responsabilidades dos testes E2E
- **Cypress Fixtures** — gerenciamento e reutilização de massas de teste
- **REST / JSON** — validação de serviços e dados retornados
- **Mochawesome** — geração automatizada de relatórios HTML
- **GitHub Actions** — integração contínua e execução automatizada da suíte
- **Matrix Strategy** — execução dos testes em múltiplos navegadores
- **Git / GitHub** — versionamento e hospedagem do projeto
- **Markdown** — documentação dos cenários e resultados

---

## 🧪 Aplicações Testadas

### 🖥️ UI — SauceDemo

Aplicação utilizada para automação dos fluxos E2E relacionados a:

- autenticação;
- validação de credenciais inválidas;
- bloqueio de usuário;
- carrinho de compras;
- checkout;
- validação de campos obrigatórios;
- manipulação de múltiplos produtos.

Os testes E2E utilizam **Page Object Model** para separar as ações e validações de cada página dos cenários de teste.

Os dados utilizados nos cenários, como usuários e informações de checkout, são armazenados em **fixtures**, reduzindo dados hardcoded nos arquivos de teste e facilitando a manutenção da suíte.

### 🔌 API — Restful-Booker

API utilizada para automação e validação de:

- autenticação;
- criação de reservas;
- consulta de reservas;
- cenários negativos;
- autorização;
- atualização de dados;
- utilização de IDs dinâmicos.

---

## 📋 Cenários Automatizados

A suíte possui atualmente **13 testes automatizados**, sendo:

| Suíte | Testes | Aprovados | Falhas |
|---|---:|---:|---:|
| API REST | 7 | 7 | 0 |
| E2E / UI | 6 | 6 | 0 |
| **Total** | **13** | **13** | **0** |

### 🖥️ E2E / UI — SauceDemo

1. **CT01** — Login e conclusão de compra com sucesso (Happy Path)
2. **CT02** — Login com senha inválida
3. **CT10** — Login com usuário bloqueado
4. **CT11** — Adição e remoção de produto do carrinho
5. **CT12** — Validação dos campos obrigatórios do checkout
6. **CT13** — Adição de múltiplos produtos e validação do carrinho

### 🔌 API — Restful-Booker

1. **CT03** — Geração de token com credenciais válidas
2. **CT04** — Criação de reserva e validação de status e dados retornados
3. **CT05** — Autenticação com credenciais inválidas
4. **CT06** — Consulta de reserva inexistente
5. **CT07** — Tentativa de atualização sem autenticação
6. **CT08** — Criação e consulta utilizando ID dinâmico
7. **CT09** — Atualização autenticada utilizando token e ID dinâmicos

---

## 🏗️ Arquitetura dos Testes E2E

Os testes de interface utilizam o padrão **Page Object Model (POM)** para separar as responsabilidades entre os cenários de teste e as interações com as páginas da aplicação.

Atualmente, a estrutura possui os seguintes Page Objects:

```text
cypress/pages/

├── LoginPage.js
├── InventoryPage.js
├── CartPage.js
└── CheckoutPage.js
```

Cada Page Object concentra ações e validações relacionadas à sua respectiva página.

Exemplo conceitual:

```text
fluxo_ecommerce.cy.js
        │
        ├── LoginPage
        ├── InventoryPage
        ├── CartPage
        └── CheckoutPage
```

Essa abordagem reduz duplicação de código e facilita a manutenção e evolução dos testes E2E.

---

## 📦 Gerenciamento de Massas de Teste

Os dados utilizados nos cenários E2E são separados da lógica dos testes através de **Cypress Fixtures**.

Atualmente são utilizadas as seguintes massas:

```text
cypress/fixtures/

├── users.json
└── checkout.json
```

As fixtures armazenam informações utilizadas durante os cenários, como:

- usuários válidos;
- usuários bloqueados;
- credenciais inválidas;
- informações utilizadas no checkout.

Essa separação reduz dados hardcoded nos arquivos de teste e facilita a reutilização e manutenção das massas.

---

## 📁 Estrutura do Projeto

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
│   │   ├── checkout.json
│   │   └── users.json
│   │
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── reports/
│   └── videos/
│
├── docs/
│   └── relatorios_bugs/
│       └── relatorio_execucao.md
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

> As pastas `cypress/reports/` e `cypress/videos/` são geradas durante as execuções e não são versionadas no repositório.

---

## ▶️ Executando o Projeto

### Pré-requisitos

É necessário possuir:

- Node.js
- npm
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/eumesmooliveira/automacao-qa-fullcycle.git
```

### 2. Acesse o projeto

```bash
cd automacao-qa-fullcycle
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a suíte completa

```bash
npx cypress run
```

Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```

### Execução em navegador específico

Chrome:

```bash
npx cypress run --browser chrome
```

Firefox:

```bash
npx cypress run --browser firefox
```

---

## ✅ Resultado da Execução

Na execução completa atualmente documentada:

```text
API REST
7 testes executados
7 aprovados
0 falhas

E2E / UI
6 testes executados
6 aprovados
0 falhas

TOTAL
13 testes executados
13 aprovados
0 falhas
```

**Taxa de sucesso da execução: 100%.**

Os testes cobrem cenários positivos e negativos nas camadas de API e interface.

No pipeline de CI, a mesma suíte é executada independentemente em **Chrome e Firefox**, resultando em **26 execuções de casos de teste por pipeline**:

```text
Chrome
13 testes

Firefox
13 testes

TOTAL NO PIPELINE
26 execuções de casos de teste
```

Os 13 cenários continuam sendo os mesmos; a execução em dois navegadores permite validar o comportamento da suíte em diferentes ambientes.

---

## 🌐 Cross-Browser Testing

A integração contínua utiliza uma **matrix strategy** do GitHub Actions para executar a suíte em múltiplos navegadores.

Atualmente são utilizados:

| Navegador | Testes executados |
|---|---:|
| Google Chrome | 13 |
| Mozilla Firefox | 13 |
| **Total por pipeline** | **26 execuções** |

Os navegadores são executados em jobs independentes:

```text
GitHub Actions
      │
      └── Matrix Strategy
             │
             ├── Chrome
             │    └── 13 testes
             │
             └── Firefox
                  └── 13 testes
```

A configuração com `fail-fast: false` permite que os jobs da matrix sejam executados independentemente, facilitando a identificação de eventuais diferenças de comportamento entre os navegadores.

---

## 📊 Relatórios e Evidências

A suíte utiliza o **Mochawesome** para gerar automaticamente relatórios HTML após a execução dos testes.

Os relatórios apresentam informações como:

- quantidade de testes executados;
- testes aprovados e reprovados;
- duração da execução;
- organização por suíte e contexto;
- detalhamento individual dos cenários;
- resultado de cada teste.

Após uma execução local, o relatório é gerado em:

```text
cypress/reports/index.html
```

As execuções E2E também geram evidências em vídeo automaticamente pelo Cypress.

Esses arquivos são tratados como evidências geradas durante a execução e não são mantidos no controle de versão.

---

## ⚙️ Integração Contínua — GitHub Actions

O projeto possui um pipeline de integração contínua configurado através do **GitHub Actions**.

O workflow é executado automaticamente em:

- `push` para a branch `main`;
- `pull_request` direcionado para a branch `main`.

A suíte utiliza uma **matrix strategy** para executar os testes automaticamente em:

- Google Chrome;
- Mozilla Firefox.

O fluxo do pipeline é:

```text
Push / Pull Request
        ↓
Checkout do repositório
        ↓
Configuração do Node.js
        ↓
Instalação das dependências
        ↓
Matrix de navegadores
       ↙           ↘
   Chrome        Firefox
     ↓              ↓
  13 testes      13 testes
     ↓              ↓
Mochawesome     Mochawesome
     ↘              ↙
 GitHub Actions Artifacts
```

Cada navegador executa os **13 testes automatizados**, totalizando **26 execuções de casos de teste por pipeline**.

Ao final da execução, os relatórios Mochawesome são disponibilizados separadamente como artifacts:

```text
mochawesome-report-chrome
mochawesome-report-firefox
```

Os artifacts são mantidos pelo workflow por **30 dias**.

Essa estratégia permite consultar separadamente os resultados e evidências produzidos em cada navegador.

---

## 🔎 Estratégia de Testes

A suíte foi construída considerando diferentes tipos de validação.

### Testes positivos

Validam o comportamento esperado da aplicação quando são fornecidos dados válidos.

Exemplos:

- autenticação válida;
- conclusão de compra;
- criação de reserva;
- atualização autenticada.

### Testes negativos

Validam o comportamento da aplicação diante de condições inválidas ou não autorizadas.

Exemplos:

- senha inválida;
- usuário bloqueado;
- campos obrigatórios não preenchidos;
- consulta de recurso inexistente;
- atualização sem autenticação.

### Dados dinâmicos

Alguns cenários de API utilizam dados obtidos durante a própria execução.

Exemplo:

```text
Criar reserva
      ↓
Capturar ID retornado
      ↓
Utilizar o ID na consulta
      ↓
Validar os dados
```

Esse fluxo reduz a dependência de dados previamente cadastrados e torna os testes mais independentes.

### Massas de teste

Nos testes E2E, dados reutilizáveis são armazenados em fixtures:

```text
Fixture
   ↓
Carregamento dos dados
   ↓
Cenário E2E
   ↓
Page Objects
   ↓
Aplicação
```

Dessa forma, a lógica do cenário permanece separada dos dados utilizados durante a execução.

---

## 💡 Boas Práticas Aplicadas

Durante o desenvolvimento da suíte foram aplicadas práticas como:

- separação entre testes de API e interface;
- organização dos testes por contexto;
- utilização de Page Object Model nos testes E2E;
- separação das responsabilidades entre páginas e cenários;
- utilização de fixtures para gerenciamento das massas de teste;
- utilização de cenários positivos e negativos;
- validação de status HTTP e dados retornados;
- reutilização de dados gerados durante a execução;
- uso de IDs e tokens dinâmicos;
- execução headless da suíte;
- execução cross-browser em Chrome e Firefox;
- utilização de matrix strategy no GitHub Actions;
- geração de evidências em vídeo;
- integração contínua com GitHub Actions;
- geração automatizada de relatórios;
- geração de relatórios independentes por navegador no CI;
- armazenamento de relatórios como artifacts do pipeline;
- exclusão de arquivos gerados automaticamente do versionamento;
- documentação dos cenários e resultados;
- versionamento com Git.

---

## 📈 Relatório do Ciclo de Testes

Além dos relatórios automatizados gerados pelo Mochawesome, o projeto possui documentação do ciclo de execução em:

```text
docs/relatorios_bugs/relatorio_execucao.md
```

O documento registra as métricas da execução e os cenários contemplados pela suíte.

---

## 🔄 Próximas Evoluções

O projeto pode continuar evoluindo através de:

- ampliação gradual da cobertura de regressão;
- criação de novos cenários E2E;
- expansão dos cenários de API;
- evolução da camada de Page Objects;
- criação de comandos customizados para comportamentos reutilizáveis;
- evolução das métricas e relatórios de qualidade;
- implementação de validações adicionais no pipeline;
- aprimoramento da estratégia de gerenciamento de massas de teste.

---

## 👨‍💻 Autor

**Felipe de Oliveira Santos**

Projeto desenvolvido como parte do portfólio profissional em **Quality Assurance e Automação de Testes**.