/**
 *
 * Global Variabls
 *
 */
var state     = []; //will hold the items in the list

var template  = '<li><span class ="shopping-item"></span> <div class = "shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class = "shopping-item-delete"><span class="button-label">delete</span> </button></div></li>';

/**
 *
 * Item Management
 *
 */
function addItem(state, item) {
  state.push({itemName: item, done: false});
}

function deleteItem(state, itemIndex) {
  state.splice(itemIndex, 1);
}

function toggleDone(state, itemIndex) {
  if (state[itemIndex].done === true){
    state[itemIndex].done = false;
  }
  else {
    state[itemIndex].done = true;
  }
}
/**
 *
 * RENDER ITEMS
 *
 */
function renderItem(item, index, template){
  currentItem = $(template);
  currentItem.find('span.shopping-item').text(item.itemName);
  if (item.done === true){
    currentItem.find('span.shopping-item').addClass('shopping-item__checked');
  }
  else{
    currentItem.find('span.shopping-item').removeClass('shopping-item__checked');
  }
  return currentItem;
}

function renderList() {
  var itemsHTML = state.map(function(item,index){
    return renderItem(item, index, template);
  });
  $('ul').html(itemsHTML);
}
//even listeners
//Adds item to shopping list
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItem(state, $('#shopping-list-entry').val());
  renderList();
  this.reset();
});

//checks and unchecks items
$('.shopping-list').on('click', '.shopping-item-toggle', function (event){
  var item = $(this).parent().parent();
  var liIndex = $('li').index(item);
  toggleDone(state, liIndex);
  renderList();
});
