/**
 * Element virtual dom definition
 */
class Element {
    constructor(tag, data, children) {
        this.tag = tag;
        this.data = data;
        this.children = children;

        // key -> 用作唯一标识符
        if (data.key) {
            this.key = data.key;
        }
        let count = 0;
        children.forEach((child, idx) => {
            if (child instanceof Element) {
                count += child.count;
            } else {
                children[idx] = '' + child;
            }
            count++;
        });
        // 子元素个数
        this.count = count;
    }
    /**
    * render 将virdual-dom 对象渲染为实际 DOM 元素
    */
    render() {
        const el = document.createElement(this.tag);
        const data = this.data;
        // set up DOM attrs
        for (const propName in data) {
            const propValue = data[propName];
            el.setAttribute(propName, propValue);
        }

        const children = this.children || [];
        children.forEach((child) => {
            const childEl = (
                child instanceof Element
                ? child.render()
                : document.createTextNode(child)
            );
            el.appendChild(childEl);
        });
        return el;
    }
}
function createElement(tag, data, children) {
    return new Element(tag, data, children);
}


export default createElement;