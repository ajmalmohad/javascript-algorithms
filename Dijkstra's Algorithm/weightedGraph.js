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


class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2,weight){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            if (this.adjacencyList[vertex1].some(e => e.node === vertex2)) {
                
            }
            if(!this.adjacencyList[vertex1].some(e => e.node === vertex2) &&
               !this.adjacencyList[vertex1].some(e => e.node === vertex1)){
                this.adjacencyList[vertex1].push({node:vertex2, weight})
                this.adjacencyList[vertex2].push({node:vertex1, weight})
            }else{
                console.log('Edge Already Exist')
            }
        }else{
            console.log('Vertex Doesn\'t Exist')
        }
    }

    dijkstra(start,finish){
        let path = []
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest

        //Initial State
        for(let vertex in this.adjacencyList){
            if(vertex !== start){
               distances[vertex] = Infinity
               nodes.enqueue(vertex, Infinity)
            } 
            else{
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            previous[vertex] = null
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().value
            if(smallest === finish){
                while(smallest){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }

            if(smallest || distances[smallest]!==Infinity){
                for(let neighbour in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    
                    let candidate = distances[smallest] + nextNode.weight

                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]){
                        distances[nextNeighbour] = candidate
                        previous[nextNeighbour] = smallest
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.reverse()
    }

}

let pgh = new WeightedGraph();
pgh.addVertex("A")
pgh.addVertex("B")
pgh.addVertex("C")
pgh.addVertex("D")
pgh.addVertex("E")
pgh.addVertex("F")
pgh.addEdge("A","B",4)
pgh.addEdge("A","C",2)
pgh.addEdge("B","E",3)
pgh.addEdge("D","E",3)
pgh.addEdge("C","D",2)
pgh.addEdge("C","F",4)
pgh.addEdge("D","F",1)
pgh.addEdge("E","F",1)
// console.log(pgh.adjacencyList)
console.log(pgh.dijkstra('A','F'))
