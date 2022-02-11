'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data){

  for (const key in data){
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.append(key);
    ul.append(li);
    element.append(ul);
   
    if(typeof(data[key]) == 'object'){
      createTree(li,data[key]);
    } 
  }
}
createTree(tree, food);
