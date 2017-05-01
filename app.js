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

/*******************
*
* STATE
*
*******************/

var state = {
  items: []
};

var addItem = function(state, item) {
  state.items.push({
    itemName: item,
    checked: false //added to keep track of an item that is checked/not checked
  });
};

var getItem = function(state, itemIndex) {
  return state.items[itemIndex];
}

var deleteItem = function(state, itemIndex){
  state.splice(itemIndex, 1);
};

/*******************
*
* Render
*
*******************/

var renderItem = function(state,sList,sItem,itemIndex,listItemTemplate){
  $('.shopping-list').add(listItemTemplate);
  $('.shopping-item').after(state[itemIndex].itemName);
};

var renderList = function(state, renderItem) {
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
    renderItem(state);
    renderList(state);
});

//check
$('.shopping-item-toggle').click(function(event) {
  checkItem(state, this.parent('li').val());
});
