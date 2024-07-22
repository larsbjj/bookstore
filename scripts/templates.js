function getBookcardTemplate(index, imageSource) {
    return `<div class="book-card">
        <div class="header">
            <h2>${books[index].name}</h2>
            <img src="./assets/img/${books[index].cover}" alt="Book Cover" class="book-cover">
        </div>
        <hr class="solid">
        <div class="price-likes">
            <span class="price">${books[index].price} €</span>
            <span class="likes">${books[index].likes}</span>
            <img src="./assets/icons/${imageSource}" class="heart-icon" onclick="changeLikeCount(${index})" alt="Heart Icon">
        </div>
        <hr class="solid">
        <div class="details">
            <p><strong>Author</strong>: ${books[index].author}</p>
            <p><strong>Erscheinungsjahr</strong>: ${books[index].publishedYear}</p>
            <p><strong>Genre</strong>: ${books[index].genre}</p>
        </div>
        <hr class="solid">
        <div class="comments">
            <h3>Kommentare:</h3>
            <span id="comment-section${index}"></span>
        </div>
        <hr class="solid">
        <div class="comment-box">
            <input type="text" placeholder="Schreibe deinen Kommentar ..." id="input${index}">
            <img src="./assets/icons/sendicon.png" alt="Send Icon" onclick="saveComment(${index})">
        </div>
    </div>`
}


function getCommentsTemplate(bookCommentIndex) {
    return `<p><strong>[${bookCommentIndex.name}]</strong>: ${bookCommentIndex.comment}</p>`
}
    
