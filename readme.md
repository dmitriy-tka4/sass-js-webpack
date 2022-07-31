# Сборка SASS и JS с помощью Webpack

## SCSS
Каждый отдельный SASS-файл (блок в терминологии BEM) должен быть расположен в папке `source/scss/blocks`, сам импортируемый файл должен называться `_footer.scss`.

При добавлении нового файла сделать импорт в файле `index.scss`.
В файле `_main.scss` можно импортить любые библиотеки, необходимые для проекта. Например, уже добавлен `minireset`.

Все переменные проекта собраны в одном файле - `_variables.scss`.

## JS
JavaScript билдится из модулей в один файл `dist/bundle.js`.

## TODO

Добавить UglifyJS (как npm скрипт, или как плагин https://www.npmjs.com/package/uglifyjs-webpack-plugin)

## Help
Писать на почту - dmitriy.tka4@gmail.com.
