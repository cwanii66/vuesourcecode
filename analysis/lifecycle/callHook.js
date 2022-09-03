export function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget()
    const handlers = vm.$options[hook];
    if (handlers && handlers.length !== 0) {
        for (let i = 0, j = handlers.length; i < j; i++) {
            try {
                handlers[i].call(vm);
            } catch(e) {
                console.log(`${hook} hook: `, e.message);
            }
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook: ' + hook);
    }
    
    popTarget();
}