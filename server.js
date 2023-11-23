const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//importing the htmlroutes
const routes = require('./routes/html-routes');
// Import the router and api routes
const api = require('./routes/api-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

app.use('/api', api);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);