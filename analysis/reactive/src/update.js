/**
 * setter -> dep.notify -> watcher.update 
 * -> queue watcher(watcher has unique id) -> pushed in global queue
 * -> nextTick(flushScheduleQueue) -> create async task to flushQueue -> watcher run
 * -> call our getter to update component -> render and patch
 * 
 */
// nextTick ==> data changes but DOM have not been updated yet
// we just put watcher into queue waiting for next event loop

/**
 * setImmediate
 */

const callbacks = []
let pending = false

// Promise.resolve().then(flushCallbacks)
function flushCallbacks() {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0, cb; cb = copies[i++]; ){
        cb()
    }
}

let microTimerFunc 
let macroTimerFunc
let useMacroTask = false

export function withMacroTask(fn) {
    
}

export function nextTick(callback, context) {
    let _resolve
    callbacks.push(function() {
        if (callback) {
            try {
                callback.call(context)
            } catch(e) {
                throw new Error(e.message, 'nextTick')
            }
        } else if (_resolve) {
            _resolve(context)
        }
    })
    if (!callback && typeof Promise !== 'undefined') {
        return new Promise((resolve) => {
            _resolve = resolve
        })
    }
}