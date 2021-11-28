class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    //Add
    enqueue(data){
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

    //Remove
    dequeue(){
        if(!this.head) return undefined;
        let popped = this.head
        this.head = this.head.next
        this.length--
        if(this.length===0) this.tail = null;
        return popped
    }

    //Print
    print(){
        let node = this.head
        let result = ''
        while(node){
            result += `|  ${node.data}  `
            node = node.next
        }
        result+='|'
        console.log(result)
    }

}

let st = new Queue;
st.enqueue(10)
st.enqueue(20)
st.enqueue(30)
st.print()
st.dequeue()
st.print()