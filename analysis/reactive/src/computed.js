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
// argument: user defined key
// like a proxy
function createComputedGetter(key) {
    return function computedGetter() {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
            watcher.depend()
            return watcher.evaluate()
        }
    }
}