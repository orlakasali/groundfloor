const opt1 = document.getElemntById("payOption1");
const opt2 = document.getElemntById("payOption2");
const out = document.getElementById("totalOut");
const bord1 = document.getElementById("999");
const bord2 = document.getElementById("999");

bord1.setAttribute("style", "border: 2px solid green");

opt1.addEventlistener('click', function() {
    out.innerHTML = "<strong>N4,500</strong>";
    bord1.setAttribute("style", "border: 2px solid green");
    bord1.setAttribute("style", "border: 2px solid red");
});

opt2.addEventlistener('click', function() {
    out.innerHTML = "<strong>N7,500</strong>";
    bord1.setAttribute("style", "border: 2px solid green");
    bord1.setAttribute("style", "border: 2px solid red");
});