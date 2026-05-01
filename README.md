# DavidEspinozaRomero.github.io

Sitio personal construido con [Astro](https://astro.build/), desplegado automaticamente a `gh-pages` mediante GitHub Actions.

## Requisitos

- `fnm` instalado
- Node.js `24.x` (el proyecto ya incluye `.node-version` con `24`)
- npm

## Desarrollo local

```bash
fnm use
npm install
npm run dev
```

## Despliegue a GitHub Pages (`gh-pages`)

Este repositorio incluye el workflow `/.github/workflows/deploy-gh-pages.yml`.

Flujo de despliegue:

1. Haces push a la rama `main`.
2. GitHub Actions ejecuta:
   - `npm ci`
   - `npm run build`
3. El contenido de `dist/` se publica en la rama `gh-pages`.

## Configuracion en GitHub

En el repositorio, verifica en **Settings > Pages**:

- **Source**: `Deploy from a branch`
- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

## Comandos utiles

| Comando | Descripcion |
| :-- | :-- |
| `fnm use` | Usa la version de Node definida en `.node-version` |
| `npm run dev` | Levanta servidor local en `localhost:4321` |
| `npm run build` | Genera build de produccion en `dist/` |
| `npm run preview` | Previsualiza localmente la build |
