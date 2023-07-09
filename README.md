
django-admin startproject musicapp
python manage.py startapp api
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

# React setup

npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm install @material-ui/core
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons
Copy babel.config.js & webpack.config.js
Create src/index.js