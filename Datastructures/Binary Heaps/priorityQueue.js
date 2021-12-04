class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(value,priority){
        let node = new Node(value,priority)
        this.values.push(node)
        let current = this.values.length - 1
        while(current > 0 ){
            let parent = Math.floor((current-1)/2)
            if(this.values[current].priority>=this.values[parent].priority) break 
            [this.values[parent], this.values[current]] = [this.values[current], this.values[parent]]
            current = parent
        }
    }
    dequeue(){
        let removed = this.values.shift()
        if(!this.values.length) return removed
        this.values.unshift(this.values.pop())
        let current = 0;
        let smallestChild;
        while(true){
            if((current*2)+1>=this.values.length){
                break
            }else if((current*2)+2==this.values.length){
                smallestChild = (current*2)+1
            }else{
                smallestChild = (this.values[(current*2)+1].priority<this.values[(current*2)+2].priority) ? (current*2)+1 : (current*2)+2
            }
    
            if(this.values[smallestChild].priority < this.values[current].priority){
                [this.values[smallestChild],this.values[current]] = [this.values[current],this.values[smallestChild]]
            }else{
                break
            }
            current = smallestChild
        }
        return removed
    }
}

let pq = new PriorityQueue()
pq.enqueue("common cold",5)
pq.enqueue("gunshot wound",1)
pq.enqueue("high fever",4)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())