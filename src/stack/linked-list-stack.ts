class StackNode {
    next: LinkedListNode | null = null
    value: any;

    constructor(value: any) {
        this.value = value;
    }
}

class Stack {
    first: StackNode | null = null;
    last: StackNode | null = null;
    size: number  = 0;

    push(value: any){
        let newNode = new StackNode(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}