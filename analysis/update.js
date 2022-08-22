
function update(vnode, hydrating) {
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false/** removeOnly */)
    // updates
    vm.$el = vm.__patch__(prevVnode, vnode)
    // ...
}
function /**@class */ Vue() {}
Vue.prototype.__patch__ = (typeof window === undefined) ? noop : patch

// 通过函数柯里化抹平差异，入参封装在闭包中处理，实际返回的patch函数是按需返回的
export const patch = createPatchFunction({ nodeOps, modules })
const hooks = ['create', 'acitvate', 'update', 'remove', 'destroy']
function createPatchFunction(backend) {
    let i, j
    const cbs = {}
    // nodeOps => 封装了一些DOM操作的方法 { '': [], '': [], }
    // modules => 定义了一些模块的钩子函数的实现 -> [ {}, ]
    const { nodeOps, modules } = backend
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = []
        for (j = 0; j < modules.length; ++j) {
            if (modules[j][hooks[i]]) {
                cbs[hooks[i]].push(modules[j][hooks[i]])
            }
        }
    }
    // ...
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        // ...
    }
}
function createElm(
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
) {
    // ...
}
function createChildren(vnode, children, insertedVnodeQueue) {
    // recursively call createElm
    for (let i = 0; i < children.length; i++) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
    }
}
function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (let i = 0; i < cbs.length; ++i) {
        // 每个vnode都会持有一个钩子，保证insert状态
        cbs.create[i](emptyNode, vnode)
    }
    i = vnode.data.hook // reuse variable
}
function insert(parent, elm, ref) {
    // 把 DOM 插入到父节点中
    // 整个 vnode 树节点的插入顺序是先子后父
}