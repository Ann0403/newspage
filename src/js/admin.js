function logout(){
		location.href = 'page.html';
}


function openmmodal(){
	document.getElementById("modal").style.display = "block";

}

var addbtn = document.querySelector('.modal__add');
var inputs = document.querySelector('.modal__content');  
var conteiner = document.querySelector('.conteiner');  
var inputtitle = document.querySelector('.modal__title');  

class item{
	constructor(itemName){
		this.createDiv(itemName);
	}
	createDiv(itemName){
		let inputs = document.createElement('input');
		inputs.value = itemName;
		inputs.disabled = true;
		inputs.classList.add('item__input');
		inputs.type = "text";


		let itemBox = document.createElement('div');
		itemBox.classList.add('item');


		let editbtn = document.createElement('button');
		editbtn.innerHTML = "<img src='src/assets/icons/edit.svg'>";
		editbtn.classList.add('editButton');

		let removebtn = document.createElement('button');
		removebtn.innerHTML =  "<img src='src/assets/icons/delete.svg'>";
		removebtn.classList.add('removeButton');

		conteiner.appendChild(itemBox);

		itemBox.appendChild(inputs);
		itemBox.appendChild(editbtn);
		itemBox.appendChild(removebtn);

		editbtn.addEventListener('click', ()=> this.edit(inputs));

		removebtn.addEventListener('click', ()=> this.remove(itemBox));
	}

	edit(inputs){
		inputs.disabled = !inputs.disabled;
	}
	remove(item){
		conteiner.removeChild(item);
	}
}
	

function check(){
	if(inputs.value != ""){
		new item(inputs.value);
	}
	document.getElementById("modal__content").value = "";
	document.getElementById("modal").style.display = "none";
}

addbtn.addEventListener('click', check);
window.addEventListener('keydown', (a)=>{
	
})