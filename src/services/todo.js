import update from 'immutability-helper';
/**
 * get the list of todo item
 * @return {Array} 
 */

export function getAll(){
    return [
        {
          id: 1,
          text:"Learn Javascript",
          completed: false
        },
        { id: 2,
          text:"Learn ReactJs",
          completed: false
        },
        { id: 3,
          text:"Build React App",
          completed: false
        }
      ]
}

export function getItemById(itemId){
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed){
    let index = items.findIndex(item => item.id === itemId);
    return update(items, {
        [index] : { 
            completed: {$set: completed} 
        }
    });
}

let todoCounter = 0;

/**
 * a counter to generate unique id for a todo item
 * @type{Number}
 */

function getNextId(){
    return getAll().length + todoCounter++
}

/**
 * add a new item on the list and return the new updated list (immutable).
 */

 export function addToList(list, data){
     let item = Object.assign({
         id: getNextId()
     }, data)
     
     return list.concat([item]);
 }