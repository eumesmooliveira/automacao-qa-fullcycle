# 🚀 Full-Cycle QA Suite (UI & API Automation)

Suíte de testes automatizados de ponta a ponta (E2E) e de API desenvolvida para simular um processo completo de Quality Assurance, cobrindo planejamento, definição de cenários, execução automatizada, evidências em vídeo e documentação dos resultados.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript / Node.js** — Linguagem base e ecossistema
- **Cypress** — Framework principal para testes E2E e de API via `cy.request`
- **Markdown** — Documentação de cenários, planejamento e relatórios

---

## 📂 Estrutura do Projeto

```text
automacao-qa-fullcycle/
├── cypress/
│   ├── e2e/
│   │   ├── api_restful_booker.cy.js   # Testes de API (Autenticação e Reservas)
│   │   └── fluxo_ecommerce.cy.js      # Testes E2E (Sauce Demo UI)
│   ├── videos/                         # Gravações automáticas das execuções (.mp4)
│   ├── fixtures/
│   └── support/
├── docs/
│   ├── cenarios_teste/                 # Especificação detalhada de cenários (BDD/Gherkin)
│   └── relatorios_bugs/                # Relatórios formais de execução
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de simular um fluxo de Quality Assurance envolvendo diferentes etapas do processo de testes, desde a definição dos cenários até a execução automatizada e documentação dos resultados.

A suíte contempla testes de interface (E2E) e de API REST, permitindo validar fluxos críticos da aplicação, regras de negócio, respostas HTTP e dados retornados pela API.

---

## 🧪 Estratégia de Testes

A estratégia foi organizada considerando diferentes níveis de validação:

- **Testes funcionais:** validação do comportamento esperado das funcionalidades.
- **Testes E2E:** validação de fluxos completos pela interface utilizando Cypress.
- **Testes de API:** validação de endpoints REST, status HTTP, payloads e dados retornados.
- **Cenários positivos e negativos:** cobertura de comportamentos esperados e situações de erro.
- **Testes de regressão:** reexecução dos cenários automatizados para verificar se alterações não impactaram funcionalidades já validadas.
- **Documentação de cenários:** especificação dos casos de teste utilizando BDD/Gherkin.
- **Evidências de execução:** geração de registros das execuções automatizadas para auxiliar na análise dos resultados.

A automação foi aplicada principalmente aos cenários repetitivos e aos fluxos considerados relevantes para regressão, buscando tornar a execução dos testes mais consistente e reproduzível.

---

## 📊 Cobertura de Testes

| Camada | Fluxo / Funcionalidade | Tipo de Teste | Automação |
|---|---|---|---|
| API | Autenticação | Funcional / API | Cypress (`cy.request`) |
| API | Reservas | Funcional / API | Cypress (`cy.request`) |
| UI | Fluxo de e-commerce | End-to-End (E2E) | Cypress |
| API | Validação de respostas HTTP | Positivo / Negativo | Cypress |
| API | Validação de dados retornados | Conteúdo | Cypress |
| UI + API | Reexecução dos fluxos automatizados | Regressão | Cypress |

A cobertura foi estruturada para validar tanto a camada de serviços quanto fluxos completos de interface, combinando diferentes tipos de teste dentro da mesma suíte de automação.