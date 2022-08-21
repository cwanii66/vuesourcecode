function Vue(options) {}
const inBrowser = typeof window !== undefined;
// warning logger
function warn(warningMsg) {
    // ...
    console.warn(warningMsg);
}

// Query an element selector if it's not an element already.
function query(el) {
    if (typeof el === 'string') {
        let selected = document.querySelector(el);
        if (!selected) {
            process.env.NODE_ENV !== 'production' && warn(
                'Cannnot find element ' + el
            );
            return document.createElement('div');
        }
        return selected;
    } else {
        return el;
    }
}
Vue.prototype.$mount = function(el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    const options = vm.$options;

    if (!options.render) {
        const template = options.template;
        if (template) {
            // ...
        } else {
            // without template option
            // ...
        }

    // compilation related ...
    }

    // compile template to render function
    const updateComponent = () => vm._update(vm._render(), hydrating);
    new Watcher(vm, updateComponent, function() {}, { /** options */ }, true);

}
class Watcher {
    constructor(
        vm, 
        expOrFn, 
        cb, 
        options, 
        isRenderWatcher
    ) {
    }
}