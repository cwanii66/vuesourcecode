const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: function() {},
    set: function() {}
}

function defineComputed(target, key, userDef) {
    const shouldCache = false // is server rendering

    if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : userDef
    } else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache
                ? createComputedGetter(key)
                : userDef.get
                : createGetterInvoker(userDef.get)
        sharedPropertyDefinition.set = userDef.set || function() {}
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
function createGetterInvoker(getter) {
    return function computedGetter() {
        getter.call(this, this)
    }
}