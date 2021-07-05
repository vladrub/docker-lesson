# docker-lesson

``
docker build --tag volumes-lesson . # Сборка образа
docker run --rm -d --name volumes -p 8080:3000 -v H:\education\docker-lesson\3-Volumes\data\:/app/data volumes-lesson # Запуск контейнера из образа
docker stop volumes # Остановка контейнера
``