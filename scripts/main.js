let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/feier.png' ){
		myImage.setAttribute('src','images/feier2.png');
	}else {
		myImage.setAttribute('src','images/feier.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (myName === null || !myName){
  	setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = '我太牛逼了，' + myName;
}

if (!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '我真牛逼,'+ storedName;
}


myButton.onclick = function(){
	setUserName();
}

