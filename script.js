document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-icon');
    const navMenu = document.querySelector('.nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            // منع المتصفح من تنفيذ أي أمر آخر
            e.preventDefault();
            
            // إضافة أو إزالة كلاس active
            navMenu.classList.toggle('active');
            
            // تغيير شكل الزر
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '&times;'; // علامة X
            } else {
                menuToggle.innerHTML = '&#9776;'; // علامة القائمة
            }
            
            console.log("Menu toggled!"); // هذا للتأكد في الكونسول أن الضغطة تعمل
        });
    } else {
        console.error("عذراً: لم يتم العثور على زر المنيو أو القائمة في الصفحة");
    }
});