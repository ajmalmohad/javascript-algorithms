class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    //Add
    push(data){
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

    //Remove
    pop(){
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
        let result = ' ------\n'
        while(node){
            result += `|  ${node.data}  |\n ------ \n`
            node = node.next
        }
        console.log(result)
    }

}

let st = new Stack;
st.push(10)
st.push(20)
st.push(30)
st.print()
st.pop()
st.print()