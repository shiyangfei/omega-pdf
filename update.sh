cd public
bower i && npm i
cd ../server
npm i
cd ./template
bower i

cd ..
pm2 stop omega-pdf
pm2 start index.js --name omega-pdf
