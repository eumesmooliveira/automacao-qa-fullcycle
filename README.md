# 🚀 Full-Cycle QA Suite — UI & API Automation

[![Cypress Tests](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/eumesmooliveira/automacao-qa-fullcycle/actions/workflows/cypress-tests.yml)

Projeto de Quality Assurance desenvolvido para demonstrar um fluxo completo de automação de testes, envolvendo planejamento, definição de cenários, automação de API e interface, arquitetura Page Object Model, execução de regressão, integração contínua e geração automatizada de relatórios e evidências.

A suíte utiliza **Cypress e JavaScript** e possui atualmente **13 testes automatizados**, distribuídos entre testes de API REST e testes E2E de interface.

As execuções são integradas ao **GitHub Actions**, com geração automática de relatório HTML através do **Mochawesome** e armazenamento do relatório como artifact do pipeline.

> **13 testes automatizados | E2E + API | Page Object Model | CI/CD | Mochawesome**

---

## 🎯 Objetivo do Projeto

Demonstrar na prática conhecimentos aplicados ao processo de Quality Assurance, contemplando:

- planejamento e definição de cenários de teste;
- automação de testes de interface;
- automação de testes de API REST;
- validação de cenários positivos e negativos;
- utilização de dados dinâmicos durante os testes;
- organização da automação E2E com Page Object Model;
- execução automatizada da suíte;
- integração contínua;
- geração de relatórios e evidências;
- documentação dos resultados.

O projeto foi estruturado como uma suíte de regressão automatizada, permitindo validar diferentes camadas de uma aplicação dentro de um único repositório.

---

## 🛠️ Tecnologias e Práticas Utilizadas

- **JavaScript / Node.js** — linguagem e ambiente de execução
- **Cypress** — automação de testes E2E e API
- **Page Object Model (POM)** — organização e separação das responsabilidades dos testes E2E
- **REST / JSON** — validação de serviços e dados retornados
- **Mochawesome** — geração automatizada de relatórios HTML
- **GitHub Actions** — integração contínua e execução automatizada da suíte
- **Git / GitHub** — versionamento e hospedagem do projeto
- **Markdown** — documentação dos cenários e resultados

---

## 🧪 Aplicações Testadas

### UI — SauceDemo

Aplicação utilizada para automação dos fluxos E2E relacionados a:

- autenticação;
- validação de credenciais inválidas;
- bloqueio de usuário;
- catálogo de produtos;
- carrinho de compras;
- checkout;
- validação de campos obrigatórios;
- manipulação de múltiplos produtos;
- conclusão de compra.

### API — Restful-Booker

API utilizada para automação e validação de:

- autenticação;
- criação de reservas;
- consulta de reservas;
- cenários negativos;
- autorização;
- atualização de dados;
- utilização de IDs e tokens dinâmicos.

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

## 🏗️ Arquitetura da Automação E2E

Os testes E2E utilizam o padrão **Page Object Model (POM)** para separar os cenários de teste das interações específicas com cada página da aplicação.

Essa organização centraliza seletores e ações reutilizáveis, reduz duplicações e facilita a manutenção da suíte.

```text
fluxo_ecommerce.cy.js
        │
        ├── LoginPage
        │
        ├── InventoryPage
        │
        ├── CartPage
        │
        └── CheckoutPage
```

### Page Objects

| Page Object | Responsabilidade |
|---|---|
| `LoginPage.js` | Login e validação de erros de autenticação |
| `InventoryPage.js` | Produtos, adição ao carrinho e contador de itens |
| `CartPage.js` | Validação, remoção de produtos e início do checkout |
| `CheckoutPage.js` | Dados do checkout, validações, finalização e confirmação da compra |

Com essa estrutura, os arquivos de teste ficam concentrados na descrição do comportamento esperado, enquanto os detalhes de interação com a interface permanecem encapsulados nos Page Objects.

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
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   ├── fixtures/
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
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

Os diretórios `cypress/reports/`, `cypress/videos/` e `cypress/screenshots/` são utilizados para artefatos gerados durante as execuções e não são versionados no repositório.

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

Para executar somente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/api_restful_booker.cy.js"
```

Para executar somente os testes E2E:

```bash
npx cypress run --spec "cypress/e2e/fluxo_ecommerce.cy.js"
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

**Taxa de sucesso da execução documentada: 100%.**

Os testes cobrem cenários positivos e negativos nas camadas de API e interface.

---

## 📊 Relatórios e Evidências

A suíte utiliza o **Mochawesome** para gerar automaticamente um relatório HTML após a execução dos testes.

O relatório apresenta informações como:

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

As execuções também podem gerar evidências em vídeo através do Cypress.

Relatórios, vídeos e screenshots são tratados como artefatos de execução e permanecem fora do versionamento do código-fonte.

---

## ⚙️ Integração Contínua — GitHub Actions

O projeto possui um pipeline de integração contínua configurado através do **GitHub Actions**.

O workflow é executado automaticamente em:

- `push` para a branch `main`;
- `pull_request` direcionado para a branch `main`.

Durante o pipeline são realizadas as seguintes etapas:

```text
Push / Pull Request
        ↓
Checkout do repositório
        ↓
Configuração do Node.js
        ↓
Instalação das dependências
        ↓
Execução da suíte Cypress
        ↓
Geração do relatório Mochawesome
        ↓
Upload do relatório como Artifact
```

O pipeline executa os **13 testes automatizados** em ambiente de integração contínua.

Ao final da execução, o relatório Mochawesome é disponibilizado como um artifact chamado:

```text
mochawesome-report
```

Isso permite consultar os resultados e evidências gerados durante a execução do workflow.

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
Utilizar o ID na consulta/atualização
      ↓
Validar os dados retornados
```

Esse fluxo reduz a dependência de registros previamente cadastrados e torna os cenários mais independentes.

---

## 💡 Boas Práticas Aplicadas

Durante o desenvolvimento da suíte foram aplicadas práticas como:

- separação entre testes de API e interface;
- organização dos testes por contexto e responsabilidade;
- utilização de **Page Object Model** nos fluxos E2E;
- encapsulamento de seletores e interações de interface;
- redução de duplicação de código;
- reutilização de métodos entre cenários;
- utilização de cenários positivos e negativos;
- assertions em diferentes etapas dos fluxos;
- validação de status HTTP e dados retornados;
- utilização de IDs e tokens dinâmicos;
- ausência de esperas fixas desnecessárias nos fluxos E2E;
- execução headless da suíte;
- integração contínua com GitHub Actions;
- geração automatizada de relatórios;
- armazenamento do relatório como artifact do pipeline;
- separação dos artefatos gerados do código versionado;
- documentação dos cenários e resultados;
- versionamento com Git.

---

## 📈 Relatório do Ciclo de Testes

Além do relatório automatizado gerado pelo Mochawesome, o projeto possui documentação do ciclo de execução em:

```text
docs/relatorios_bugs/relatorio_execucao.md
```

O documento registra métricas da execução e os cenários contemplados pela suíte.

---

## 🔄 Próximas Evoluções

O projeto pode continuar evoluindo através de:

- maior utilização de **fixtures** para gerenciamento de massas de teste;
- criação de **Custom Commands** para comportamentos compartilhados quando aplicável;
- ampliação gradual da cobertura de regressão;
- inclusão de novos cenários de API e interface;
- execução da suíte em múltiplos navegadores;
- organização de execuções por grupos ou suítes;
- evolução das métricas e relatórios de qualidade.

---

## 👨‍💻 Autor

**Felipe de Oliveira Santos**

Projeto desenvolvido como parte do portfólio profissional em **Quality Assurance e Automação de Testes**.