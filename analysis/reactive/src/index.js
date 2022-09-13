class Watcher {

  addDep(dep) {}
}

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
    notify() {

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
    // cater for pre-defined getter/setters
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          const value = getter ? getter.call(obj) : val
          if (Dep.target) { // has watcher?
            dep.depend()
          }
          // some edge checks...
          return value
        },
        set: function reactiveSetter(newVal) {

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