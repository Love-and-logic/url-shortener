An updated version of MMART162 Group Final Project
Group Members: Ehidin, Ej, Morgan

Notes:

Generated using AJAX (material learned from last semester's MMART168 course).
Supplemented with Ricky & Sarah's mongo-demo repo and coligo's tutorial by Fady Makram : https://coligo.io/create-url-shortener-with-node-express-mongo/

Other notes to remember--
Open 4 terminals
- start the MongoDB service using 'monogd'
- Use the MongoDB Terminal Client using 'mongo'
- Create (insert) an entry on a database, I used customshortener via command: db.counters.insert({_id: 'url_count', seq: 1})
- cd to where app.js file is stored -- and run node app.js


Front end view--
* User inputs URL into form field, clicks "Shorten"
* A url is generated via using a counter. The link is clickable and redirects to particular page
