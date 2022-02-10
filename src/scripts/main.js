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

function createTree(element, data) {

  for (let key in data) {
    let li = document.createElement('li');
    li.append(key);
    element.append(li);

    let ul = document.createElement('ul');
    for (let key2 in data[key]){
      if (typeof(data[key]) == 'object'){
        li.append(key2);
      }
      for (let key3 in data[key][key2]){
        if (typeof(data[key][key2]) == 'object'){
        li.append(key3);
        }
      }
      ul.append(li);
    }
    
    element.append(ul);
  }

  
}

createTree(tree, food);