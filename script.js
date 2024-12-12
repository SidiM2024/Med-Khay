// تواريخ المسابقات والامتحانات
const konkorDate = new Date("July 1, 2025 00:00:00").getTime();
const breveDate = new Date("July 3, 2025 00:00:00").getTime();
const baccalaureateDate = new Date("July 7, 2025 00:00:00").getTime();

// تحديث العد التنازلي لكل تاريخ
function updateCountdown(id, targetDate) {
    const countdown = document.getElementById(id);
    const now = new Date().getTime();
    const distance = targetDate - now;

    // حساب الأيام، الساعات، الدقائق، والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتائج في العناصر المناسبة
    document.getElementById(`${id}-days`).innerHTML = days < 10 ? "0" + days : days;
    document.getElementById(`${id}-hours`).innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById(`${id}-minutes`).innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById(`${id}-seconds`).innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // إذا انتهى العد التنازلي، عرض رسالة
    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "الحدث قد حدث!";
    }
}

// تحديث العد التنازلي كل ثانية
setInterval(() => {
    updateCountdown("konkor", konkorDate);
    updateCountdown("breve", breveDate);
    updateCountdown("baccalaureate", baccalaureateDate);
}, 1000);

// مفتاح التبديل لقائمة الجوال
document.querySelector('.toggle-menu').addEventListener('click', function() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
});

