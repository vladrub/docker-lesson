# docker-lesson

``
docker build --tag express-lesson . # Сборка образа
docker images # Посмотреть список всех образов
docker run --rm -d --name express -p 8080:3000 express-lesson # Запуск контейнера из образа
docker stop express # Остановка контейнера
``