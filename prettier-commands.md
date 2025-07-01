# 🎨 Comandos de Prettier

## 📋 Comandos principales

### Formatear todos los archivos

```bash
npm run format
# o
npx prettier --write .
```

### Verificar formato sin cambiar archivos

```bash
npm run format:check
# o
npx prettier --check .
```

### Formatear archivos específicos

```bash
# Un archivo específico
npx prettier --write src/App.tsx

# Múltiples archivos
npx prettier --write src/**/*.tsx src/**/*.ts

# Solo archivos TypeScript/React
npx prettier --write "src/**/*.{ts,tsx}"

# Solo archivos JavaScript
npx prettier --write "src/**/*.{js,jsx}"
```

### Formatear con configuración específica

```bash
# Usar configuración específica
npx prettier --write . --config .prettierrc

# Formatear con configuración inline
npx prettier --write . --single-quote --trailing-comma es5
```

## 🔧 Comandos avanzados

### Formatear y verificar diferencias

```bash
# Ver qué archivos necesitan formateo
npx prettier --check . --list-different

# Formatear y mostrar diferencias
npx prettier --write . --list-different
```

### Formatear desde stdin

```bash
# Formatear código desde la terminal
echo "const x={a:1,b:2}" | npx prettier --stdin-filepath example.js
```

### Formatear con ignore

```bash
# Usar archivo .prettierignore personalizado
npx prettier --write . --ignore-path .prettierignore
```

## 🎯 Comandos de VS Code/Cursor

### Atajos de teclado

- **Shift + Alt + F**: Formatear documento
- **Ctrl + Shift + P** → "Format Document": Formatear documento
- **Ctrl + Shift + P** → "Format Document With...": Elegir formateador

### Configuración automática

- **Formateo al guardar**: Activado en `.vscode/settings.json`
- **Formateo al pegar**: Activado en `.vscode/settings.json`
- **Formateador por defecto**: Prettier configurado

## 📁 Archivos de configuración

### `.prettierrc` (configuración principal)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "jsxSingleQuote": true,
  "quoteProps": "as-needed"
}
```

### `.prettierignore` (archivos a ignorar)

```
node_modules/
dist/
build/
*.min.js
*.min.css
```

## 🚀 Integración con Git

### Pre-commit hook (opcional)

```bash
# Instalar husky para hooks de git
npm install --save-dev husky lint-staged

# Configurar pre-commit
npx husky add .husky/pre-commit "npx lint-staged"

# Configurar lint-staged en package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,md}": [
      "prettier --write"
    ]
  }
}
```

## 🔍 Troubleshooting

### Problemas comunes

```bash
# Si Prettier no encuentra archivos
npx prettier --write "src/**/*.{ts,tsx,js,jsx}"

# Si hay conflictos con ESLint
npm install --save-dev eslint-config-prettier

# Verificar configuración
npx prettier --config-precedence prefer-file --check .
```

### Verificar versión

```bash
npx prettier --version
```

## 📚 Recursos adicionales

- **Documentación oficial**: https://prettier.io/docs/en/
- **Playground online**: https://prettier.io/playground/
- **Configuración recomendada**: https://prettier.io/docs/en/configuration.html
