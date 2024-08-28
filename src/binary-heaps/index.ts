class BinaryHeap {
    values: number[] = [];

    insert(value: number){
        this.values.push(value);
        this.bubbleUp();
    }

    private bubbleUp(){
        let idx: number = this.values.length - 1;
        const element: number = this.values[idx];
        while(idx > 0){
            let parentIdx: number = Math.floor((idx - 1)/2);
            let parent: number = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            // @ts-ignore
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];

                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && leftChild && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

const heap = new BinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(29)
heap.insert(55)

console.log(heap.values)
heap.extractMax()
console.log(heap.values)