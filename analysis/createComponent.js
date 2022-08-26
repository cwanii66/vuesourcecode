

function createComponent(Ctor, data, context, children, tag) {
    const baseCtor = context.$options._base;
    Ctor = baseCtor.extend(Ctor);

    installComponentHooks(data);

    const vnode = new VNode();
    return vnode;
}
/**
 * Class inheritance
 */
function extend(extendOptions) {
    extendOptions = extendOptions || {};
    const Super = this;
    const SuperId = Super.cid;
    const cachedCtors = extendOptions._Ctor;
    
    const Sub = function VueComponent(options) {
        this._init(options);
    }
    Sub.prototype = o(Super.prototype);
    Sub.prototype.constructor = Sub;

    Sub.options = mergeOptions(/** */);

    // ... add some global static properties
    cachedCtors[SuperId] = Sub;
    return Sub;
}
function o(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}