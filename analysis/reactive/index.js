/**
 * 执行代码时产生side effect使程序的状态发生改变
 * 状态的改变取决于副作用的依赖，所以effect们是他们依赖的订阅者
 * 每当依赖变化是产生发起通知，产生side effect
 * 所以 我们需要一个函数能在依赖变化时产生作用：
 * 1. 变量被读取时会被追踪
 * 2. 被读取，将该副作用设为变量的订阅者
 * 3. 探测变化，通知订阅者重新执行副作用
 */

let activeEffect // we need to know which effect should be a subscriber
class Dep {
   constructor(value) {
      this.subscribers = new Set() // side effect database
      this._value = value
   }

   get value() {
      this.depend()
      return this._value
   }

   set value(newValue) {
      this._value = newValue
      this.notify()
   }

   depend() {
      if (activeEffect) {
         this.subscribers.add(activeEffect)
      }
   }
   notify() {
      this.subscribers.forEach(effect => effect())
   }
}

function watchEffect(effect) {
   const _effect = () => {
      activeEffect = _effect
      effect()
      activeEffect = null
   }
   _effect()
}

const ok = new Dep(true)
const msg = new Dep('deps value')

watchEffect(() => {
   if (ok.value) {
      console.log(msg.value)
   }
})
msg.value = 'value changes'