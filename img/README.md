# 📸 Imagens do Projeto Netflix Clone

## Referência de Imagens

Este diretório contém os posters das séries e filmes do projeto.

### Mapeamento de Imagens

| Arquivo | Título | Tipo |
|---------|--------|------|
| `encanto.jpg` | Encanto | Filme |
| `vikings-valhalla.jpg` | Vikings: Valhalla | Série |
| `halo.jpg` | Halo | Série |
| `cavaleiro-da-lua.jpg` | Cavaleiro da Lua | Série |
| `lucifer.jpg` | Lucifer | Série |
| `os-simpsons.jpg` | Os Simpsons | Série |
| `homens-de-terno.jpg` | Homens de Terno | Filme |
| `projeto-adam.jpg` | O Projeto Adam | Filme |
| `paixao-de-cristo.jpg` | A Paixão de Cristo | Filme |
| `shang-chi.jpg` | Shang-Chi | Filme |
| `matrix.jpg` | The Matrix | Filme |

## Como Usar no HTML

As imagens são referenciadas no arquivo `data/movies.json`:

```json
{
    "title": "Encanto",
    "type": "Filme",
    "year": "2021",
    "summary": "Uma garota numa família com magia extraordinária...",
    "poster": "img/encanto.jpg"
}
```

No HTML, são carregadas dynamicamente via JavaScript:

```html
<img src="img/encanto.jpg" alt="Encanto" class="card-image">
```

## Adicionar Novas Imagens

1. **Coloque a imagem nesta pasta** com um nome descritivo (ex: `novo-filme.jpg`)
2. **Adicione ao `data/movies.json`**:
   ```json
   {
       "title": "Novo Filme",
       "type": "Filme",
       "year": "2024",
       "summary": "Descrição...",
       "poster": "img/novo-filme.jpg"
   }
   ```
3. **Recarregue a página** no navegador

## Convenções de Nomenclatura

- Use **kebab-case** (hífens, tudo minúsculo)
  - ✅ `cavaleiro-da-lua.jpg`
  - ❌ `CavaleirooDaLua.jpg`
  - ❌ `cavaleiro_da_lua.jpg`

- Use nomes **descritivos** e em **português**
  - ✅ `vikings-valhalla.jpg`
  - ❌ `img1.jpg`

- Format: **JPG** ou **PNG**
  - Recomendado: JPG (menor tamanho)

## Dicas para Melhor Performance

- Mantenha imagens em **tamanho razoável** (max 200KB cada)
- Use **formato JPG** para fotos (melhor compressão)
- Use **PNG** apenas se precisar de transparência
- Considere usar webp para melhor compressão (navegadores modernos)
