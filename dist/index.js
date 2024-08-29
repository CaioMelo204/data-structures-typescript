"use strict";
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex1]) {
            return false;
        }
        const v1 = this.adjacencyList[vertex1];
        const v2 = this.adjacencyList[vertex2];
        if (v1.filter((name) => name === vertex2).length === 0)
            this.adjacencyList[vertex1].push(vertex2);
        if (v2.filter((name) => name === vertex1).length === 0)
            this.adjacencyList[vertex2].push(vertex1);
        return true;
    }
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex1]) {
            return false;
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((name) => name !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter((name) => name !== vertex2);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex])
            return false;
        const current = this.adjacencyList[vertex];
        current.forEach((v) => {
            this.removeEdge(v, vertex);
        });
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (stack.length) {
            // @ts-ignore
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Recife');
graph.addVertex('Italy');
graph.addVertex('New York');
graph.addEdge('Tokyo', 'New York');
graph.addEdge('Tokyo', 'Italy');
graph.addEdge('Tokyo', 'Recife');
graph.addEdge('Italy', 'Recife');
graph.addEdge('New York', 'Recife');
// graph.addEdge('Tokyo', 'New York')
console.log(graph.depthFirstIterative('Recife'));
console.log(graph.depthFirstRecursive('Recife'));
console.log(graph.breadthFirst('Recife'));
//graph.removeEdge('Tokyo', 'New York')
// graph.removeVertex('Tokyo')
// console.log(graph.adjacencyList)
