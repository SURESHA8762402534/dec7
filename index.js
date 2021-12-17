const container = document.querySelector('#container');
var inputValue = document.querySelector('#input');
const add = document.querySelector('#add');
class item{
constructor(name){
this.createItem(name);
}
createItem(name){
var itemBox = document.createElement('div');
itemBox.id = "new"
itemBox.classList.add('item');

var input = document.createElement('input');
input.type = "text";
input.id = "input2"
input.disabled = true;
input.value = name;
input.classList.add('item_input');

var edit = document.createElement('button');
edit.classList.add('edit');
edit.innerHTML = "Edit";
edit.addEventListener('click', () => this.edit(input, name));

var remove = document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = "Remove";
remove.addEventListener('click', () => this.remove(itemBox, name));

container.appendChild(itemBox);

itemBox.appendChild(input);
itemBox.appendChild(edit);
itemBox.appendChild(remove);

}

edit(input, name){
if(input.disabled == true){
   input.disabled = !input.disabled;
}
else{
    input.disabled = !input.disabled;
   
}
}

 remove(itemBox, name){
itemBox.parentNode.removeChild(itemBox);
 }
}

add.addEventListener('click', check);


function check(){
if(inputValue.value=="")
    {
      alert('please enter the value')
        
    } else
    {
        document.getElementById("error").innerHTML="";
        new item(inputValue.value);
    }
}
/*for (var v = 0 ; v < input.length ; v++){
new item(input[v]);
}*/

window.addEventListener('keydown', (e) => {
    if(e.which == 13){
    check();
    }
    })