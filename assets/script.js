$(document).ready(function() {
    $(document).on("change", "#customSwitch1", function darkMode() {
        $("body").toggleClass("body-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $("label").text(function(i, text){
          return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
        })
        $("footer").toggleClass("footer-dark");
        $("a").toggleClass("anchor-styling-dark");
    });
})