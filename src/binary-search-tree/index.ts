export class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

export class BinarySearchTree {
    root: TreeNode | null = null;

    insert(value: number){
        let newNode = new TreeNode(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value: number) {
        if(this.root === null){
            return false
        }
        let current: TreeNode | null = this.root;
        while (current !== null) {
            if(value === current.value) return true;
            if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    BFS(){
        let node: TreeNode | null | undefined = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node?.value);
            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        let data: number[] = [];
        function traverse(node: TreeNode){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        if(this.root !== null)
            traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        let data: number[] = [];
        function traverse(node: TreeNode){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        if (this.root !== null)
            traverse(this.root);
        return data;
    }

    DFSInOrder(){
        let data: number[] = [];
        function traverse(node: TreeNode){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        if (this.root !== null)
            traverse(this.root);
        return data;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
console.log(bst.find(10))
console.log(bst.BFS())
console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())
