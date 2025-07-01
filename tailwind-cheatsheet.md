# 🎨 Tailwind CSS - Hoja de Referencia Rápida

## 📱 Layout & Spacing

```css
/* Flexbox */
flex, flex-row, flex-col, flex-wrap, flex-nowrap
justify-start, justify-center, justify-end, justify-between, justify-around
items-start, items-center, items-end, items-stretch
self-start, self-center, self-end

/* Grid */
grid, grid-cols-1, grid-cols-2, grid-cols-3, grid-cols-4, grid-cols-6, grid-cols-12
gap-1, gap-2, gap-4, gap-6, gap-8, gap-12, gap-16

/* Spacing */
p-1, p-2, p-4, p-6, p-8, p-12, p-16, p-20, p-24
px-1, px-2, px-4, px-6, px-8, px-12, px-16
py-1, py-2, py-4, py-6, py-8, py-12, py-16
m-1, m-2, m-4, m-6, m-8, m-12, m-16, m-20, m-24
mx-auto (centrar horizontalmente)
my-auto (centrar verticalmente)

/* Width & Height */
w-full, w-screen, w-1/2, w-1/3, w-1/4, w-1/6, w-12, w-16, w-20, w-24, w-32, w-40, w-48, w-56, w-64
h-full, h-screen, h-12, h-16, h-20, h-24, h-32, h-40, h-48, h-56, h-64
min-h-screen, min-h-full
max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl, max-w-2xl, max-w-3xl, max-w-4xl, max-w-5xl, max-w-6xl, max-w-7xl
```

## 🎨 Colors & Backgrounds

```css
/* Text Colors */
text-black, text-white, text-gray-50, text-gray-100, text-gray-200, text-gray-300, text-gray-400, text-gray-500, text-gray-600, text-gray-700, text-gray-800, text-gray-900
text-red-500, text-blue-500, text-green-500, text-yellow-500, text-purple-500, text-pink-500, text-indigo-500, text-emerald-500

/* Background Colors */
bg-black, bg-white, bg-gray-50, bg-gray-100, bg-gray-200, bg-gray-300, bg-gray-400, bg-gray-500, bg-gray-600, bg-gray-700, bg-gray-800, bg-gray-900
bg-red-500, bg-blue-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-pink-500, bg-indigo-500, bg-emerald-500
bg-transparent, bg-current

/* Gradients */
bg-gradient-to-r, bg-gradient-to-l, bg-gradient-to-t, bg-gradient-to-b, bg-gradient-to-tr, bg-gradient-to-tl, bg-gradient-to-br, bg-gradient-to-bl
from-red-500, to-blue-500, via-purple-500
```

## 📝 Typography

```css
/* Font Size */
text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl, text-7xl, text-8xl, text-9xl

/* Font Weight */
font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black

/* Text Alignment */
text-left, text-center, text-right, text-justify

/* Text Decoration */
underline, no-underline, line-through
decoration-solid, decoration-double, decoration-dotted, decoration-dashed, decoration-wavy

/* Line Height */
leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, leading-loose
leading-3, leading-4, leading-5, leading-6, leading-7, leading-8, leading-9, leading-10
```

## 🔲 Borders & Shadows

```css
/* Borders */
border, border-0, border-2, border-4, border-8
border-t, border-r, border-b, border-l
border-gray-200, border-gray-300, border-gray-400, border-gray-500
border-transparent, border-current

/* Border Radius */
rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl
rounded-t, rounded-r, rounded-b, rounded-l
rounded-tl, rounded-tr, rounded-bl, rounded-br

/* Shadows */
shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl
shadow-inner, shadow-none
```

## 🎯 Position & Display

```css
/* Position */
relative, absolute, fixed, sticky, static
top-0, right-0, bottom-0, left-0
inset-0, inset-x-0, inset-y-0

/* Display */
block, inline-block, inline, flex, inline-flex, grid, inline-grid, contents, hidden

/* Z-Index */
z-0, z-10, z-20, z-30, z-40, z-50, z-auto
```

## 🎭 Effects & Transitions

```css
/* Opacity */
opacity-0, opacity-25, opacity-50, opacity-75, opacity-100

/* Transform */
scale-0, scale-50, scale-75, scale-90, scale-95, scale-100, scale-105, scale-110, scale-125, scale-150
rotate-0, rotate-1, rotate-2, rotate-3, rotate-6, rotate-12, rotate-45, rotate-90, rotate-180
translate-x-0, translate-x-1, translate-x-2, translate-x-4, translate-x-8, translate-x-12, translate-x-16, translate-x-20, translate-x-24, translate-x-32, translate-x-40, translate-x-48, translate-x-56, translate-x-64
translate-y-0, translate-y-1, translate-y-2, translate-y-4, translate-y-8, translate-y-12, translate-y-16, translate-y-20, translate-y-24, translate-y-32, translate-y-40, translate-y-48, translate-y-56, translate-y-64

/* Transitions */
transition, transition-all, transition-colors, transition-opacity, transition-shadow, transition-transform
duration-75, duration-100, duration-150, duration-200, duration-300, duration-500, duration-700, duration-1000
ease-linear, ease-in, ease-out, ease-in-out

/* Hover, Focus, Active States */
hover:bg-blue-500, hover:text-white, hover:scale-105
focus:ring-2, focus:ring-blue-500, focus:outline-none
active:scale-95
```

## 📱 Responsive Design

```css
/* Breakpoints */
sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+), 2xl: (1536px+)

/* Examples */
sm:flex, md:grid-cols-2, lg:grid-cols-3, xl:grid-cols-4
sm:text-sm, md:text-base, lg:text-lg, xl:text-xl
sm:p-4, md:p-6, lg:p-8, xl:p-12
```

## 🎨 Dark Mode

```css
/* Dark mode classes */
dark:bg-gray-900, dark:text-white, dark:border-gray-700
dark:hover:bg-gray-800, dark:focus:ring-gray-600
```

## 🔧 Utilities

```css
/* Cursor */
cursor-auto, cursor-default, cursor-pointer, cursor-wait, cursor-text, cursor-move, cursor-not-allowed

/* Overflow */
overflow-auto, overflow-hidden, overflow-visible, overflow-scroll
overflow-x-auto, overflow-y-auto

/* Object Fit */
object-contain, object-cover, object-fill, object-none, object-scale-down

/* Aspect Ratio */
aspect-square, aspect-video, aspect-[4/3], aspect-[16/9]
```

---

## 🌐 Recursos útiles:

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Tailwind CSS Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet
- **Tailwind CSS Components**: https://tailwindui.com/
- **Tailwind CSS Play**: https://play.tailwindcss.com/

## 💡 Tips:

1. **Instala la extensión de VS Code**: `bradlc.vscode-tailwindcss`
2. **Usa el playground**: https://play.tailwindcss.com/ para experimentar
3. **Consulta la documentación**: Siempre actualizada en tailwindcss.com
4. **Usa @apply**: Para extraer clases complejas a CSS personalizado
