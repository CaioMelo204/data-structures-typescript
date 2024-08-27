class QueueNode {
    next: LinkedListNode | null = null
    value: any;

    constructor(value: any) {
        this.value = value;
    }
}

class Queue {
    first: QueueNode | null = null;
    last: QueueNode | null = null;
    size = 0;

    enqueue(value: any){
        let newNode = new QueueNode(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // @ts-ignore
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}