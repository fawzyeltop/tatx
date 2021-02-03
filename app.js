/*@ here we include express-framework @*/
const express = require('express');
const app = express();
/*@ here we include express-framework @*/

/*@ here we include Helmet  @*/
const helmet = require('helmet');
app.use(helmet());
/*@ here we include Helmet  @*/

/*@ here we include third-party middleware => Morgan @*/
const morgan = require('morgan');
app.use(morgan('dev'));
/*@ here we include third-party middleware => Morgan @*/

/*@ here we include third-party middleware => Cookie-Parser @*/
const cookieParser = require('cookie-parser');
app.use(cookieParser());
/*@ here we include third-party middleware => Cookie-Parser @*/

/*@ here we include third-party middleware => Csurf' @*/

/*@ Environment Variables @*/
require("dotenv").config({ path: __dirname + "/.env" });
/*@ Environment Variables @*/

/*@ here we include static-files @*/
const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
/*@ here we include static-files @*/

/*@ here we set-up template-engine @*/
app.set('view engine', 'ejs');
/*@ here we set-up template-engine @*/

/*@ Include all Routes @*/

const Home = require('./routes/Home');
app.use('/', Home);

const About = require('./routes/About');
app.use('/about', About);

const Contact = require('./routes/Contact');
app.use('/contact', Contact);

const Faq = require('./routes/Faq');
app.use('/faq', Faq);

const Terms = require('./routes/Terms');
app.use('/terms', Terms);

const Privacy = require('./routes/Privacy');
app.use('/privacy', Privacy);

/*@ Include all Routes @*/

/*@ Handle Error 404 not found @*/
app.use((req, res, next) => {
    res.render('error');
    next();
});
/*@ Handle Error 404 not found @*/

/*@ here the server is running on port 3000 @*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Running on Port: 3000");
});
/*@ here the server is running on port 3000 @*/