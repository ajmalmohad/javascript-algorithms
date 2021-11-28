class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Add at Last
    push(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    //Remove from Last
    pop(){
        if(this.length === 0) return null;
        let popped = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }

    //Remove from First
    shift(){
        if(this.length === 0) return null;
        let removed = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }

    //Add to First
    unshift(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    //Get Node using Index
    get(index){
        if(index<0 || index>= this.length) return null;
        if(index > this.length/2){
            let node = this.tail; //Traverse from Tail
            let count = this.length-1;
            while(count!==index){
                node = node.prev;
                count--;
            }
            return node
        }else{
            let node = this.head; //Traverse from Head
            let count = 0;
            while(count!==index){
                node = node.next;
                count++;
            }
            return node
        }
    }

    //Set Value of Node using Index
    set(index,value){
        let node  = this.get(index);
        if(node !== null){
            node.data = value;
            return true;
        }
        return false;
    }

    //Insert node at specified Index
    insert(index,value){
        if(index<0 || index>this.length) return false;
        if(index===0) return !!this.unshift(value);
        if(index===this.length) return !!this.push(value);

        let node = new Node(value);
        let previous = this.get(index-1);
        let next = previous.next;

        previous.next = node;
        next.prev = node;
        node.next = next;
        node.prev = previous;

        this.length++;
        return true;
    }

    //Remove node at specified Index
    remove(index){
        if(index<0 || index>=this.length) return false;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();

        let node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }

    //Print Linked List
    print(){
        let node = this.head
        let result = ''
        while(node){
            result += `${node.data} => `
            node = node.next
        }
        result += 'null'
        console.log(result)
    }
}

let dll = new DoublyLinkedList()
dll.push(10)
dll.push(20)
dll.push(30)
dll.push(40)
dll.push(50)
dll.push(60)
console.log(dll.remove(4));
dll.print()
