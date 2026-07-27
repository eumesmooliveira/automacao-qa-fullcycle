# 🚀 Full-Cycle QA Suite (UI & API Automation)

Suíte de testes automatizados de ponta a ponta (E2E) e de API desenvolvida para atender aos mais altos padrões de qualidade de software, cobrindo planejamento, cenários, execução automatizada, evidências em vídeo e relatórios gerenciais.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript / Node.js** (Linguagem base e ecossistema)
* **Cypress** (Framework principal para testes E2E e de API via `cy.request`)
* **Markdown** (Documentação de cenários, planejamento e relatórios)

---

## 📂 Estrutura do Projeto

```text
automacao-qa-fullcycle/
├── cypress/
│   ├── e2e/
│   │   ├── api_restful_booker.cy.js  # Testes de API (Autenticação e Reservas)
│   │   └── fluxo_ecommerce.cy.js     # Testes E2E (Sauce Demo UI)
│   ├── videos/                       # Gravações automáticas das execuções (.mp4)
│   ├── fixtures/
│   └── support/
├── docs/
│   ├── cenarios_teste/               # Especificação detalhada de cenários (BDD/Gherkin)
│   └── relatorios_bugs/              # Relatórios formais de execução
├── cypress.config.js
├── package.json
└── README.md