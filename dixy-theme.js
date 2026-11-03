// Тема Дикси для примерки на текущем Технолинке. Vuetify 3.13.7.
// Значения — из UI Kit (app/src/plugins/vuetify.js), с двумя отличиями:
// 1. Свои имена Технолинка (accent, accent-light, primary-light, primary-dark) ведут на наши цвета —
//    код экранов не трогаем, меняется только тема.
// 2. surface в Технолинке — фон страницы, поэтому здесь он серый, а не белый, как в UI Kit.

// Цвета без прозрачности — в colors (Vuetify отбрасывает alpha).
// Полупрозрачные токены — строками в variables, они попадают в CSS как есть.
export const dixyTheme = {
  dark: false,
  colors: {
    background: '#f2f3f5', // surface/bg-secondary — фон страницы
    surface: '#f2f3f5', // в Технолинке — фон страницы (было #e8e5eb)
    'surface-bright': '#ffffff', // surface/bg-primary — белая карточка, меню
    'surface-light': '#f8f9fa', // surface/bg-tertiary
    'surface-variant': '#202023', // neutral/1300 — тёмная плашка, активный пункт меню
    'on-surface-variant': '#ffffff',
    'on-background': '#020202',
    'on-surface': '#020202', // text/primary

    primary: '#7300ff', // accent/primary — фиолетовый (было #8445d1)
    'on-primary': '#ffffff',
    secondary: '#f2830c', // accent/secondary — оранжевый, только заливки
    'on-secondary': '#020202',
    black: '#202023', // чёрные кнопки
    'on-black': '#ffffff',

    success: '#00801a', // status/positive
    warning: '#a75a08', // status/attention
    error: '#d6002b', // status/negative
    info: '#155aff', // status/info
    'on-error': '#ffffff',

    'success-soft': '#e8ffed',
    'warning-soft': '#fef4e9',
    'error-soft': '#ffe8ed',
    'info-soft': '#e8efff',

    'text-secondary': '#646871',
    'text-tertiary': '#878b95',
    attention: '#ff0033', // accent/attention — крупные цифры «На доработку»

    'deco-purple': '#8a2aff',
    'deco-purple-soft': '#f2e8ff',
    'deco-teal': '#007b76',
    'deco-teal-soft': '#e8fffe',
    'deco-pink': '#d00072',
    'deco-pink-soft': '#ffe8f5',

    // Имена Технолинка → наши цвета
    accent: '#f2830c', // = secondary (было #f07601)
    'on-accent': '#020202', // как on-secondary: белый на оранжевом не читается
    'accent-light': '#fef4e9', // светлая оранжевая подложка (было #fff3e6)
    'primary-light': '#f2e8ff', // светлая фиолетовая подложка (было #eaddff)
    'primary-dark': '#020202', // текст в кнопках — наш text/primary (было #21005d)
  },
  variables: {
    'border-color': '#020202',
    'border-opacity': 0.08, // neutral/300 ≈ 8% чёрного
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 0.6, // ≈ text/secondary
    'disabled-opacity': 0.3, // ≈ text/quaternary
    'hover-opacity': 0.06,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    // полупрозрачные (CSS-переменные --v-fill и т.д.)
    fill: 'rgba(31, 40, 57, 0.08)', // neutral-translucent/100 — серые кнопки, поиск
    divider: 'rgba(11, 11, 12, 0.086)', // neutral-translucent/300
    overlay: 'rgba(2, 2, 2, 0.6)', // overlay/default
  },
}

// Уход от Material: без ряби, без теней, без капса. Только вид, поведение компонентов не меняем.
export const dixyDefaults = {
  global: { ripple: false },
  VBtn: { variant: 'flat', rounded: 'pill', class: 'text-none' },
  VCard: { elevation: 0 }, // скругление 24 из $card-border-radius
  VSheet: { elevation: 0 },
  VTextField: { variant: 'outlined', density: 'comfortable', color: 'primary' }, // 48; скругление 16 из $field-border-radius
  VTextarea: { variant: 'outlined', color: 'primary' },
  VSelect: { variant: 'outlined', density: 'comfortable', color: 'primary' },
  VAutocomplete: { variant: 'outlined', density: 'comfortable', color: 'primary' },
  VCheckbox: { color: 'primary', density: 'comfortable', hideDetails: 'auto' },
  VRadioGroup: { color: 'primary', density: 'comfortable', hideDetails: 'auto' },
  VSwitch: { color: 'primary', inset: true, density: 'comfortable', hideDetails: 'auto' },
  VChip: { rounded: 'pill', variant: 'flat' },
  VTabs: { color: 'on-surface', density: 'comfortable' },
  VBtnToggle: { rounded: 'pill', variant: 'flat' },
  VList: { bgColor: 'transparent' },
  VListItem: { rounded: true },
  VAppBar: { elevation: 0, height: 72 },
  VNavigationDrawer: { elevation: 0 },
  VMenu: { VList: { bgColor: 'surface-bright' } }, // меню белое поверх серого фона
  VDialog: { VCard: { rounded: 'xl' } }, // xl = 32
  VAlert: { variant: 'tonal', rounded: true },
  VSnackbar: { rounded: true, color: 'surface-variant' },
  VDataTable: { hover: true },
  VDatePicker: { hideHeader: true, color: 'primary', elevation: 0, rounded: 'lg', width: 368 }, // при 328 сетка дней не влезает
}
