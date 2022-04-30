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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};