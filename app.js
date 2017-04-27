/********
 *
 * THREE PURPOSES
 *  1. Add an item
 *  2. Check item
 *  4. Remove item
 *
 *******/
//template
var listItemTemplate = (
  '<li>' +
    '<span class="shopping-item"></span>' +
      '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);

// STATE
var state = {
  items: []
};

var itemIndex = function(state, item){
  function findItem(it) {
    return state.itemName === item;
  }
  
  state.findIndex(findItem);
};

/*******************
*
* Functions
*
*******************/

var addItem = function(state, item) {
  state.items.push({
    itemName: item,
    checked: false //added to keep track of an item that is checked/not checked
  });
};

//TO CHECK
var checkItem(state, itemIndex){
  //Need to change checked to true
  //Will need index of item to check
  state[itemIndex].checked = true;
};

//TO REMOVE
var deleteItem(state, itemIndex){
  //Remove item from array
  // there is a splice method I can use
  //Will need index of item to remobve
  state.splice(itemIndex, 1);
};

/*******************
*
* Render
*
*******************/

var renderList = function(state, element) {
  //Goes through each item and outputs the array
};

/*******************
*
* Event listeners
*
*******************/

// Add
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

//check
$('.shopping-item-toggle').click(function(event) {
  checkItem(state, this.parent('li').val());
});
