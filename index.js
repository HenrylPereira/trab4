  import { ArvoreBinaria } from './src/arvore.js';

  const tree = new ArvoreBinaria();
  
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(18);
  tree.insert(null);

  console.log(tree.sumInterval(tree.root, 7, 15)); //retorna 32
  