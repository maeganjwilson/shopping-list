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
     var temp = '<li>'+
            '<span class="shopping-item">'+item+'</span>'+
            '<div class="shopping-item-controls">'+
                '<button class="shopping-item-toggle">'+
                    '<span class="button-label">check</span>'+
                '</button>'
                '<button class="shopping-item-delete">'+
                    '<span class="button-label">delete</span>'+
                '</button>'+
            '</div>'+
            '</li>';
};

var removeItem = function(state, item) {
    //NEED TO LOOK INSIDE STATE FIND ITEM AND REMOVE
    //Will need position
    item.splice(i, 1);
}

var checkItem = function(state, item) {
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
