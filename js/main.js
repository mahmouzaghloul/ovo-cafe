function showContent(num) {
    document.getElementById("styleBox").style.display = "none";


    // إخفاء جميع المحتويات أولًا
    document.querySelectorAll('.content').forEach(div => div.style.display = 'none');

    // إظهار العنصر المطلوب
    document.getElementById("content" + num).style.display = "block";
}