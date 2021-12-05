class Node{
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

class HashTable{
    constructor(size=53){
        this.table = new Array(size)
    }
    _hash(key){
        let total = 0;
        for(let i=0; i<Math.min(key.length,100);i++){
            total = (total*31+key[i].charCodeAt(0))%this.table.length
        }
        return total
    }
    set(key,value){
        let node = new Node(key,value)
        let index = this._hash(key)
        if(!this.table[index]) this.table[index] = []
        this.table[index].push(node)
    }
    get(key){
        let index = this._hash(key)
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i].key === key){
                    return this.table[index][i]
                }
            }
        }
        return null
    }
}

let ht = new HashTable();
ht.set("ajmal",100)
ht.set("lamja",500)
ht.set("hello",100)
console.log(ht.get("ajmal"))