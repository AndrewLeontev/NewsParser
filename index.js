'use strict'
const data = require('./lib/data');
const fs = require('fs');

// ссылки на сайт
const sites = [    'https://3dnews.ru/news/main',
                   'https://3dnews.ru/software-news',
                   'https://3dnews.ru/news'
               ];
// Параметр к которому привязывается поиск 
// т.е. класс или ID блока в котором лежат все новости
const findParam = '#section-content'; 
// releated - классы и селекторы ведущие к заголовку новости
// links - класс ссылки
const selectors = {
    'releated': ['.article-entry .entry-header h1'],
    'links': ['.entry-header@href']
}


data(sites, findParam, selectors, 'https://3dnews.ru');