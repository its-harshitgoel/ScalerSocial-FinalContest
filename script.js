let textArea = document.querySelector('.textarea-cont');
let postButton = document.querySelector('.post-button');
let ticketCont = document.querySelector('.right-container');
let mainCont = document.querySelector('.right-container');
let likeBut = document.querySelector('.like-button');
let delBut = document.querySelector('delete-but')

postButton.addEventListener('click', function (e) {   
        let enteredText = textArea.value.trim();
        console.log(enteredText);
        if (enteredText !== "") {
            enteredText = enteredText.replace(/\n/g, '<br>');
            generateTicket(enteredText);
            textArea.value = "";
    }
});

function generateTicket(text) {
    let ticketCont = document.createElement('div');
    ticketCont.className = 'ticket';
    ticketCont.innerHTML = `
    <div class="image-cont"><img src="assets/image.png"></div>
    <div class="text-cont">
        <div class="head">
            <div class="username">Harshit Goel @harshitgoel</div>
            <div class="edit-del">
                <img src="assets/Vector.png">
                <img src="assets/delete.png">
            </div>
        </div>
        <div class="below">
            <div class="textArea">
                ${text}
            </div>
            <div class="comment-like">
                <img src="assets/comment.png">
                <img src="assets/like.svg" class="like-button">
            </div>
        </div>
    </div>`;
    mainCont.appendChild(ticketCont);
}

likeBut.addEventListener('click', function(){
    likeBut.classList.toggle("colorred");
})

delBut.addEventListener('click', function(){
    console.log("print")
})