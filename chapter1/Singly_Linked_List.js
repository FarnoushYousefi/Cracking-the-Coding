class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }

    push(val){
        var newNode =new Node(val);
        if (!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    
    }
    pop(){
        if(!this.head) return undifined;
            var current =this.head;
            var newTail=current;
            console.log(newTail,current)
            while(current.next){
                newTail =current;
    console.log(newTail,current)
            }
            this.tail=newTail;
            this.tail.next=null;
            this.length--;
            if (this.length===0){
                this.head=null;
                this.tail=null;
            }
            return current;
    }            
    shift(){
        if(!this.head) return undifined;
        var current=this.head;
        this.head=current.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return current;

    }

    unshift(val){
        var newHead= new Node(val);
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
        newNode.next=this.head;
        this.head=newHead;
        }
        this.length++;
        return this;
    }
    
    
    // traverse(){
    //     var current =this.head;
    //     while(current){
    //         console.log(current.val)
    //         current=current.next
    //     }
    // }
}
//  var first =new Node("Hi")
//  first.next=new Node("there")
//  first.next.next=new Node("how")
//  first.next.next.next =new Node ("Farnoush")
