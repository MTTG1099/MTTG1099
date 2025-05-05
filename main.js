


function changeBackground() {
    const images = [
        "url('https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910')",
        "url('https://preview.redd.it/where-can-i-get-the-windows-vista-wallpaper-in-the-best-v0-1lu31x1angtb1.jpg?width=1080&crop=smart&auto=webp&s=cdf84bfb384f85a44c9e7341e63810885d85e5ab')",
        "url('https://preview.redd.it/m0zhfbiq61v21.png?auto=webp&s=a33df442f3a83d062e777faba8dcf9466a438b77')"
    ];

    const randomimage = images[Math.floor(Math.random() * images.length)];

    document.body.style.backgroundImage = randomimage;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        changeBackground();
    }


});

function refreshPage(){
    window.location.reload();
}

document.getElementById("button").addEventListener("click", function() {
    refreshPage();
});

