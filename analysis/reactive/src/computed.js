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
        // if (watcher) {
        //     watcher.depend()
        //     return watcher.evaluate()
        // }
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate() 
                    // get value first -> at computed watcher getter -> immediately return after callback computed
                    
            }
            if (Dep.target) {
                Dep.target.onTrack({/** config  */})

                Dep.target.depend() // current render watcher collect computed as deps
            }
        }
    }
}

function initComputed(vm, computed) {
    // simply achieve init
    const watchers = Object.create(null)

    for (const key in computed) {
        const userDef = computed[key]
        const getter = typeof userDef === 'function' ? userDef : userDef.get
        watchers[key] = new Watcher(vm, getter)

        if (!(key in vm)) {
            defineComputed(vm, key, userDef)
        }
    }
}