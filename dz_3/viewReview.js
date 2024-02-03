function showViewReviews() {

    // Получаем все продукты, для которых есть отзывы
    const products = Object.keys(localStorage);

    // Выводим список продуктов
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let li = document.createElement("li");
        li.textContent = products[i];
        li.onclick = function() {
            showReviews(this.textContent);
        };
        productList.appendChild(li);
    }
}

function showReviews(productName) {
    // Получаем отзывы для выбранного продукта
    const reviews = JSON.parse(localStorage.getItem(productName));

    // Выводим отзывы
    let reviewsContainer = document.getElementById("reviewsContainer");
    reviewsContainer.innerHTML = "";

    for (let i = 0; i < reviews.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = "<strong>" + productName + "</strong>: " + reviews[i] +
            ' <button onclick="deleteReview(\'' + productName + '\', ' + i + ')">Удалить</button>';
        reviewsContainer.appendChild(div);
    }
}

function deleteReview(productName, index) {
    // Получаем отзывы для выбранного продукта
    let reviews = JSON.parse(localStorage.getItem(productName));

    // Удаляем выбранный отзыв
    reviews.splice(index, 1);

    // Обновляем отзывы в LocalStorage
    localStorage.setItem(productName, JSON.stringify(reviews));

    // Перезагружаем отзывы для выбранного продукта
    showReviews(productName);
}

showViewReviews();