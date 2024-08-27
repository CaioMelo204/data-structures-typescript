class ArrayQueue {
    list: any[] = [];

    enqueue(value: any) {
        this.list.unshift(value);
    }

    dequeue() {
        this.list.pop();
    }
}