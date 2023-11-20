// Create web server
+// 1. Create a web server
+// 2. Create a route for the home page
+// 3. Create a route for the about page
+// 4. Create a route for the contact page
+// 5. Create a route for the 404 page
+// 6. Start and listen on the web server
+
+// 1. Create a web server
+const express = require('express');
+const app = express();
+
+// 2. Create a route for the home page
+app.get('/', (request, response) => {
+    response.send('This is the home page');
+});
+
+// 3. Create a route for the about page
+app.get('/about', (request, response) => {
+    response.send('This is the about page');
+});
+
+// 4. Create a route for the contact page
+app.get('/contact', (request, response) => {
+    response.send('This is the contact page');
+});
+
+// 5. Create a route for the 404 page
+app.use((request, response) => {
+    response.status(404).send('Page not found');
+});
+
+// 6. Start and listen on the web server
+app.listen(3000, () => {
+    console.log('Server started on port 3000');
+});