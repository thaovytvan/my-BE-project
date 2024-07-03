const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./src/routes/user.route');
const postRouter = require('./src/routes/post.route');

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Sample app listening at http://localhost:${port}`);
});
