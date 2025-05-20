# 🥂 Cocktail App

Nuxt 3-приложение для поиска коктейлей по API [TheCocktailDB](https://www.thecocktaildb.com/).

---

## 🚀 Стек технологий

- [Nuxt 3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) — управление состоянием
- [Vuetify 3](https://vuetifyjs.com/) — UI-компоненты
- [Vitest](https://vitest.dev/) — тестирование
- ESLint + Prettier — линтинг и автоформатирование

---

## 📦 Установка

```bash
git clone https://github.com/ТВОЙ_ЮЗЕРНЕЙМ/cocktail-app.git
cd cocktail-app
npm install
```

## ⚙️ Переменные окружения
Для корректной работы приложения — даже в локальной среде — необходимо создать файл .env на основе шаблона:
```bash
cp .env.example .env
```
```dotenv
NUXT_PUBLIC_API_BASE_COCKTAIL=https://www.thecocktaildb.com/api/json/v1
NUXT_PUBLIC_API_BASE_COCKTAIL_VERSION=1
```
☝️ Эти переменные требуются для обращения к внешнему API TheCocktailDB (в реальном проекте если были бы секуреты, конечно их тут не было бы)

## 🧪 Скрипты

| Команда            | Назначение                      |
|--------------------|---------------------------------|
| `npm run dev`      | Запустить dev-сервер            |
| `npm run build`    | Сборка проекта                  |
| `npm run lint`     | Линтинг кода (ESLint)           |
| `npm run test`     | Запуск unit-тестов (Vitest)     |
| `npm run format`   | Форматирование Prettier         |

## 🌍 Деплой на Vercel 
ссылка - https://cocktail-app-eight-rosy.vercel.app/margarita
