class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(node){
        if(this.head === null){
            this.head = node
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = this.tail.next
        }
        this.length++
        return this.head
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
        let hashedKey = this._hash(key)
        if(this.table[hashedKey]==null){
            let ll = new SinglyLinkedList()
            this.table[hashedKey] = ll
            this.table[hashedKey].push(node)
        }else{
            this.table[hashedKey].push(node)
        }
    }
    get(key){
        let hashedKey = this._hash(key)
        if(this.table[hashedKey]==null){
            return null
        }else{
            let node =  this.table[hashedKey].head
            while(node){
                if(node.key === key){
                    return node
                }
                node = node.next
            }
            return null
        }
    }
}

let ht = new HashTable(53);
ht.set("ajmal",100)
ht.set("lamja",500)
ht.set("hello",100)
console.log(ht.get("ajmal"))