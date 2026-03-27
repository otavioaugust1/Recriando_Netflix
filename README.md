# 🎬 Netflix Clone - Projeto Educativo

[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML-5-E34C26.svg)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6.svg)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://github.com/otavioaugust1/Recriando_Netflix)

Um projeto didático que recria a interface da Netflix utilizando **HTML, CSS e JavaScript puro**, focado em aprendizado prático de desenvolvimento web.

## 📋 Objetivo

Este projeto foi desenvolvido com fins educacionais para ensinar e praticar:
- **HTML semântico** e estrutura de página
- **CSS responsivo** com Grid e Flexbox layouts
- **JavaScript moderno** com manipulação do DOM
- **Consumo de APIs** (Wikipedia para informações extras)
- **LocalStorage** para persistência de dados
- **Boas práticas** de código limpo e bem comentado

## 🎯 Funcionalidades

- ✅ Grade de filmes/séries com design similar ao Netflix
- ✅ Seção destaque com imagem de fundo e informações do filme
- ✅ Filtros para visualizar Séries, Filmes ou Tudo
- ✅ Modal com detalhes completos dos conteúdos
- ✅ Integração com Wikipedia para resumos melhorados
- ✅ Interface responsiva (mobile, tablet, desktop)
- ✅ Código bem comentado para aprendizado

## 📁 Estrutura do Projeto

```
Recriando_Netflix/
├── index.html              # Estrutura HTML da página
├── style/
│   ├── main.css           # Estilos principais (bem comentado)
│   └── responsive.css     # Media queries para responsividade
├── js/
│   ├── app.js             # Script JavaScript principal (didático)
│   └── owl/              # Bibliotecas externas
├── data/
│   └── movies.json       # Base de dados dos filmes/séries
├── img/                  # Imagens (posters, etc)
├── README.md             # Este arquivo
└── LICENSE               # Licença do projeto
```

## 🚀 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/otavioaugust1/Recriando_Netflix.git
cd Recriando_Netflix
```

### 2. Abrir no Navegador
Simplesmente abra o arquivo `index.html` em seu navegador favorito:
```bash
# No macOS
open index.html

# No Linux
xdg-open index.html

# Ou apenas arraste o arquivo para o navegador
```

### 3. Nenhuma Dependência!
Este projeto não requer:
- ❌ Node.js
- ❌ npm
- ❌ Bundler (Webpack, Vite, etc)
- ❌ Servidor local (funciona diretamente via arquivo)

Tudo é **vanilla JavaScript** - apenas HTML, CSS e JS puro! 

## 📚 Aprendizado do Código

### Arquivo Principal: `js/app.js`

O script está **altamente comentado** para fins educacionais. Principais conceitos:

#### 1. **Estado da Aplicação**
```javascript
const app = {
    allMovies: [],      // Todos os filmes carregados
    featuredMovie: null, // Filme em destaque
    filteredMovies: []   // Filmes filtrados
};
```

#### 2. **Carregar Dados**
```javascript
// Busca dados do arquivo JSON
async function loadMovies() {
    const response = await fetch('data/movies.json');
    return await response.json();
}
```

#### 3. **Manipulação do DOM**
```javascript
// Atualiza a seção destaque
function setHeroMovie(movie) {
    document.getElementById('hero-title').textContent = movie.title;
    document.getElementById('hero-summary').textContent = movie.summary;
    // ... mais atualizações
}
```

#### 4. **Eventos e Listeners**
```javascript
// Detecta cliques nos botões de filtro
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const filterType = event.target.getAttribute('data-filter');
        filterMovies(filterType);
    });
});
```

## 🎨 Customizar Filmes

### Adicionar Novo Filme/Série

Edite o arquivo `data/movies.json` e adicione um novo objeto:

```json
{
    "title": "Seu Filme",
    "type": "Série",  // ou "Filme"
    "year": "2024",
    "summary": "Descrição do filme aqui...",
    "poster": "https://url-da-imagem.jpg"
}
```

**Dicas:**
- O `title` será exibido como nome do conteúdo
- Use URLs de imagens públicas (TMDB, IMDb, etc)
- O `summary` aparecerá no hero e no modal
- O `type` deve ser "Série" ou "Filme" (maiúscula importante)

## 🎓 Conceitos Ensinados

### HTML Semântico
- Uso de `<header>`, `<main>`, `<section>` para estrutura clara
- Atributos `data-*` para armazenar dados nos elementos
- ARIA labels para acessibilidade

### CSS Moderno
- **Grid Layout** para grid de filmes
- **Flexbox** para navegação e botões
- **Gradientes** para efeitos visuais
- **Transitions** para animações suaves
- **Media Queries** para responsividade

### JavaScript
- **Async/Await** para requisições HTTP
- **DOM API** para manipulação de elementos
- **Event Listeners** para interatividade
- **Array Methods** (map, filter, forEach)
- **LocalStorage** para dados persistentes
- **Try/Catch** para tratamento de erros

## 🔗 APIs Utilizadas

### TheMovieDB (TMDB)
As imagens dos posters vêm de:
```
https://image.tmdb.org/t/p/w500/{poster_path}
```

### Wikipedia API
Para buscar informações adicionais:
```
https://pt.wikipedia.org/api/rest_v1/page/summary/{title}
```

## 📱 Responsividade

O projeto é completamente responsivo:

| Tamanho | Breakpoint | Adjustments |
|---------|-----------|-------------|
| Desktop | > 768px   | Grid normal, hero 500px |
| Tablet  | 481-768px | Grid ajustado, hero 350px |
| Mobile  | < 480px   | Grid mínimo, hero 300px |

## 🛠️ Melhorias Futuras (Ideias)

- [ ] Adicionar modal para adicionar filme dinamicamente
- [ ] Buscar posters automaticamente via TMDB API
- [ ] Sistema de favoritos com LocalStorage
- [ ] Barra de busca para filtrar filmes
- [ ] Animações de transição mais complexas
- [ ] Modo escuro/claro (toggle)
- [ ] Paginação para mais filmes

## 📝 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## 💬 Dúvidas?

Se tiver dúvidas sobre como o código funciona:
1. Leia os comentários em `js/app.js` - está muito bem explicado!
2. Abra o Console do Navegador (F12) para ver os logs
3. Use o DevTools para inspecionar elementos
4. Consulte a documentação: [MDN Web Docs](https://developer.mozilla.org/)

## 👨‍🏫 Professores e Referências

Este projeto foi baseado em **aulas e metodologias educacionais** do professor:

### **Felipe Aguiar**
- 🎓 Coordenador de Education & Talent Success, Digital Innovation On
- 📱 GitHub: [@felipeAguiarCode](https://github.com/felipeAguiarCode)

**Conceitos ensinados nas aulas:**
- Como estruturar um layout responsivo
- Técnicas de CSS3 com containers e variáveis
- Posicionar elementos com Flexbox (e Grid)
- Integração de plugins jQuery na aplicação
- Boas práticas em desenvolvimento web

### Recursos Utilizados
- 🎠 [Owl Carousel](https://owlcarousel2.github.io/) - Para carrosséis
- 🎬 [The Movie Database (TMDB)](https://www.themoviedb.org/) - Imagens e dados dos filmes
- 📚 [Wikipedia API](https://www.wikipedia.org/) - Informações adicionais

## 👨‍💻 Autor

**Autor:** Otavio Augusto

**Contato:** otavioaugust@gmail.com

**Versão:** 0.1.1 (Março/2026)

---

Projeto desenvolvido como exercício de aprendizado em desenvolvimento web com base nas aulas do Professor Felipe Aguiar.

---

**Aproveite o aprendizado! 🚀**
