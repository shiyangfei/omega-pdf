cd public
bower i && npm i
cd ../server
npm i
cd ./template
bower i

cd ..
pm2 start index.js --name omega-pdf
