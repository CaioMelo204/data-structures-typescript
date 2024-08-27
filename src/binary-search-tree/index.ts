class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class BinarySearchTree {
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