/********
 *
 * THREE PURPOSES
 *  1. Add an item
 *  2. Check item
 *  4. Remove item
 *
 *******/

// STATE
var state = [];

// FUNCTIONS
var addItem = function(state, item) {
  state.push(
    {
      itemName: item,
      checked: false //not checked
    }
  );
};


var item = {itemName:""};

var template = '<li>' +
  '<span class="shopping-item">' + item.itemName + '</span>' +
  '<div class="shopping-item-controls">' +
  '<button class="shopping-item-toggle">' +
  '<span class="button-label">check</span>' +
  '</button>' +
  '<button class="shopping-item-delete">' +
  '<span class="button-label">delete</span>' +
  '</button>' +
  '</div>' +
  '</li>';
template = $(template);
// RENDER
var renderList = function(state, element) {
  var currentItem = template.clone();
  currentItem.find('.shopping-item').html($('#shopping-list-entry').val());
  currentItem.find('.shopping-item-toggle').on('.click', function() {

      if(currentItem.checked){
        currentItem.checked = true;
        currentItem.find('.shopping-item').addClass('shopping-item__checked');
      }
      else {
        currentItem.checked = false;
        currentItem.find('.shopping-item').removeClass('shopping-item__checked');
      }
      return currentItem;
  });
    element.append(currentItem); //creates via template
};
// Event listeners
// Add
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});
//check
$('.shopping-item-toggle').click(function(){
  alert("click works");
});
