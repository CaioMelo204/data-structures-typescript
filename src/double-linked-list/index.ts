class DoubleLinkedListNode {
    value: any;
    next: DoubleLinkedListNode | null = null;
    prev: DoubleLinkedListNode | null = null;

    constructor(value: any) {
        this.value = value;
    }
}

class DoubleLinkedList {
    head: DoubleLinkedListNode | null = null;
    tail: DoubleLinkedListNode | null = null;
    length: number  = 0;

    traverse() {
        let current = this.head;
        if (this.length === 0 || !current) {
            return undefined;
        }
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }

    push(value: any) {
        const newNode = new DoubleLinkedListNode(value);

        if (this.length === 0 || !this.head || !this.tail) {
            this.tail = newNode;
            this.head = this.tail;
            this.length++;
            return true;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return true;
    }

    pop() {
        if (this.length === 0 || !this.head || !this.tail) {
            return null;
        }

        if (this.length === 1 || this.tail.prev === null) {
            const temp = this.tail;
            this.tail = null;
            this.head = null;
            this.length--;
            return temp;
        }

        const prev = this.tail.prev;
        const temp = this.tail;
        prev.next = null;
        this.tail.prev = null;
        this.tail = prev;
        this.length--;
        return temp;
    }

    shift() {
        if (this.length === 0 || !this.head || !this.tail) {
            return null;
        }

        if (this.length === 1 || this.head.next === null) {
            const temp = this.head;
            this.tail = null;
            this.head = null;
            this.length--;
            return temp;
        }

        const next = this.head.next;
        const temp = this.head;
        temp.next = null;
        next.prev = null;
        this.head = next;
        this.length--;
        return temp;
    }

    unshift(value: any) {
        const newNode = new DoubleLinkedListNode(value);

        if(this.length === 0 || !this.head || !this.tail) {
            this.tail = newNode;
            this.head = this.tail;
            this.length++;
            return true;
        }

        const temp = this.head;
        newNode.next = temp;
        temp.prev = newNode;
        this.head = newNode;
        this.length++;
        return true;
    }

    get(index: number){
        if(index < 0 || index >= this.length) return null;
        let count: number;
        let current: DoubleLinkedListNode | null;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                // @ts-ignore
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                // @ts-ignore
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index: number, value: any) {
        const nodeGet = this.get(index);
        if (nodeGet) {
            nodeGet.value = value;
            return true;
        }
        return false;
    }

    insert(index: number, value: any){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let newNode = new DoubleLinkedListNode(value);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode?.next;

        // @ts-ignore
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        // @ts-ignore
        newNode.next = afterNode;
        // @ts-ignore
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let beforeNode = removedNode?.prev;
        let afterNode = removedNode?.next;
        // @ts-ignore
        beforeNode.next = afterNode;
        // @ts-ignore
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        // @ts-ignore
        removedNode.next = null;
        // @ts-ignore
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

const Dlist = new DoubleLinkedList();
Dlist.push('Hello');
Dlist.unshift('----------')
Dlist.push('Sandino')
Dlist.push('----------')
console.log(Dlist.length)
console.log(Dlist.get(2))
console.log(Dlist.insert(3, '204'))
// console.log(Dlist.set(2, "Caio"));
Dlist.traverse()

// console.log(Dlist.get(0))

// console.log(Dlist.pop())
// console.log(Dlist.shift())
// console.log(Dlist.shift())
// console.log(Dlist.length)
