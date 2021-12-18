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
}

gph = new Graph()
gph.addVertex("Tokyo")
gph.addVertex("Dallas")
gph.addVertex("Aspen")
gph.addEdge("Tokyo","Dallas")
gph.addEdge("Dallas","Aspen")
gph.addEdge("Tokyo","Aspen")
gph.removeVertex("Aspen")
console.log(gph.adjacencyList)