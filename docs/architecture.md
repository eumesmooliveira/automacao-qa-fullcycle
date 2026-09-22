# Arquitetura da Automação — QA Full-Cycle

## 1. Visão geral

O projeto **QA Full-Cycle** foi estruturado para demonstrar uma arquitetura de automação capaz de atender testes de interface End-to-End (E2E) e testes de API REST utilizando **Cypress e JavaScript**.

A organização busca separar responsabilidades entre testes, páginas, serviços, dados e configurações, reduzindo duplicação de código e facilitando manutenção e evolução da suíte.

A arquitetura utiliza principalmente:

- Page Object Model (POM);
- Service Layer;
- Fixtures;
- Custom Commands;
- Cypress;
- Mochawesome;
- ESLint;
- GitHub Actions.

---

## 2. Estrutura principal

A organização do código de automação segue a estrutura:

```text
automacao-qa-fullcycle/
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
│   ├── relatorios_bugs/
│   ├── architecture.md
│   └── test-strategy.md
│
├── cypress.config.js
├── eslint.config.js
├── package.json
└── README.md
```

Essa separação permite identificar rapidamente onde cada responsabilidade está localizada.

---

## 3. Page Object Model

Os testes E2E utilizam o padrão **Page Object Model (POM)**.

Os objetos de página ficam em:

```text
cypress/pages/
```

Cada classe representa uma área ou página da aplicação:

- `LoginPage.js` — autenticação;
- `InventoryPage.js` — listagem e interação com produtos;
- `CartPage.js` — operações relacionadas ao carrinho;
- `CheckoutPage.js` — preenchimento e conclusão do checkout.

A utilização de Page Objects evita espalhar seletores e ações de interface por diferentes arquivos de teste.

### Decisão arquitetural

A escolha do POM foi feita para:

- reduzir duplicação;
- centralizar seletores;
- melhorar legibilidade;
- facilitar alterações na interface;
- manter os cenários focados no comportamento validado.

Caso um seletor seja alterado na aplicação, a manutenção tende a ficar concentrada no Page Object correspondente.

---

## 4. Service Layer para API

As operações da Restful-Booker são centralizadas em:

```text
cypress/services/BookingService.js
```

O serviço encapsula operações como:

- autenticação;
- criação de reserva;
- consulta de reserva;
- atualização de reserva;
- exclusão de reserva.

### Decisão arquitetural

A utilização de uma camada de serviços evita repetir configurações de `cy.request()` nos cenários.

Os testes ficam responsáveis principalmente por:

1. preparar os dados;
2. chamar o serviço adequado;
3. validar a resposta.

Essa separação melhora a reutilização e facilita a manutenção das chamadas HTTP.

---

## 5. Tratamento de cenários HTTP negativos

Os métodos do `BookingService` permitem controlar `failOnStatusCode` quando necessário.

Por padrão, respostas HTTP de erro fazem a requisição falhar automaticamente. Para cenários negativos intencionais, o teste pode desativar esse comportamento e validar explicitamente o status retornado.

Exemplo conceitual:

```javascript
BookingService.createBooking(invalidBookingData, false)
  .then((response) => {
    expect(response.status).to.eq(500);
  });
```

Essa abordagem permite testar respostas de erro sem transformar um comportamento esperado do cenário negativo em uma falha técnica do Cypress.

---

## 6. Fixtures e dados de teste

Os dados reutilizáveis estão localizados em:

```text
cypress/fixtures/
```

A suíte utiliza fixtures para separar dados dos fluxos de automação.

Entre os arquivos utilizados estão:

- `booking.json`;
- `checkout.json`;
- `users.json`.

### Decisão arquitetural

A separação dos dados facilita:

- reutilização;
- manutenção;
- criação de diferentes cenários;
- redução de valores fixos espalhados pelo código.

Nos testes de API, dados base podem ser reutilizados e sobrescritos apenas nos campos necessários para determinado cenário.

---

## 7. Custom Commands

Comportamentos reutilizáveis do Cypress podem ser centralizados em:

```text
cypress/support/commands.js
```

Essa camada complementa os Page Objects e evita repetição de operações comuns entre diferentes cenários.

### Decisão arquitetural

Custom Commands são utilizados quando uma operação representa um comportamento reutilizável do framework ou da aplicação e pode ser compartilhada por múltiplos testes.

O objetivo é manter os arquivos de especificação mais legíveis e orientados aos cenários de negócio.

---

## 8. Separação entre E2E e API

Os testes estão separados em dois arquivos principais:

```text
cypress/e2e/
├── api_restful_booker.cy.js
└── fluxo_ecommerce.cy.js
```

`api_restful_booker.cy.js` concentra os testes da API Restful-Booker.

`fluxo_ecommerce.cy.js` concentra os testes E2E do SauceDemo.

### Decisão arquitetural

Essa separação permite:

- executar somente a suíte de API;
- executar somente a suíte E2E;
- analisar falhas por contexto;
- evoluir as duas frentes independentemente;
- utilizar scripts específicos no `package.json`.

---

## 9. Scripts de execução

O `package.json` disponibiliza comandos para diferentes necessidades.

### Suíte completa

```bash
npm test
```

### API

```bash
npm run test:api
```

### E2E

```bash
npm run test:e2e
```

### Chrome

```bash
npm run test:chrome
```

### Firefox

```bash
npm run test:firefox
```

### Análise estática

```bash
npm run lint
```

A existência de comandos específicos facilita execução local, depuração e integração contínua.

---

## 10. Relatórios com Mochawesome

O projeto utiliza **cypress-mochawesome-reporter** para geração de relatórios de execução.

Ao final da suíte, é gerado um relatório HTML contendo informações sobre os testes executados e seus resultados.

Os relatórios locais são gerados em:

```text
cypress/reports/
```

Como esses arquivos são artefatos gerados automaticamente, o diretório é ignorado pelo Git.

### Decisão arquitetural

O relatório automatizado facilita:

- análise dos resultados;
- investigação de falhas;
- visualização consolidada da execução;
- geração de evidências para CI.

---

## 11. Vídeos e screenshots

O Cypress está configurado para produzir evidências de execução.

Os vídeos gerados localmente ficam em:

```text
cypress/videos/
```

Screenshots de execução, quando gerados, ficam em:

```text
cypress/screenshots/
```

Esses diretórios também são ignorados pelo Git para evitar versionar artefatos temporários a cada execução.

Para fins de portfólio, evidências selecionadas podem ser preservadas separadamente em:

```text
docs/evidence/
```

Dessa forma, os artefatos temporários permanecem fora do versionamento, enquanto evidências relevantes podem ser disponibilizadas ao avaliador.

---

## 12. ESLint e qualidade de código

O projeto utiliza **ESLint** para análise estática.

A configuração está localizada em:

```text
eslint.config.js
```

A validação pode ser executada com:

```bash
npm run lint
```

### Decisão arquitetural

A inclusão de lint no projeto ajuda a detectar problemas de código antes da execução da automação e contribui para consistência e legibilidade.

Testes automatizados e análise estática são tratados como validações complementares.

---

## 13. Integração contínua

O projeto utiliza **GitHub Actions** para integração contínua.

A automação de CI permite executar validações após alterações enviadas ao repositório, reduzindo a dependência de verificações exclusivamente locais.

O pipeline é utilizado como uma camada adicional de segurança para identificar regressões.

---

## 14. Independência dos cenários de API

Sempre que uma operação necessita de uma reserva existente, a suíte prioriza criar esse recurso durante a própria execução.

O ID retornado é utilizado dinamicamente nas operações seguintes.

O mesmo princípio é aplicado à autenticação: cenários protegidos podem gerar o token necessário durante o fluxo.

### Decisão arquitetural

Evitar dependência de IDs fixos reduz problemas relacionados a:

- registros removidos;
- dados modificados externamente;
- ambientes reinicializados;
- dependência da ordem de execução.

Isso torna a suíte mais independente e reproduzível.

---

## 15. Organização da documentação

A documentação é dividida por finalidade:

```text
docs/
├── evidence/
│   ├── e2e-full-suite-success.mp4
│   └── README.md
├── relatorios_bugs/
│   └── relatorio_execucao.md
├── architecture.md
└── test-strategy.md
```

Cada documento possui uma responsabilidade:

- `test-strategy.md` — estratégia, escopo e cobertura dos testes;
- `architecture.md` — estrutura e decisões arquiteturais;
- `relatorio_execucao.md` — registro consolidado da execução;
- `evidence/` — evidências selecionadas para consulta.

O README principal funciona como porta de entrada para o projeto e direciona para a documentação detalhada.

---

## 16. Princípios adotados

A arquitetura do projeto busca aplicar os seguintes princípios:

- separação de responsabilidades;
- reutilização de código;
- independência dos testes;
- manutenção simplificada;
- dados de teste separados da lógica;
- cobertura positiva e negativa;
- rastreabilidade por relatórios e evidências;
- validação automatizada em integração contínua;
- documentação técnica do projeto.

O objetivo é aproximar o repositório de práticas utilizadas em projetos reais de **Quality Assurance e Test Automation**, mantendo uma estrutura compatível com o escopo de um projeto de portfólio.

---

## 17. Autor

**Felipe de Oliveira**

QA | Test Automation | Cypress | Playwright | API Testing