# Resumos ADS

Anotações e resumos das disciplinas do curso de **Análise e Desenvolvimento de Sistemas**.  
Objetivo: ter um lugar organizado para revisar o conteúdo antes de provas e ajudar colegas que estudam os mesmos temas.

**Site publicado:** https://marcusteixeirabr.github.io/resumos

---

## Disciplinas

### Trimestre atual

| Disciplina | Tópicos principais | Resumos |
|---|---|---|
| **Paradigmas de Programação** | Métodos de programação, paradigmas imperativo/declarativo/estruturado/orientado a objetos, programação funcional (cálculo lambda, funções puras, funções de primeira classe, funtores/mônadas, currying), linguagens multiparadigma (F#, JavaScript, Python), evolução histórica das linguagens | 🟡 15/16 UAs em andamento |
| **Engenharia de Software** | Crise do software, conceitos fundamentais, evolução tecnológica e de processo (cascata, incremental, espiral, ágil), fases do ciclo de vida, SWEBOK, técnicas de estimativa (FPA, UCP, COCOMO), métricas de software, metodologias ágeis (XP, Scrum, OpenUP), manutenção de software, verificação, validação e testes, qualidade de software (CMMI, MPS.BR, Regra 10 de Myers) | 🟡 15/16 UAs em andamento |

### Trimestres anteriores

| Disciplina | Tópicos principais | Resumos |
|---|---|---|
| **Programming and Data Persistence** | Manipulação de arquivos, tipos de arquivos, operações I/O, acesso sequencial e direto, DOM, SQL, JDBC, JPA/Hibernate | ✅ Resumos prontos (16/16 UAs) |
| **Database Design for Apps** | Conceitos de BD, modelagem (ER, relacional), SQL (DDL/DML/DCL/DQL), transações, NoSQL, migrações | ✅ Resumos prontos (16/16 UAs) |
| **Software Design** | Arquitetura de software, UML (classes, sequência, componentes, estados), DER/MER, padrões de projeto | ✅ Resumos prontos (16/16 UAs) |
| **Responsive Web Development** | HTML5, CSS3, JavaScript, AJAX, PHP, MySQL | ✅ Resumos prontos (16/16 UAs) |
| **Engenharia de Requisitos** | BPM/BPMN, RF/RNF, regras de negócio, casos de uso, diagramas de atividades, rastreabilidade, testes | ✅ Resumos prontos (16/16 UAs) |
| **Pensamento Computacional** | Fundamentos de PC, algoritmos, lógica, linguagem C, estruturas de controle, vetores, matrizes | ✅ Resumos prontos (16/16 UAs) |

---

## Stack

O site foi migrado de arquivos HTML monolíticos (~2 000 linhas cada) para uma arquitetura baseada em **Astro 6 + MDX**, com deploy automatizado via GitHub Actions.

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 6](https://astro.build) — geração estática com content collections |
| Conteúdo | MDX (Markdown + componentes Astro) |
| Syntax highlight | Shiki (`github-dark-dimmed`) — zero JS no cliente |
| Busca | [Pagefind](https://pagefind.app) — índice gerado no CI, modal nativo |
| Deploy | GitHub Actions → GitHub Pages |

### Estrutura do repositório

```
resumos/
├── src/
│   ├── content/
│   │   ├── software-design/              # ua1.mdx … ua16.mdx
│   │   ├── responsive-web/               # ua1.mdx … ua16.mdx
│   │   ├── programming-data-persistence/ # ua1.mdx … ua16.mdx
│   │   ├── database-design-for-apps/     # ua1.mdx … ua16.mdx
│   │   ├── engenharia-requisitos/        # ua1.mdx … ua16.mdx
│   │   ├── pensamento-computacional/     # ua1.mdx … ua16.mdx
│   │   ├── paradigmas-programacao/       # ua1.mdx … ua16.mdx (em andamento)
│   │   └── engenharia-software/          # ua1.mdx … ua16.mdx (em andamento)
│   ├── components/              # Callout, Sidebar, SlidesGrid, SlideItem, InlineImage…
│   ├── layouts/                 # BaseLayout, DisciplineLayout
│   └── pages/                   # rotas dinâmicas por disciplina
├── public/
│   ├── assets/img/slides/       # imagens dos slides (.webp)
│   └── styles/                  # CSS global
└── .github/workflows/deploy.yml
```

### Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor local (localhost:4321)
npm run build     # build de produção → dist/
npm run index     # gerar índice Pagefind (requer build prévio)
```

---

## Sobre o conteúdo

> [!NOTE]
> Os resumos são anotações pessoais com base em livros, artigos e materiais de aula.  
> Não há garantia de completude ou ausência de erros — use com senso crítico.

Se encontrar algo incorreto ou quiser contribuir, abra uma issue ou pull request.

---

## Licença

Conteúdo sob [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — livre para compartilhar e adaptar, desde que sem fins comerciais e com atribuição.
