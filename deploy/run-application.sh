echo 'Сборка фрнотэнда'
cd ../
cd frontend/web
yarn install
yarn build

echo 'Сборка бэкэнда'
cd ../../
cd backend/web
mvn clean package

echo 'Контейнеризация'
cd ../../
cd deploy
docker-compose up -d --build
