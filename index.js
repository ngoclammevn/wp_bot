const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Xử lý phương thức POST
app.post('/', (req, res) => {
  res.send({
    message: 'Hello',
  });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
