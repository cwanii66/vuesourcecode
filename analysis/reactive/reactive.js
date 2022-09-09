// const { reactive, ref, watchEffect } = require('vue')
let activeEffect
let targetMap = new WeakMap() // 总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。
                            // WeakMap结构有助于防止内存泄漏
const handler = {
    get(target, propKey, receiver) {
        track.call(receiver, target, propKey)
        return Reflect.get(target, propKey, receiver)
    },
    set(target, propKey, value, receiver) {
        const result = Reflect.set(target, propKey, value, receiver)
        trigger.call(receiver, target, propKey)
        return result
    }
}
function myReactive(obj) {
    const proxyObj = new Proxy(obj, handler)
    return proxyObj
}

function getReactiveProperty(target, key) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()
        depsMap.set(key, deps)
    }
    return deps
}

function track(target, key) {
    if (activeEffect) {
        const effects = getReactiveProperty(target, key)
        effects.add(activeEffect)
    }
}
function trigger(target, key) {
    const effects = getReactiveProperty(target, key)
    effects.forEach(effect => effect())
}

function whenDepsChange(effect) {
    const _effect = () => {
        activeEffect = _effect
        effect()
        activeEffect = null;
    }
    _effect()
}

const state = myReactive({
    count: 0
})
whenDepsChange(() => {
    console.log(state.count)
}) // 0
state.count++ // 1