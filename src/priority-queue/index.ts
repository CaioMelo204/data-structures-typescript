class PriorityNode {
    value: number;
    priority: number;

    constructor(value: number, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    values: PriorityNode[] = [];

    enqueue(val: number, priority: number){
        let newNode = new PriorityNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    private bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            // @ts-ignore
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    private sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && leftChild && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const priorityHeap = new PriorityQueue()
priorityHeap.enqueue(23, 1);
priorityHeap.enqueue(45, 2);
priorityHeap.enqueue(45, 3);
priorityHeap.enqueue(45, 2);
priorityHeap.enqueue(43, 1);
priorityHeap.enqueue(46, 2);
priorityHeap.enqueue(48, 3);

console.log(priorityHeap.values);