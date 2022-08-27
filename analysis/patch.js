/**
 * patch将新老VNode节点进行比对，
 * 然后将根据两者的比较结果进行最小单位地修改视图，
 * 而不是将整个视图根据新的VNode重绘。
 * patch的核心在于diff算法，
 * 这套算法可以高效地比较viturl dom的变更，
 * 得出变化以修改视图。
 */
// diff算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式

function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    
}