function parsePath(p) {
    const segments = p.split('.')
    return function(obj) {
        for (let i = 0, l = segments.length; i < l; i++) {
            if (!obj) 
                return
            obj = obj[segments[i]] // trigger get
        }
        return obj
    }
}