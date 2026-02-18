# 📋 TaskFlow - Sistema de Gerenciamento de Tarefas

<div align="center">

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Sistema completo de gerenciamento de tarefas com dashboard interativo, gráficos de produtividade, autenticação e CRUD completo.**

[🚀 Demo ao Vivo]() · [📖 Documentação](#funcionalidades) · [🐛 Reportar Bug](../../issues)

</div>

---

## 📸 Screenshots
<img width="1869" height="946" alt="Screenshot 2026-02-18 at 13-02-17 TaskFlow - Gerenciamento de Tarefas" src="https://github.com/user-attachments/assets/5f11600f-a2df-4b7b-a4b2-5a3c4e629755" />
<img width="1869" height="946" alt="Screenshot 2026-02-18 at 13-02-02 TaskFlow - Gerenciamento de Tarefas" src="https://github.com/user-attachments/assets/a304e09c-0567-4afd-b641-dc8104e7f6cf" />


## ✨ Funcionalidades

- **Dashboard Interativo** — Visão geral com métricas de produtividade, tarefas por status e gráficos
- **CRUD Completo de Tarefas** — Criar, visualizar, editar e excluir tarefas com validação
- **Sistema de Filtros** — Filtragem por status (pendente, em progresso, concluída), prioridade e categoria
- **Drag & Drop** — Reorganize tarefas entre colunas no estilo Kanban
- **Pesquisa em Tempo Real** — Busca instantânea por título ou descrição
- **Autenticação Simulada** — Tela de login com validação de formulário
- **Tema Escuro/Claro** — Alternância de tema com persistência em LocalStorage
- **Design Responsivo** — Interface adaptável para desktop, tablet e mobile
- **Dados Persistentes** — Armazenamento local via LocalStorage (simulando backend)
- **Gráficos de Produtividade** — Visualização de progresso com gráficos interativos

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React 18** | Biblioteca para construção de interfaces |
| **JavaScript (ES6+)** | Linguagem principal |
| **Tailwind CSS** | Framework CSS utilitário |
| **React Router** | Navegação SPA |
| **Context API** | Gerenciamento de estado global |
| **Recharts** | Biblioteca de gráficos |
| **Lucide React** | Ícones modernos |
| **LocalStorage API** | Persistência de dados |

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joaosousa51/taskflow.git

# Entre na pasta do projeto
cd taskflow

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Credenciais de teste
- **Email:** admin@taskflow.com
- **Senha:** 123456

## 📁 Estrutura do Projeto

```
taskflow/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── StatsCards.jsx
│   │   │   ├── TaskChart.jsx
│   │   │   └── RecentTasks.jsx
│   │   ├── Tasks/
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskFilters.jsx
│   │   ├── Layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Layout.jsx
│   │   └── Auth/
│   │       └── LoginForm.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   ├── TaskContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useTasks.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── mockData.js
│   │   └── helpers.js
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── TasksPage.jsx
│   │   └── LoginPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🧠 Conceitos Aplicados

- **Componentização** — Componentes reutilizáveis e desacoplados
- **Context API + Hooks** — Gerenciamento de estado sem bibliotecas externas
- **Custom Hooks** — Lógica reutilizável extraída em hooks personalizados
- **Responsividade** — Mobile-first com Tailwind CSS
- **Clean Code** — Código limpo, organizado e bem documentado
- **Versionamento** — Git com commits semânticos

## 📊 Funcionalidades Futuras (Roadmap)

- [ ] Integração com API REST real (Node.js + Express)
- [ ] Banco de dados PostgreSQL
- [ ] Autenticação JWT
- [ ] Notificações em tempo real com WebSocket
- [ ] Testes unitários com Jest e React Testing Library
- ✅ Deploy na Vercel

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ por [João Victor Teixeira Sousa](https://github.com/joaosousa51)

</div>
