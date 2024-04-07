const express = require('express')//
const app = express()
//const bodyParser = require('body-parser');
//app.use(bodyParser);
// create application/json parser
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3004
const auth = (req,res,  next) => {
	const headers = req.headers;
	if (headers['x-dsn']!='abcd-abcd')
	{
		res.send('Auth Failed');
		return;
	}
	next();
}
app.get('/',  (req, res) => {
	res.send('Hello Froilan!!!!!');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//express started

