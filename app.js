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

//FUNCTION TO ADD
var addItem = function(state, item) {
  state.items.push({
    itemName: item,
    checked: false //added to keep track of an item that is checked/not checked
  });
};

//TO CHECK
var checkItem(state, item){
  //Need to change checked to true
};
//TO REMOVE
var deleteItem(state, itemIndex){
  //Remove item from array
  // there is a splice method I can use
};

// RENDER
var renderList = function(state, element) {
  //Goes through each item and outputs the array
};

//----------------
// Event listeners
//
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
