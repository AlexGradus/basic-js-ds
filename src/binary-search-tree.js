const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
 

}


class BinarySearchTree {
  constructor(){
    this.root=null;
  }

  root() {
   
  }
  

  add(value) {

    const newNode = new Node(value)
     if(!this.root){
       this.root=newNode;
       return;
     }
     let currentNode=this.root;
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
    return Find(this.root,value);

    function Find(a,value){
      if(!a){
        return false;
      }
      
      if(a.value===value){
        return true;
      }

      if(value<a.value){
        return Find(a.left,value)
      } else return Find(a.right,value)
    
    }
  }

  find(value) {
    return Find(this.root,value);

    function Find(a,value){
      if(!a){
        return null;
      }
      
      if(a.value===value){
        return a;
      }

      if(value<a.value){
        return Find(a.left,value)
      } else return Find(a.right,value)
    
    }
  }

  remove(value) {
    this.root=take(this.root,value);

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
    if(!this.root){
      return;
    }

    let a=this.root;
    while(a.left){
      a=a.left;
    }
    return a.value
  }

  max() {
    if(!this.root){
      return;
    }

    let a=this.root;
    while(a.right){
      a=a.right;
    }
    return a.value
  }
}

module.exports = {
  BinarySearchTree
};