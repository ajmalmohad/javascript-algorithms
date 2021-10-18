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
        if(this.head){
            let popped = this.head
            this.head = this.head.next
            this.length--
            return popped
        }else{
            return undefined
        }
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
ll.push(10);
ll.push(20);
ll.push(30)
ll.print();