# Hub Movies

Hub Movies é um catálogo de filmes online que permite aos usuários explorar filmes populares, ver detalhes de cada filme, assistir trailers e salvar seus filmes favoritos.

## Funcionalidades

- Lista de filmes populares
- Detalhes completos de cada filme
- Visualização de trailers
- Galeria de imagens dos filmes
- Sistema de favoritos
- Interface responsiva e moderna

## Tecnologias Utilizadas

- React
- Vite
- TailwindCSS
- Axios
- React Router DOM
- React Icons

## Pré-requisitos

- Node.js (versão 22 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/FelipeCosta401/hub-movies.git
cd hub-movies
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure o token de autenticação:
   O projeto utiliza a API do TMDB (The Movie Database). O token de autenticação já está configurado no arquivo `src/config/AxisoInstance.js`:

```javascript
const AxiosInstance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjY5NzlmNzlhOTIwOGUwMDFiNWY1OWJkMzEzYzVhOCIsIm5iZiI6MS43NDY0NTA0NjE2NDMwMDAxZSs5LCJzdWIiOiI2ODE4YjgxZDYyYTA3NWI0ZGI4NGQyODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZZobYxRApgYYogH5JzWn0VgsC0MO9tcE5HN7bExL7EU",
  },
});
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── config/        # Configurações (Axios, etc)
├── hooks/         # Custom hooks
├── pages/         # Páginas da aplicação
├── routes/        # Configuração de rotas
├── services/      # Serviços de API
└── main.jsx       # Ponto de entrada da aplicação
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
