const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (request, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (request, res) => {
  const enteredGoal = request.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  let body = '';
    filePath = __dirname + '/public/data.txt';
    body += userGoal;
    fs.appendFile(filePath, body, (err) => {
        if (err) {
          console.log(err);
        }
      });

  res.redirect('/');
});

app.listen(80);
