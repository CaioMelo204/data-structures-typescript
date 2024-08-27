class LinkedListNode {
    next: LinkedListNode | null = null
    value: any;

    constructor(value: any) {
        this.value = value;
    }
}

class SinglyLinkedList {
    head: LinkedListNode | null = null;
    tail: LinkedListNode | null = null;
    length: number  = 0;

    push(node: any) {
        const newNode = new LinkedListNode(node);
        if (this.length === 0 || this.head === null || this.tail === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
            this.length++;
        }
        return true;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    pop() {
        let current = this.head;
        if (this.length === 0 || current === null) {
            return;
        }
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        const current = this.head;
        if (this.length === 0 || current === null) {
            return;
        }
        if (current.next === null) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current.value;
        }
        this.head = current.next;
        this.length--;
        return current.value;
    }

    unshift(value: any) {
        const newNode = new LinkedListNode(value);
        if (this.length === 0 || this.head === null || this.tail === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return true;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return true;
    }

    get(index: number): LinkedListNode | null {
        if(index < 0 || index > this.length || this.head === null) {
            return null;
        }

        let current: LinkedListNode = this.head;
        let counter = 0;

        while (index  !== counter) {
            if (current.next !== null) {
                current = current.next;
            }
            counter++;
        }

        return current;
    }

    set(index: number, value: any) {
        const nodeGetted = this.get(index);
        if (nodeGetted !== null) {
            nodeGetted.value = value;
            return true;
        }

        return false;
    }

    insert(index: number, value: any) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.unshift(value)
        }
        if (index === this.length) {
            return this.push(value)
        }
        const newNode = new LinkedListNode(value);
        const prev = this.get(index - 1);
        if (prev) {
            const temp = prev.next;
            newNode.next = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index: number) {
        if(index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            return this.shift()
        }

        if (index === this.length - 1) {
            return this.pop()
        }

        const prev = this.get(index - 1);
        if (prev && prev.next !== null) {
            const temp = prev.next;
            prev.next = temp.next;
            this.length--;
            return temp.value;
        }
        return  null
    }

    reverse() {
        if (this.head === null) {
            return null;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev: LinkedListNode | null = null;
        let next: LinkedListNode | null = null;
        for(let i = 0; i < this.length; i++) {
            next = node?.next || null;
            node.next = prev;
            prev = node;
            // @ts-ignore
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();
list.push("Hello")
// console.log(list.shift())
// console.log(list.length)
list.push("Sandino")
list.push("204")

list.unshift("-------")
list.push("=======")

console.log(list.get(2))

console.log(list.set(2, "Caio"))
console.log(list.insert(3, "Sandino"))
console.log(list.insert(0, "========="))
console.log(list.insert(list.length, "--------"))

list.traverse()

console.log(list.length)

console.log("---------------------- REMOVE ---------------")

console.log(list.remove(2))
console.log(list.length)

console.log(list.remove(0))
console.log(list.length)
list.traverse()

console.log(list.remove(list.length - 2))
console.log(list.length)
list.traverse()
// console.log("------------------------- Bug ---------------------")
//
// console.log(list.head)
// console.log(list.tail)
// list.traverse();
// console.log(list.length)
// console.log(list.pop())
// console.log(list.shift())

list.reverse()
list.traverse()