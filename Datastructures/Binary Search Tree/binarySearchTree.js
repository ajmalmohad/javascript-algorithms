class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let COUNT = 10;
class BinarySearchTree{
    constructor(){
        this.root = null;
        this.length = 0;
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
        if(value === node.data) return node;
        if(value < node.data){
            return this.find(value, node.left);
        }else{
            return this.find(value, node.right);
        }
    }
 
    }

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(3);
bst.insert(9);
bst.insert(11);