class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value, node=this.root){
        let newnode = new Node(value);
        if(this.root == null){
            this.root = newnode;
            return true;
        }
        if(value === node.data){
            return false;
        }
        if(value < node.data){
            if(node.left === null){
                node.left = newnode;
                return true;
            }
            return this.insert(value, node.left);
        }else{
            if(node.right === null){
                node.right = newnode;
                return true;
            }
            return this.insert(value, node.right);
        }
    }

    find(value, node=this.root){
        if(this.root === null) return false;
        if(!node) return false;
        if(value === node.data) return node;
        if(value < node.data){
            return this.find(value, node.left);
        }else{
            return this.find(value, node.right);
        }
    }

    bfs(){
        let node = this.root;
        let data = []
        let queue = []
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node.data)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    dfsPreorderIterative(){
        let node = this.root;
        let data = []
        let stack = []
        stack.push(node)
        while(stack.length){
            node = stack.pop()
            data.push(node.data)
            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
        }
        return data
    }

    dfsPreorderRecursive(){
        let data = []
        function traverse(node){
            data.push(node.data)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    dfsPostorderRecursive(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.data)
        }
        traverse(this.root)
        return data
    }

    dfsInorderRecursive(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.data)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    }

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.dfsInorderRecursive())