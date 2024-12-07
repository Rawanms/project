function countUp(el, target) {
    let current = 0; // البداية من الصفر
    const increment = Math.ceil(target / 100); // تحديد مقدار الزيادة في كل خطوة
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval); // إيقاف العداد عند الوصول للهدف
        }
        el.innerText = current.toLocaleString(); // تحديث النص في العنصر
    }, 20); // تحديث كل 20 مللي ثانية
}

function startCountUpOnView() {
    const counters = document.querySelectorAll('[data-countup]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target.querySelector('h2');
                const target = parseInt(entry.target.dataset.countup, 10);
                countUp(el, target);
                observer.unobserve(entry.target); // إلغاء المراقبة بعد بدء العداد
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// تفعيل العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', startCountUpOnView);



const backToTopButton = document.getElementById("backToTop");

// إظهار الزر عند التمرير
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // التمرير أكثر من 100 بكسل
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// العودة إلى الأعلى عند النقر
backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0); // العودة الفورية لرأس الصفحة
});



const swiper1 = new Swiper('#swiper1', {
    loop: true, // لجعل السلايدر يعيد نفسه
    pagination: {
      el: '.swiper-pagination',
     clickable: true, // لتفعيل الأزرار
    },
    grabCursor: true,}) // خاصية السحب

      var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// قائمة الاعضاء
  var swiper_image = new Swiper(".swiper_image",  {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-image-pagination",
        clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
   
  });