//Dropdown Menu
function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide");
}


//Shows last updated
function time() {
    var days = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dayofweek = days[date.getDay()];
    var monthofyear = months[date.getMonth()];
    var fulldate = dayofweek + ", " + date.getDate() + " " + monthofyear + " " + date.getFullYear();
    document.getElementById("datetime").innerHTML = fulldate;
}
//Loads date and time
window.addEventListener("load", time())

function last() {
    const date = new Date(document.lastModified);

    let hours = date.getHours();
    if (hours > 12) { hours -= 12; }

    let seconds = date.getSeconds();
    if (seconds < 10) {
        let sec = seconds.toString();
        seconds = "0" + sec;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        let min = minutes.toString();
        minutes = "0" + min;
    }

    document.getElementById("timedisp").textContent = (date.getMonth() + 1) + "/" + (date.getDate())
        + "/" + date.getFullYear() + "  " + hours + ":" + minutes + ":" + seconds;

}
//Loads date and time
window.addEventListener("load", last());

//Close banner
document.addEventListener("DOMContentLoaded", function () {
    const closeBannerButton = document.getElementById("closeBanner");
    const banner = document.getElementById("banner");

    closeBannerButton.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
