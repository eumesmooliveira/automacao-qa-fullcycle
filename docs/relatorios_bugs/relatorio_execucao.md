# 📊 Relatório de Execução do Ciclo de Testes — QA Full-Cycle

## 📌 Informações Gerais

- **Projeto:** QA Full-Cycle — UI & API Automation
- **Framework:** Cypress
- **Linguagem:** JavaScript
- **Aplicações-alvo:** SauceDemo (E2E/UI) e Restful-Booker (API)
- **Modo de execução:** Headless
- **Relatório:** Mochawesome
- **Integração Contínua:** GitHub Actions
- **Status da última execução completa:** 15 de 15 testes aprovados

---

## 📈 Métricas da Execução

A execução completa da suíte apresentou:

| Suíte | Executados | Aprovados | Falhas |
|---|---:|---:|---:|
| API REST | 9 | 9 | 0 |
| E2E / UI | 6 | 6 | 0 |
| **Total** | **15** | **15** | **0** |

**Taxa de aprovação da execução: 100%.**

---

## 🔎 Detalhamento dos Testes

### E2E / UI — SauceDemo

#### Autenticação

1. **CT02** — Deve exibir mensagem de erro ao tentar logar com senha inválida.
2. **CT10** — Deve impedir login de usuário bloqueado.

#### Fluxo de compra

3. **CT01** — Deve realizar login e concluir a compra com sucesso (Happy Path).
4. **CT11** — Deve adicionar e remover um produto do carrinho.
5. **CT12** — Deve validar campos obrigatórios no checkout.
6. **CT13** — Deve adicionar múltiplos produtos e validar o carrinho.

**Resultado E2E: 6 executados — 6 aprovados — 0 falhas.**

---

### API REST — Restful-Booker

#### Autenticação

1. **CT03** — Deve gerar um token de autenticação com sucesso.
2. **CT05** — Não deve autenticar com credenciais inválidas.

#### Criação e consulta de reservas

3. **CT04** — Deve criar uma nova reserva e validar status e dados retornados.
4. **CT15** — Não deve criar uma reserva sem o campo obrigatório `firstname`.
5. **CT06** — Deve retornar erro ao consultar uma reserva inexistente.
6. **CT08** — Deve criar e consultar uma reserva utilizando ID dinâmico.

#### Atualização e autorização

7. **CT07** — Não deve atualizar uma reserva sem autenticação.
8. **CT09** — Deve atualizar uma reserva utilizando autenticação e ID dinâmico.

#### Exclusão

9. **CT14** — Deve excluir uma reserva utilizando autenticação e ID dinâmico.

**Resultado API: 9 executados — 9 aprovados — 0 falhas.**

---

## 🧪 Validação de Campo Obrigatório — CT15

O cenário **CT15** foi adicionado para ampliar a cobertura negativa da API e verificar o comportamento da criação de reservas quando um campo obrigatório não é enviado.

A requisição é realizada sem:

```text
firstname
```

Durante a validação, a Restful-Booker respondeu com:

```text
HTTP 500 Internal Server Error
```

O teste automatizado registra e valida o comportamento efetivamente apresentado pela aplicação-alvo.

Embora o cenário seja aprovado porque a resposta observada corresponde ao comportamento esperado pelo teste, um status `500` representa erro interno do servidor e não necessariamente a resposta ideal para uma falha de validação de entrada.

Esse comportamento pode ser tratado como uma observação relevante de qualidade da API.

---

## 🔐 Autenticação e Dados Dinâmicos

Os cenários que exigem autorização obtêm o token de autenticação durante a própria execução.

Da mesma forma, operações de consulta, atualização e exclusão utilizam IDs gerados dinamicamente sempre que o fluxo exige uma reserva criada previamente.

Essa abordagem reduz dependências de dados fixos e aumenta a independência da automação.

---

## 📊 Relatório Mochawesome

O projeto utiliza **cypress-mochawesome-reporter**.

Após a execução completa, o relatório HTML é gerado em:

```text
cypress/reports/index.html
```

O relatório permite consultar os resultados dos testes e informações relacionadas à execução.

Como esse diretório é regenerado automaticamente, `cypress/reports/` não é versionado no repositório.

---

## 🎥 Evidências de Execução

O Cypress está configurado para gerar vídeos das execuções.

Os artefatos temporários são armazenados em:

```text
cypress/videos/
```

Para fins de documentação e portfólio, uma evidência selecionada da suíte E2E foi preservada em:

```text
docs/evidence/e2e-full-suite-success.mp4
```

A descrição das evidências está disponível em:

```text
docs/evidence/README.md
```

A evidência em vídeo representa a suíte E2E do SauceDemo. O resultado consolidado de **15 testes** inclui também os 9 cenários de API.

---

## 🔄 Integração Contínua

O projeto possui integração contínua com **GitHub Actions**.

O pipeline automatiza etapas de validação do projeto após alterações enviadas ao repositório.

A integração contínua complementa a execução local e ajuda a identificar regressões durante a evolução da suíte.

---

## 🧹 Qualidade de Código

Além dos testes automatizados, o projeto utiliza **ESLint** para análise estática.

A validação pode ser executada através de:

```bash
npm run lint
```

A análise estática complementa os testes automatizados e contribui para a manutenção da qualidade e consistência do código.

---

## ▶️ Reprodução da Execução

Para executar a suíte completa:

```bash
npm test
```

Para executar somente os testes de API:

```bash
npm run test:api
```

Para executar somente os testes E2E:

```bash
npm run test:e2e
```

Após a execução, o relatório Mochawesome pode ser consultado em:

```text
cypress/reports/index.html
```

---

## 📚 Documentação Relacionada

Informações adicionais sobre o projeto estão disponíveis em:

- [`../test-strategy.md`](../test-strategy.md) — estratégia, escopo e cobertura dos testes.
- [`../architecture.md`](../architecture.md) — arquitetura e decisões técnicas.
- [`../evidence/README.md`](../evidence/README.md) — evidências selecionadas das execuções.
- [`../../README.md`](../../README.md) — documentação principal do projeto.

---

## ✅ Resultado Final

A execução completa validada apresentou:

```text
API REST:  9 aprovados
E2E / UI:  6 aprovados
Total:    15 aprovados
Falhas:    0
```

A suíte cobre fluxos positivos e negativos envolvendo autenticação, autorização, criação, consulta, atualização e exclusão de recursos na API, além de autenticação, carrinho e checkout nos testes E2E.

---

## 👨‍💻 Autor

**Felipe de Oliveira**

QA | Test Automation | Cypress | Playwright | API Testing