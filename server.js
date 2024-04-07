const express = require('express')//
const app = express()
//const bodyParser = require('body-parser');
//app.use(bodyParser);
// create application/json parser
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3002
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
	res.send('Hello 3002!!!!!');
  })
app.get('/testgetrequest',  (req, res) => {
	res.send('Hello Froilan2');
  })
app.get('/testwithheader', auth,  (req, res) => {
  res.send('Hello World3! with header');
})
app.post('/testwithheader', auth ,jsonParser,  (req, res) => {
	//console.log(req.body);
	res.send('Hello World4! with header n body'+req.body.name);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//express started

