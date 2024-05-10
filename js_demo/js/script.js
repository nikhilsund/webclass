function askQuestion() {
    var q = prompt ('How much wood would a woodchuck chuck if a woodchuck could chuck wood');
    if (q !=null) {
        document.getElementById('question') .innerHTML= ' Damn ' + q + ' thats a lot of wood'
    }
}

function showimage() {
    var image=document.getElementById
    ('king-julien');
    image.src = "images/mortdance.gif";
}