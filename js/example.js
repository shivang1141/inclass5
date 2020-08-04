// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream'); 
newItemLast.appendChild(newTextLast); 
list.appendChild(newItemLast); 

// ADD NEW ITEM START OF LIST
var newitemFirst = document.createElement('li') ;
var newTextFirst = document.createTextNode('kale');
newitemFirst.appendChild(newTextFirst); 
list.insertBefore(newitemFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li'); 
var i;
for (i = 0; i < listItems.length; i++) { 
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); 
var headingText = heading.firstChild.nodeValue; 
var totalItems = listItems.length; 
var newHeading = headingText + ' ' + totalItems; 
heading.textContent = newHeading;