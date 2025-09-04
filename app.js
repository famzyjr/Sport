let Open  = document.getElementById('open');
let Close  = document.getElementById('close');
let navBar  = document.getElementById('navBar');

const opensideBar = () =>{
navBar.classList.add('show');
console.log('name');
}
const closeSideBar =()=>{
navBar.classList.remove('show');
}
Close.onclick =()=> closeSideBar()
Open.onclick=()=> opensideBar()