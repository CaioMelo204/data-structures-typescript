"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
exports.TreeNode = TreeNode;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value)
                return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        while (current !== null) {
            if (value === current.value)
                return true;
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    BFS() {
        let node = this.root, data = [], queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node === null || node === void 0 ? void 0 : node.value);
            if (node === null || node === void 0 ? void 0 : node.left)
                queue.push(node.left);
            if (node === null || node === void 0 ? void 0 : node.right)
                queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        }
        if (this.root !== null)
            traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            data.push(node.value);
        }
        if (this.root !== null)
            traverse(this.root);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            data.push(node.value);
            if (node.right)
                traverse(node.right);
        }
        if (this.root !== null)
            traverse(this.root);
        return data;
    }
}
exports.BinarySearchTree = BinarySearchTree;
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
console.log(bst.find(10));
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
