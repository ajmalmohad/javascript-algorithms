class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    //Add at Tail
    push(data){
        if(this.head === null){
            this.head = new Node(data)
            this.tail = this.head
        }else{
            this.tail.next = new Node(data)
            this.tail = this.tail.next
        }
        this.length++
        return this.head
    }

    //Remove the tail
    pop(){
        if(!this.head) return undefined
        let slow = this.head
        let fast = slow
        while(fast.next){
            slow = fast
            fast = fast.next
        }
        slow.next = null
        this.tail = slow
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        }
        return fast
    }

    //Remove from the head
    shift(){
        if(!this.head) return undefined;
        let popped = this.head
        this.head = this.head.next
        this.length--
        if(this.length===0) this.tail = null;
        return popped
    }

    //Add to the head
    unshift(data){
        if(!this.head){
            this.head = new Node(data)
            this.tail = this.head
        }else{
            let newnode = new Node(data)
            newnode.next = this.head
            this.head = newnode
        }
        this.length++
        return this
    }

    //Gets Element at given Index
    get(index){
        if(index>=this.length || index<0){
            return null
        }else{
            let node = this.head
            for (let i = 0; i < index; i++) node = node.next
            return node
        }
    }

    //Updates Value at given Index
    set(index,value){
        let node = this.get(index);
        if(!node) return false
        node.data = value;
        return true
    }

    //Inserts Value at given Index
    insert(index,value){
        if(index<0 || index>this.length){
            return false
        }
        if(index===0){
            this.unshift(value)
            return true
        }
        if(index===this.length){
            this.push(value)
            return true
        }
        let newnode = new Node(value)
        let prev = this.get(index-1)
        newnode.next = prev.next
        prev.next = newnode
        this.length++
        return true
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

var ll = new SinglyLinkedList()
ll.push(10)
ll.push(20)
ll.push(30)
ll.print()