class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(value){
        this.values.push(value)
        let current = this.values.length - 1
        while(current > 0 ){
            let parent = Math.floor((current-1)/2)
            if(this.values[current]<=this.values[parent]) break 
            [this.values[parent], this.values[current]] = [this.values[current], this.values[parent]]
            current = parent
        }
    }
    extractMax(){
        let removed = this.values.shift()
        if(!this.values.length) return removed
        this.values.unshift(this.values.pop())
        let current = 0;
        let largestChild;
        while(true){
            if((current*2)+1>=this.values.length){
                break
            }else if((current*2)+2==this.values.length){
                largestChild = (current*2)+1
            }else{
                largestChild = (this.values[(current*2)+1]>this.values[(current*2)+2]) ? (current*2)+1 : (current*2)+2
            }
    
            if(this.values[largestChild] > this.values[current]){
                [this.values[largestChild],this.values[current]] = [this.values[current],this.values[largestChild]]
            }else{
                break
            }
            current = largestChild
        }
        return removed
    }
}

let msh = new MaxBinaryHeap()
msh.insert(2)
msh.insert(7)
msh.insert(26)
msh.insert(25)
msh.insert(19)
msh.insert(17)
msh.insert(1)
msh.insert(90)
msh.insert(3)
msh.insert(36)
console.log(msh.values)
msh.extractMax()
msh.extractMax()
msh.extractMax()
console.log(msh.values)