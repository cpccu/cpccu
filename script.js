const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  if(nav.classList.contains("hidden")){
    nav.classList.remove("flex");
  }else{
    nav.classList.add("flex");    
  }
});