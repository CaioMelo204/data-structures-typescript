"use strict";
class ArrayQueue {
    constructor() {
        this.list = [];
    }
    enqueue(value) {
        this.list.unshift(value);
    }
    dequeue() {
        this.list.pop();
    }
}
