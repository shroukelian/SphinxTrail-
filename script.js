document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-icon');
    const navMenu = document.querySelector('.nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '&times;'; 
            } else {
                menuToggle.innerHTML = '&#9776;'; 
            }
            
            console.log("Menu toggled!"); 
        });
    } else {
        console.error("عذراً: لم يتم العثور على زر المنيو أو القائمة في الصفحة");
    }
});