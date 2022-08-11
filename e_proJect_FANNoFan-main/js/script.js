/* Show Password*/
// step 1
const ipcElement = document.querySelector('#InputPassword1')
const btcElement = document.querySelector('#btnPassword')

// step 2
btcElement.addEventListener('click', function() {
    // step 3
    const currentType = ipcElement.getAttribute('type')
    // step 4
    ipcElement.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})



// step 1
const ipdElement = document.querySelector('#InputPassword2')
const btdElement = document.querySelector('#btnPassword')

// step 2
btdElement.addEventListener('click', function() {
    // step 3
    const currentType = ipdElement.getAttribute('type')
    // step 4
    ipdElement.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})


/* Read more*/

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

/* Ranger Slider*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}










