//Undirected Graph

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            if(!this.adjacencyList[vertex1].includes(vertex2) && !this.adjacencyList[vertex2].includes(vertex1)){
                this.adjacencyList[vertex1].push(vertex2)
                this.adjacencyList[vertex2].push(vertex1)
            }else{
                console.log('Edge Already Exist')
            }
        }else{
            console.log('Vertex Doesn\'t Exist')
        }
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            if(this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)){
                this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1)
                this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1)
            }else{
                console.log('Edge Doesn\'t Exist')
            }
        }else{
            console.log('Vertex Doesn\'t Exist')
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach(v=>{
                this.adjacencyList[v].splice(this.adjacencyList[v].indexOf(vertex),1)
            })
            delete this.adjacencyList[vertex]
        }else{
            console.log("Vertex Doesn\'t Exist")
        }
    }

    dfsRecursive(start){
        let result = [];
        let visited = {};
        let helper = (vertex) => {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach((neighbour)=>{
                if(!visited[neighbour]) return helper(neighbour)
            })
        }
        helper(start)
        return result
    }

    dfsIterative(start){
        let stack = []
        let visited = {}
        let result = []
        stack.push(start)
        while(stack.length){
            let vertex = stack.pop()
            if(!visited[vertex]){
                visited[vertex] = true
                result.push(vertex)
                stack.push(...this.adjacencyList[vertex])
            }
        }
        return result
    }

}

gph = new Graph()
gph.addVertex("A")
gph.addVertex("B")
gph.addVertex("C")
gph.addVertex("D")
gph.addVertex("E")
gph.addVertex("F")
gph.addEdge("A","B")
gph.addEdge("B","D")
gph.addEdge("D","F")
gph.addEdge("F","E")
gph.addEdge("E","C")
gph.addEdge("C","A")
gph.addEdge("D","E")
console.log(gph.dfsIterative("A"))