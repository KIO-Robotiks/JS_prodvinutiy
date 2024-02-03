function addReview() {
    // Получаем данные от пользователя
    const productName = document.getElementById("productName").value;
    const reviewText = document.getElementById("reviewText").value;

    if (productName && reviewText) {
        // Создаем объект отзыва
        // const review = {
        //     product: productName,
        //     text: reviewText
        // };

        // Проверяем, есть ли уже отзывы для данного продукта
        const existingReviews = JSON.parse(localStorage.getItem(productName)) || [];

        // Добавляем новый отзыв
        existingReviews.push(reviewText);

        // Сохраняем обновленные отзывы в LocalStorage
        localStorage.setItem(productName, JSON.stringify(existingReviews));

        // Очищаем поля ввода
        document.getElementById("productName").value = "";
        document.getElementById("reviewText").value = "";

    } else {
        alert("Заполните все поля!");
    }
}