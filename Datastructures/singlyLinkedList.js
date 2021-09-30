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
            this.tail = this.head =  new Node(data)
        }else{
            this.tail.next = new Node(data)
            this.tail = this.tail.next
        }
        return this.head
    }

    //Print Linked List
    print(){
        let node = this.head
        let result = ''
        while(node){
            result += `${node.data} => `
            node = node.next
        }
        result += 'Null'
        console.log(result)
    }
}

var ll = new SinglyLinkedList()
ll.print()