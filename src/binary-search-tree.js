const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(value){
    this.data=value;
    this.value=value;
    this.left=null;
    this.right=null;
  }
 

}


class BinarySearchTree {
  constructor(){
    this.Root=null;
  }

  root() {
   
    if(!this.Root){
      
      return null ;

    }

   
    return this.Root;
   
  }
  

  add(value) {

    const newNode = new Node(value)
     if(!this.Root){
       this.Root=newNode;
       return;
     }
     let currentNode=this.Root;
     while(currentNode){
       if(newNode.value<currentNode.value){
         if(!currentNode.left){
          currentNode.left=newNode;
          return;
         } currentNode=currentNode.left;  
       } else {
        if(!currentNode.right){
          currentNode.right=newNode;
          return;
         } currentNode=currentNode.right;  

       }
     }
    
   
      
  }

  has(value) {
    return Find(this.Root,value);

    function Find(a,value){
      if(!a){
        return false;
      }
      
      if(a.value===value){
        return true;
      }

      if(value<a.value){
        return Find(a.left,value)
      } else {return Find(a.right,value)}
    
    }
  }

  find(data) {
    return Find(this.Root,data);

    function Find(a,data){
      if(!a){
        return null;
      }
      
      if(a.data===data){
        return a;
      }

      if(data<a.data){
        return Find(a.left,data)
      } else {return Find(a.right,data)}
    
    }
  }

  remove(value) {
    this.root=take(this.Root,value);

    function take(a,value){
     if(!a){
       return null;
     }

     if(value<a.value){
      a.left=take(a.left,value)
      return a;
    } else if(value>a.value){
      a.right=take(a.right,value)
      return a;
    
    } else{

       if(!a.right&&!a.left){
         return null;
       }
       if(!a.right){
         a=a.left;
         return a;
       }

       if(!a.left){
         a=a.right;
         return a;
       }

       let we=a.right;
       while(we.left){
         we=we.left
       }

       a.value=we.value;
       a.right=take(a.right,we.value)

       return a;

    }

    }
  }

  min() {
    if(!this.Root){
      return;
    }

    let a=this.Root;
    while(a.left){
      a=a.left;
    }
    return a.value
  }

  max() {
    if(!this.Root){
      return;
    }

    let a=this.Root;
    while(a.right){
      a=a.right;
    }
    return a.value
  }
}

module.exports = {
  BinarySearchTree
};