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
console.log(pgh.adjacencyList)