# 📊 Relatório de Execução do Ciclo de Testes — QA Full-Cycle

## 📌 Informações Gerais

- **Projeto:** Full-Cycle QA Suite — UI & API Automation
- **Aplicações-alvo:** SauceDemo (UI) e Restful-Booker (API)
- **Execução:** Cypress em modo headless
- **Integração Contínua:** GitHub Actions
- **Status Final:** Aprovado — 13 de 13 testes executados com sucesso

---

## 📈 Métricas de Execução

- **Total de cenários automatizados:** 13
- **Cenários executados:** 13
- **Sucessos:** 13
- **Falhas:** 0
- **Taxa de sucesso:** 100%

| Suíte | Testes | Aprovados | Falhas |
|---|---:|---:|---:|
| API REST | 7 | 7 | 0 |
| E2E / UI | 6 | 6 | 0 |
| **Total** | **13** | **13** | **0** |

---

## 🔍 Detalhamento dos Testes

### E2E / UI — SauceDemo

1. **CT01** — Login e conclusão de compra (Happy Path)
2. **CT02** — Login com senha inválida
3. **CT10** — Login com usuário bloqueado
4. **CT11** — Adição e remoção de produto do carrinho
5. **CT12** — Validação dos campos obrigatórios do checkout
6. **CT13** — Adição de múltiplos produtos e validação do carrinho

### API — Restful-Booker

1. **CT03** — Geração de token com credenciais válidas
2. **CT04** — Criação de reserva e validação de status e dados retornados
3. **CT05** — Autenticação com credenciais inválidas
4. **CT06** — Consulta de reserva inexistente
5. **CT07** — Tentativa de atualização sem autenticação
6. **CT08** — Criação e consulta utilizando ID dinâmico
7. **CT09** — Atualização autenticada utilizando token e ID dinâmicos

---

## 🔄 Integração Contínua

A suíte está integrada ao **GitHub Actions** e é executada automaticamente em eventos de `push` e `pull_request` direcionados à branch `main`.

O pipeline realiza:

- Checkout do repositório
- Configuração do ambiente Node.js
- Instalação das dependências com `npm ci`
- Execução completa da suíte com `npx cypress run`

A execução em CI validou os **13 testes automatizados com sucesso**.

---

## 🎥 Evidências

O Cypress está configurado para gerar vídeos das execuções automatizadas.

As execuções locais geram evidências no diretório:

`cypress/videos/`

Os resultados da integração contínua também podem ser acompanhados pelo histórico de execuções do **GitHub Actions**.

---

## ✅ Resultado Final

A execução completa da suíte apresentou:

**13 testes executados — 13 aprovados — 0 falhas.**

A automação cobre cenários positivos e negativos de **API REST e interface E2E**, incluindo autenticação, autorização, criação e atualização de recursos, carrinho e checkout.
