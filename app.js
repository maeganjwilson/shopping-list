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
  items: []
};

// FUNCTIONS
var addItem = function(state, item) {
  state.items.push(item);
};

// RENDER
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
      return '<li>' +
        '<span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button>' +
        '</div>' +
        '</li>';
    });
    element.html(itemsHTML);
};
// Event listeners
// Add
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});
