# resume
    Шаблон резюме. Предоставляет возможность создать резюме по данному шаблону, заполнив его своим контентом.
    
Шаблон полностью адаптивен. Верстка выглядит качественно на 
экранах с разрешениями от 320px до 1920px. Верстка ориентирована на последние 
версии Chrome и Firefox.

Для ознакомления страница выложена на 
[GitHub Pages](https://lndbaryshnikov.github.io/resume/).

Развертывание 
-------------
```js
$ git clone https://github.com/lndbaryshnikov/resume.git
$ cd resume
$ npm install
$ npm run build
```

Сервер для разработки
-------------
```js
$ npm run server
```

Линтинг кода
-------------
```js
$ npm run lint
```

Развертывание на GitHub Pages
-------------
```js
$ npm run deploy
```

Для сборки проекта использовался модульный сборщик Webpack.
Также использованы следующие препроцессоры:
* [Pug](https://github.com/pugjs/pug) для HTML
* [SCSS](https://github.com/sass/sass) для CSS

Все вышеперечисленные пакеты устанавливаются с помощью менеджера 
пакетов npm командой `npm install`. Все пакеты, использованные 
в данном проекте и их версии указаны в `package.json`.
