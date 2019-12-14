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

		conteiner.appendChild(itemBox);

		itemBox.appendChild(inputs);

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