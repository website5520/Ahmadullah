const darkbtn=document.getElementById('light1-btn');
const lightbtn=document.getElementById('dark1-btn');
const body=document.body;





  darkbtn.addEventListener('click', () =>
{
	body.classList.remove('light');
	body.classList.add('dark');

});


  lightbtn.addEventListener('click', () =>
{
	body.classList.remove('dark');
	body.classList.add('light');

});

