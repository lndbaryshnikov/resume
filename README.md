# resume
    Шаблон резюме. Адаптивная веб-страница.
    
Страница полностью адаптивная. Верстка выглядит качественно на 
экранах с диагоналями от 5 (смартфоны) до 16 (ноутбуки) дюймов 
и более. Верстка ориентирована на последние версии Chrome и 
Firefox.

Для ознакомления страница выложена на 
[GitHub Pages](https://lndbaryshnikov.github.io/resume/).

Развертывание 
-------------
```js
$ git clone https://github.com/lndbaryshnikov/resume.git
$ npm install
$ npm run build
```

Разработка
-------------
```js
$ npm run dev
```

Сервер для разработки
-------------
```js
$ npm run server
```

Режим watch для разработки
-------------
```js
$ npm run watch
```

Линтинг кода
-------------
```js
$ npm run lint
```

Для сборки проекта использовался модульный сборщик Webpack.
Также использованы следующие препроцессоры:
* [Pug](https://github.com/pugjs/pug) для HTML
* [SCSS](https://github.com/sass/sass) для CSS

Все вышеперечисленные пакеты устанавливаются с помощью менеджера 
пакетов npm командой `npm install`. Все пакеты, использованные 
в данном проекте и их версии указаны в `package.json`.
