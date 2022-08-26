

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

