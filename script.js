function render() {
    getFromLocalStorage();
    renderBooks();
}


function renderBooks() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    
    for (let index = 0; index < books.length; index++) {
        let imageSource = checkIfLiked(index);
        contentRef.innerHTML += getBookcardTemplate(index, imageSource);
        let bookComments = books[index].comments;
        renderComments(index, bookComments);
    }
}


function renderComments(index, bookComments) {
    let commentContentRef = document.getElementById('comment-section' + index);
    commentContentRef.innerHTML = '';

    for (let index = 0; index < bookComments.length; index++) {
        let bookCommentIndex = bookComments[index];
        commentContentRef.innerHTML += getCommentsTemplate(bookCommentIndex);
    }
}


function saveComment(index) {
    let inputId = 'input' + index;
    let input = document.getElementById(inputId);
    let inputValue = input.value;

    if (inputValue == '') {
        return;
    }

    books[index].comments.push({name: 'LarsS', comment: inputValue});
    saveToLocalStorage();
    render();
}


function saveToLocalStorage(){
    localStorage.setItem('books', JSON.stringify(books));
}


function getFromLocalStorage() {
    let retrievedObject = JSON.parse(localStorage.getItem('books'));
    if (retrievedObject === null) {
        return;
    }
    books = retrievedObject;
}


function checkIfLiked(index) {
    if (books[index].liked === true) {
        imageSource = 'filledhearticon.png';
    } else if (books[index].liked === false) {
        imageSource = 'hearticon.png'
    }
    return imageSource;
}


function changeLikeCount(index) {
    let likeStatus = books[index].liked;
    if (likeStatus === true) {
        books[index].liked = false;
        books[index].likes -= 1;
    } else if (likeStatus === false) {
        books[index].liked = true;
        books[index].likes += 1;
    }
    saveToLocalStorage();
    render();
}