const express = require('express');
const app = express();
const PORT = 3000;
app.get('/',(req,res) => {
	res.send("This is program6- DevOps Automated Pipeline");
  });
app.listen(PORT,() => {
	console.log(`Launched at ${PORT}`);
  });
