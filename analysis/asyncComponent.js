// ensure a function is called only once
function once(fn) {
    let isCalled = false;
    return function(...args) {
        if (!isCalled) {
            isCalled = true;
            fn.apply(this, args);
        }
    }
}