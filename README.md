# Teste Econverse — Vaga Desenvolvedor Front-End

Página de e-commerce desenvolvida com **React**, **TypeScript** e **Sass (SCSS)**, seguindo o layout do Figma fornecido no teste.

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build e servidor de desenvolvimento)
- [Sass](https://sass-lang.com/) (pré-processador, sintaxe SCSS)
- ESLint (qualidade de código)
- Nenhuma biblioteca de UI (sem Bootstrap, Foundation ou similares)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node.js)

## Como rodar o projeto

```bash
# 1. clonar o repositório
git clone https://github.com/JosueMessiasDev/TesteSeletivo
cd TesteSeletivo

# 2. instalar as dependências
npm install

# 3. iniciar o servidor de desenvolvimento
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Verifica os tipos (TypeScript) e gera a versão de produção na pasta `dist` |
| `npm run preview` | Serve localmente a versão gerada pelo `build` |
| `npm run lint` | Roda o ESLint em todo o projeto |

## Como compilar

```bash
npm run build
```

## Como testar

O projeto não possui testes automatizados. A verificação é feita em duas etapas.

**1. Verificações estáticas**

```bash
npx tsc -b      # checagem de tipos, deve terminar sem erros
npm run lint    # análise de código, deve terminar sem avisos
```

**2. Roteiro de teste manual** (com `npm run dev` rodando)

- [ ] A vitrine carrega os produtos do JSON (aba *Network* mostra **uma única** requisição para `produtos.json`)
- [ ] As setas do carrossel avançam e voltam, e ficam desabilitadas nas extremidades
- [ ] Clicar em um produto (ou em *Comprar*) abre o modal com os dados **daquele** produto
- [ ] O modal fecha pelo botão de fechar, pela tecla `Esc` e clicando fora
- [ ] O seletor de quantidade do modal funciona
- [ ] O formulário da newsletter exige nome, e-mail válido e o aceite dos termos
- [ ] O layout se adapta a telas menores (testar a 1440px, 1024px e 375px)
- [ ] A navegação por teclado (`Tab`) alcança botões, links e campos com foco visível

## Estrutura do projeto

```
src/
├── assets/            # imagens, ícones e logo
├── components/
│   ├── Header/        # topo: logo, busca e ícones
│   ├── Banner/        # banner principal
│   ├── CategoryNav/   # navegação por categorias
│   ├── ProductGrid/   # vitrine com carrossel (reutilizada 3x na página)
│   ├── ProductCard/   # card de produto
│   ├── ProductModal/  # modal com detalhes do produto
│   ├── Partners/      # cards de parceiros
│   ├── Brands/        # navegue por marcas
│   ├── Newsletter/    # formulário de inscrição
│   └── Footer/        # rodapé
├── hooks/
│   └── useProducts.ts # busca os produtos uma única vez e compartilha o resultado
├── services/
│   └── productService.ts  # acesso à API/JSON
├── styles/            # variáveis e estilos globais (SCSS)
├── types/             # tipos TypeScript (ex.: Product)
└── utils/             # funções auxiliares (ex.: formatPrice)
```

## Decisões técnicas

- **Componentização:** cada bloco da página é um componente com seu próprio `.tsx` e `.scss`. A vitrine (`ProductGrid`) é um único componente configurável por props (`title`, `showTabs`, `showSeeAll`) e é reaproveitada nas três posições em que aparece.
- **Uma requisição, três vitrines:** o hook `useProducts` guarda a Promise da requisição em cache de módulo, então o JSON é buscado uma única vez, mesmo com várias vitrines na tela.
- **Dados tipados:** o tipo `Product` descreve os campos do JSON, e os componentes recebem somente o que precisam via props.
- **Variáveis SCSS:** cores, fonte e largura do container ficam em `styles/_variables.scss`, evitando valores repetidos pelos arquivos.
- **Metodologia BEM:** as classes seguem o padrão `bloco__elemento--modificador`, sem vazar estilo entre componentes.
- **HTML semântico e acessibilidade:** uso de `header`, `main`, `section`, `nav`, `article`, `footer`, hierarquia de títulos, `aria-label` em botões só com ícone, `label` em todos os campos e `alt` nas imagens.
- **SEO:** `lang="pt-BR"`, `title` e `meta description` próprios, metadados Open Graph, um único `h1` e imagens com `alt` e carregamento `lazy`.

## Fonte dos dados

Os produtos são consumidos do JSON fornecido no teste:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

## Observação sobre o uso de IA

Utilizei o Claude (Anthropic) como ferramenta de apoio durante o desenvolvimento, principalmente para revisão, correção de erros e sugestões de organização. Revisei e testei o código e consigo explicar as decisões do projeto.
