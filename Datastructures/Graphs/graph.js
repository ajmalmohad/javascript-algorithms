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
}

gph = new Graph()
gph.addVertex("Vertex1")
gph.addVertex("Vertex2")
gph.addEdge("Vertex2","Vertex1")
gph.addEdge("Vertex1","Vertex2")
console.log(gph.adjacencyList)