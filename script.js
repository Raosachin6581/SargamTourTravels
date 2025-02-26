var menuList = document.getElementById("menuList");
menuList.style.maxHeight ="0px";
function togglemenu(){
    if(menuList.style.maxHeight =="0px")
        {
            menuList.style.maxHeight = "200px";
        }
        else{
             menuList.style.maxHeight = "0px"
        }
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
           navLinks.forEach(links => {
            links.classList.remove('active');

          document.querySelector('header nav a [href*= ' + id + ']').classList.add('active');
          

           });
        };
    });
};