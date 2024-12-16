# Frontend para Gerenciamento de Usuários e Serviços

Este é o frontend da aplicação de gerenciamento de usuários e serviços, desenvolvido em React com Typescript. Ele consome a API descrita no [README do backend](https://github.com/AuzendeGBR/backend).

## Requisitos

- Node.js v16.13.0 ou superior
- Gerenciador de pacotes npm ou yarn

## Configuração do Ambiente

1. Clone o repositório: 

```bash
git clone https://github.com/AuzendeGBR/frontend
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento
- **`npm run build`**: Gera os arquivos otimizados para produção
- **`npm run preview`**: Serve os arquivos de produção localmente para testes

## Funcionalidades

### Usuários

- **Cadastro de Usuários:** Formulário para criação de novos usuários.
- **Login de Usuário:** O usuário pode se autenticar através do endpoint `/login` da API.

### Serviços

- **Listagem de Serviços:** Interface para exibir serviços cadastrados.
- **Listagem de Serviços Agendados:** Interface para exibir serviços solicitados pelo usuário.

## Estrutura de Pastas

A estrutura de pastas segue a organização recomendada para projetos React.

```plaintext
src/
├── app/       
├──── contexts/     # Contextos de estado global
├──── └── utils/    # Funções utilitárias
├──── hooks/        # Hooks personalizados
├──── routes/       # Configuração de rotas
├─── views/         
├──── services/     # Serviços de comunicação com a API
├──── assets/       # Arquivos estáticos (imagens, ícones, etc.)
├──── pages/        # Páginas da aplicação
├──── components/   # Componentes reutilizáveis
├──── styles/       # Arquivos de estilização (CSS/SCSS)
```

## Testando o Frontend

Recomenda-se o uso de uma ferramenta como o [Vite](https://vitejs.dev/) para rodar o projeto localmente:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível no navegador em [http://localhost:5173](http://localhost:5173) por padrão.

Certifique-se de que o backend também esteja em execução para consumir os endpoints.