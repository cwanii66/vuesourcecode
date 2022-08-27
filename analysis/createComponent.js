

function createComponent(Ctor, data, context, children, tag) {
    // 需要一个继承了Vue Ctor的构造器，来持有创建组件的能力
    // 我们的组件构造器实际上就是以Vue为模板的
    const baseCtor = context.$options._base;
    Ctor = baseCtor.extend(Ctor);

    // patch 阶段需要各种各样的钩子
    installComponentHooks(data);
    
    const name = Ctor.options.name;
    // 注意组件VNode的children为undefined，而componentOptions有children(插槽会使用)
    const vnode = new VNode(
        `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
        data, undefined, undefined, undefined, context,
        { Ctor, propsData, listeners, tag, children },
        asyncFactory
    );
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