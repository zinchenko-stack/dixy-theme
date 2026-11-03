# примерка новой темы на Технолинке

тут два файла: `dixy-theme.js` (цвета + дефолты компонентов, кнопки таблетки без капса, поля с обводкой, без теней) и `settings.scss` (шрифт, скругления, отступы, типографика, размеры)

## как подключить

1. тему и дефолты в createVuetify вместо ваших (если тема у вас называется не light, поменяйте имя)

   ```js
   import { dixyTheme, dixyDefaults } from './dixy-theme'

   createVuetify({
     theme: { defaultTheme: 'light', themes: { light: dixyTheme } },
     defaults: dixyDefaults,
     // остальное как было
   })
   ```

2. scss через vite-plugin-vuetify, иначе шрифт, скругления и размеры не подтянутся. если configFile у вас уже есть, просто перенесите туда переменные

   ```js
   vuetify({ styles: { configFile: 'src/styles/settings.scss' } })
   ```

3. шрифт Moderustic 400/500/600

   ```html
   <link href="https://fonts.googleapis.com/css2?family=Moderustic:wght@400;500;600&display=swap" rel="stylesheet">
   ```

## цвета

ваши имена оставил, поменял только значения, чтобы в коде экранов ничего не трогать

- primary #8445D1 → #7300FF
- primary-light #EADDFF → #F2E8FF
- accent #F07601 → #F2830C
- accent-light #FFF3E6 → #FEF4E9
- surface #E8E5EB → #F2F3F5 (у вас это фон страницы, поставил наш серый)
- primary-dark оставил как есть, у нас такого нет, надо глянуть где он используется
