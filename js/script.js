
console.log('начало');
var acc = document.getElementsByClassName("FAQ__accordion-btn");
console.log(acc.length);
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('acc_btn_active');
        console.log(i + " toggled");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
        

