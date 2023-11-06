export class Node {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}
  
  export class ArvoreBinaria {
    constructor() {
      this.root = null;
      this.sum = 0;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    sumInterval(node, initial, final){
        if (node.value >= initial && node.value <= final){
            this.sum = this.sum + node.value;
        }
        node.left 
            ? this.sumInterval(node.left, initial, final) 
            : null;

        node.right 
        ? this.sumInterval(node.right, initial, final) 
        : null;
        return this.sum;
    }
  }
  
