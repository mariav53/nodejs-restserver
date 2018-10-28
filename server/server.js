require ('./config/config');
const express = require('express')
const app = express();

const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))


// create application/json parser
app.use(bodyParser.json())


app.get('/user', (req, res) => {
  res.json('get user');
});

app.post('/user',(req, res) => {
//    res.json('post user');

  let body = req.body;

  if(body.name === undefined) {
    res.status (400).json({
      ok:false,
      message: "Name is required"
    });
  } else {
    res.json({
      person: body
    });
  }
});

app.put('/user/:id', function (req, res) {

  let id = req.params.id;
  res.json({
    id // || id:id
  });
});

app.listen(process.env.PORT, () => {
  console.log('escuchando puerto 3000');
})
