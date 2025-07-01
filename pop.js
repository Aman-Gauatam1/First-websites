let icon=document.getElementById('icon');

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(  document.body.classList.contains("dark-theme")){
        document.getElementById('icon').src="sun.png";
    }
    else{
        document.getElementById('icon').src="moon.png";
    }
}