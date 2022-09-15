class Watcher {
  constructor(vm, getter) {
    this.vm = vm
    this.getter = getter

    // this.deps = new Set()
    // this.newDeps = new Set()
    // this.depsId = []
    // this.newDepsId = []
  }
  addDep(dep) {}
  update() {
    queueWatcher(this) // establish queue for watchers --> one-time use
  }
}
function nextTick(cb) {

}
function flushSchedulerQueue() {

}
const queueWatcher = (function(global) {
  let flushing = false
  let waiting = false
  let index
  const _watchersQueue = []
  return function queueWatcher(watcher) {
    if (!flushing) _watchersQueue.push(watcher)

    if (flushing) {
      let i = _watchersQueue.length - 1
      while(i > index && _watchersQueue[i].id > watcher.id) {
        i--
      }
      _watchersQueue.splice(i + 1, 0, watcher)
    }

    // queue the flush
    if (waiting) {
      waiting = true
      nextTick(flushSchedulerQueue)
    }
  }
})(globalThis)


/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */
class Dep {
    id = Number(1) // random
    subs = [] // Array<Watcher>

    addSub(sub) {
        this.subs.push(sub)
    }
    removeSub(sub) {
        
    }
    notify(info) {
      // stabilize the subscriber list first
      const _subs = this.subs.slice()
      for (let i = 0, sub; sub = _subs[i++]; ) {
        sub.update() // 
      }
    }
    depend(info) {
      if (Dep.target) {
        Dep.target.addDep(this) // watcher.addDep
      }
    }
    static target = null // !Global Watcher
}
const targetStack = []
function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target // Watcher?
}
function popTarget() {
  Dep.target = targetStack.pop()
}

class Observer {
  constructor(value) {
    this.value = value // data being observed
    this.dep = new Dep()
    def(value, "__ob__", this)
    if (Array.isArray(value)) {
      this.observeArray(value);
    }
    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    const keys = Object.keys(value)
    for (let i = 0, key; key = keys[i++]; ) {
        defineReactive(value, key)
    }
  }

  // observe a list of Array items
  // observeArray(value) {
  //   for (let i = 0, v; v = value[i++]; ) {
  //     observe(v);
  //   }
  // }
}

function observe(value) {
  let ob
  // do some edge judgement...
  ob = new Observer(value)
  return ob
}
/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val) {
    const dep = new Dep()
    const property = Object.getOwnPropertyDescriptor(obj, key)
    const getter = property.get
    const setter = property.set
    if (!getter || setter) {
      val = obj[key]
    }
    const value = getter ? getter.call(obj) : val
    // cater for pre-defined getter/setters
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          // const value = getter ? getter.call(obj) : val
          if (Dep.target) { // has watcher?
            dep.depend()
          }
          // some edge checks...
          return value
        },
        set: function reactiveSetter(newVal) {
          // const value = getter ? getter.call(obj) : val
          if (newVal === value) return
          if (setter) {
            setter.call(obj, newVal)
          } else {
            val = newVal
          }
          dep.notify()
        }
    })

    return dep
}

function def(value, key, ctx, enumerable) {
    Object.defineProperty(value, key, {
        value: ctx,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

