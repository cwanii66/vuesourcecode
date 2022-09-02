class Vue {}

// Vue: GlobalAPI
function initMixin(Vue) {
    Vue.mixin = function(mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    }
}
function resovleConstructorOptions(Ctor) {
    let options = Ctor.options;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
 function mergeOptions(parent, child, vm) {
    if (process.env.NODE_ENV !== 'production') {
        checkComponents(child);
    }
    if (isFunction(child)) {
        // @ts-expect-error
        child = child.options;
    }
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }
    }
    var options = {};
    var key;
    for (key in parent) {
        mergeField(key);
    }
    for (key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}

// 根据不同策略合并, 比如说mergeHooks mergeAssets ...
function mergeField(key) {
    const strategy = strategies[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
}



// hooks and props are merged as arrays
function mergeLifecycleHook(parent, child) {
    const res = child
        ? parent
            ? parent.concat(child)
            : Array.isArray(child)
                ? child
                : [child]
        : parent;
    return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
    const res = hooks.reduce((accumulator, hook) => {
        (accumulator.indexOf(hook) === -1)
            &&
            accumulator.push(hook);
        return accumulator;    
    }, []);
    return res;
}
const strats = {};
strats.created = mergeLifecycleHook; // should be a lifecycle merge install

const options = {
    created: ['created']
};
const strat = strats.created; // created strategy
options.created = strat(options.created, ['created'])