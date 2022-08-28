import el from './element.mjs'

const ul = el('div', { id: 'v-dom' }, [ el('p', {}, ['VDom model']), 
    el('ul', { class: 'list' }, 
        [ 
            el('li', { class: 'item' }, ['item-1']),
            el('li', { class: 'item' }, ['item-2']),
            el('li', { class: 'item' }, ['item-3']),
        ]
    ),
    el('div', { id: 'say-hello' }, ['Hello vdom'])
]);
console.log(ul);

const ulRoot = ul.render();
document.body.appendChild(ulRoot);