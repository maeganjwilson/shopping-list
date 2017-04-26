/********
 *
 * THREE PURPOSES
 *  1. Add an item
 *  2. Check item
 *  4. Remove item
 *
 *******/

// STATE
var state = {
  items : []
};

// FUNCTIONS
var addItem = function(state, item) {
  state.items.push(item);
};

var removeItem = function(state, item){
  //NEED TO LOOK INSIDE STATE FIND ITEM AND REMOVE
  //Will need position
  item.splice(i,1);
}

var checkItem = function(state, item){
  /*
  *
  * NEED TO LOOK INSIDE STATE FIND STATE AND TOGGLE THE
  * shopping-item__checked class
  * NEED ITEM
  *
  */
}

// RENDER

// Event listeners
// Add
// Remove
// Check
