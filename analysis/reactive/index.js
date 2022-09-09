let activeEffect
class Dep {
   subscribers = new Set() // side effect database

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

const dep = new Dep()

watchEffect(() => {
   dep.depend() // track
   console.log('effect run...')
}) // effect run

dep.notify() // effect run (trigger)