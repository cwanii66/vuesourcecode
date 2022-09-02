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

// vm arg is for compatible to sub-instance
function mergeOptions(parent, child, vm) {
    const extendsForm = child.extends;
    // extends 和 mixins 的option混入是同级的
    if (extendsForm) {
        parent = mergeOptions(parent, extendsForm, vm);
    }
    if (child.mixins) {
        for (let i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
        }
    }
}
const strategies = {
    
}
// 根据不同策略合并, 比如说mergeHooks mergeAssets ...
function mergeField(key) {
    const strategy = strategies[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
}