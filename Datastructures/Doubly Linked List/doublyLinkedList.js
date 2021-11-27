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
console.log(dll.shift());
console.log(dll.shift());
console.log(dll);
