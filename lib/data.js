'use strict';
const osmosis = require('osmosis');
const fs = require('fs');
const head = require('./head');
const end = require('./end');

const data = (sites, find, selectors, urlsite) => {
    const gettedlinks = [];
    urlsite = urlsite === undefined ? "" : urlsite;

    gettedlinks.push(head());
    sites.forEach(link => {
        osmosis
            .get(link)
            .find(find)
            .set({
                'related': [selectors.releated[0]],
                'links': selectors.links
            })
            .data(data => {
                for(let i = 0; i < data.related.length; i++) {
                    let format = `                        `;
                    format += `<h3 class="d-flex p-2"> `;
                    format += `<a target="_blank" `;
                    format += `style="color:black" `;
                    format += `href="${urlsite}${data.links[i]}">`;
                    format += `${data.related[i]}</a></h3>\n`;
                    gettedlinks.push(format);
                }
            })
            .done(() => {
                fs.writeFile('./out/index.html',
                    gettedlinks.join("") + end(),
                    'utf8', 
                    (err) => {
                    if(err) console.error(err);
                    else console.log('Data Saved to index.html file');
                })
            })
    });
}

module.exports = data;