# docker-lesson

``
docker system prune # Удаляет неиспользуемые образы
docker system prune --all # Полная очистка
docker ps # просмотр запущеных контейнеров
docker ps -a # просмотр всех контейнеров
docker ps -aq # просмотр всех контейнеров
docker rm 075744cdc621 # удаляет контейнер
docker rm $(docker ps -qa) # удаление всех контейнеров
docker run --name test node-lesson # Запуск контейнера из образа node-lesson с именем test
docker run --name test -d node-lesson # Запуск контейнера из образа node-lesson с именем test  в фоновом режиме
docker stop test # Остановка контейнера с именем test
docker run --name test -d --rm node-lesson # Запуск контейнера из образа node-lesson с именем test  в фоновом режиме и удалением после завершения
``