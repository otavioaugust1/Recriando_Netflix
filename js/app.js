// ==========================================
// NETFLIX CLONE - Script Educativo
// ==========================================
// Este script gerencia o carregamento de filmes/séries
// e as interações da página (cliques, filtros, modals)
// ==========================================

// ===== ESTADO DA APLICAÇÃO =====
// Armazenamos aqui os dados principais do app
const app = {
    // Array para armazenar todos os filmes/séries
    allMovies: [],
    
    // Filme/série atualmente em destaque (seção hero)
    featuredMovie: null,
    
    // Array filtrado (para exibir Séries, Filmes ou Tudo)
    filteredMovies: []
};

// ===== FUNÇÃO: Carregar filmes do arquivo JSON =====
// Esta função busca os dados dos filmes no arquivo data/movies.json
async function loadMovies() {
    try {
        const response = await fetch('data/movies.json');
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.error('Erro ao carregar filmes:', error);
        return [];
    }
}

// ===== FUNÇÃO: Buscar informações no Wikipedia =====
// Complementa os dados do filme com informações do Wikipedia (resumo melhorado)
async function fetchFromWikipedia(movieTitle) {
    try {
        const encoded = encodeURIComponent(movieTitle);
        const response = await fetch(
            `https://pt.wikipedia.org/api/rest_v1/page/summary/${encoded}`
        );
        
        if (!response.ok) return null;
        
        const data = await response.json();
        return data.extract; // Retorna o resumo da página
    } catch (error) {
        console.log(`Wikipedia: ${movieTitle} não encontrado`);
        return null;
    }
}

// ===== FUNÇÃO: Exibir filme em destaque (seção hero) =====
// Atualiza a seção principal com informações d filme selecionado
function setHeroMovie(movie) {
    app.featuredMovie = movie;
    
    // Atualiza título e resumo
    document.getElementById('hero-title').textContent = movie.title;
    document.getElementById('hero-summary').textContent = movie.summary;
    
    // Atualiza imagem de fundo da seção hero
    const heroSection = document.getElementById('hero');
    const gradientOverlay = 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))';
    heroSection.style.backgroundImage = 
        `${gradientOverlay}, url('${movie.poster}')`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
}

// ===== FUNÇÃO: Renderizar grid de filmes =====
// Cria os cards dos filmes/séries para exibir na página
function renderMoviesGrid(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = ''; // Limpa conteúdo anterior
    
    // Para cada filme no array, criar um elemento card
    movies.forEach(movie => {
        // Criar elemento div para o card
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="card-image">
            <div class="card-title">${movie.title}</div>
        `;
        
        // Quando clicar no card, exibir esse filme em destaque
        card.addEventListener('click', () => {
            setHeroMovie(movie);
        });
        
        // Adicionar card ao container
        container.appendChild(card);
    });
}

// ===== FUNÇÃO: Filtrar filmes por tipo =====
// Filtra o array para mostrar apenas um tipo (Séries, Filmes, Tudo)
function filterMovies(type) {
    if (type === 'all') {
        // Mostrar todos os filmes
        app.filteredMovies = [...app.allMovies];
    } else {
        // Filtrar apenas filmes/séries do tipo selecionado
        app.filteredMovies = app.allMovies.filter(
            movie => movie.type.toLowerCase() === type.toLowerCase()
        );
    }
    
    // Renderizar os filmes filtrados
    renderMoviesGrid(app.filteredMovies);
    
    // Se houver filmes filtrados, exibir o primeiro em destaque
    if (app.filteredMovies.length > 0) {
        setHeroMovie(app.filteredMovies[0]);
    }
}

// ===== FUNÇÃO: Abrir modal com detalhes =====
// Abre a janela modal mostrando detalhes completos do filme
function openDetailsModal(movie) {
    const modal = document.getElementById('details-modal');
    
    // Preencher informações do modal
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-summary').textContent = movie.summary;
    document.getElementById('modal-details').textContent = 
        `${movie.type} • ${movie.year}`;
    
    // Mostrar modal
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
}

// ===== FUNÇÃO: Fechar modal =====
// Fecha a janela modal de detalhes
function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('show');
}

// ===== EVENTOS: Botões de navegação (Início, Séries, Filmes, Adicionar) =====
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const filterType = event.target.getAttribute('data-filter');
        
        // Se for adicionar, abrir modal de adição (futura funcionalidade)
        if (filterType === 'add') {
            alert('Adicionar novos filmes: funcionalidade em desenvolvimento!\n\nPor enquanto, edite o arquivo data/movies.json para adicionar novos títulos.');
        } else {
            // Caso contrário, filtrar por tipo
            filterMovies(filterType);
        }
    });
});

// ===== EVENTOS: Botões do hero (Assistir, Mais Informações) =====
document.getElementById('play-btn').addEventListener('click', () => {
    alert(`Reproduzindo: ${app.featuredMovie.title}\n\n(Funcionalidade de reprodução não implementada)`);
});

document.getElementById('info-btn').addEventListener('click', async () => {
    const movie = app.featuredMovie;
    if (!movie) return;
    
    // Tentar buscar informações melhoradas do Wikipedia
    const wikipediaSummary = await fetchFromWikipedia(movie.title);
    
    // Se encontrar no Wikipedia, usar; senão, usar resumo padrão
    const finalSummary = wikipediaSummary || movie.summary;
    
    // Exibir modal com as informações
    document.getElementById('modal-summary').textContent = finalSummary;
    openDetailsModal(movie);
});

// ===== EVENTO: Fechar modal =====
document.getElementById('close-modal-btn').addEventListener('click', closeDetailsModal);

// Fechar modal ao clicar no fundo escuro
document.getElementById('details-modal').addEventListener('click', (event) => {
    // Só fechar se clicar especificamente no fundo, não no card
    if (event.target.id === 'details-modal') {
        closeDetailsModal();
    }
});

// ===== INICIALIZAÇÃO: Carregar dados quando a página abre =====
// Esta função é executada quando o JavaScript é carregado
async function initApp() {
    console.log('Inicializando Netflix Clone...');
    
    // 1. Carregar filmes do JSON
    app.allMovies = await loadMovies();
    console.log(`${app.allMovies.length} filmes carregados`);
    
    // 2. Se houver filmes, inicializar a página
    if (app.allMovies.length > 0) {
        // Mostrar todos os filmes
        filterMovies('all');
        
        // Exibir o primeiro filme em destaque
        setHeroMovie(app.allMovies[0]);
        
        console.log('Página inicializada com sucesso!');
    } else {
        console.warn('Nenhum filme foi carregado!');
    }
}

// ===== EXECUTAR: Iniciar aplicação quando página carregar completamente =====
// Aguardar que o DOM esteja pronto antes de executar
document.addEventListener('DOMContentLoaded', initApp);
