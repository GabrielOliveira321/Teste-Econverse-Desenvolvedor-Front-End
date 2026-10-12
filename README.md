# Teste Front-End Jr - Econverse

Projeto desenvolvido em React + TypeScript + Vite, conforme o layout e requisitos do teste tecnico da vaga Front-End.

## Tecnologias

- React
- TypeScript
- Vite
- Sass (SCSS)

## Requisitos

- Node.js 18+
- npm 9+

## Como instalar

```bash
npm install
```

## Como rodar em desenvolvimento

```bash
npm run dev
```

Aplicacao local:

- http://localhost:5173

## Como gerar build de producao

```bash
npm run build
```

## Como visualizar build local

```bash
npm run preview
```

## Como validar o projeto

### Lint

```bash
npm run lint
```

### Testes

No momento, o projeto nao possui testes automatizados configurados.

Validacao manual recomendada:

1. Acessar a home e conferir renderizacao geral.
2. Conferir carregamento da vitrine de produtos via JSON.
3. Clicar em um produto para abrir modal com dados corretos.
4. Usar o botao COMPRAR no modal e verificar a logica de quantidade.
5. Testar botoes laterais do carrossel para rolagem horizontal.

## Observacoes tecnicas

- O consumo da API utiliza proxy do Vite para evitar bloqueio de CORS durante desenvolvimento local.
- O layout foi implementado sem bibliotecas de UI (Bootstrap/Foundation).
# Teste-Econverse-Desenvolvedor-Front-End
