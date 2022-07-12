const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
require('./db/conn');
const Employee = require('./models/Schema');
app.use(express.json());

app.post('/employee',(req,res)=>{
	const data = new Employee(req.body);

	data.save().then(()=>{
		res.send(user);
	}).catch((e)=>{
		res.send(e);
	})
	console.log(req.body);
	
})

// getting api  from mongodb
app.get('/employee',async(req,res)=>{
    try{
     const result = await Employee.find().select({name:1}).sort({name:1}); 
       res.send(result);
    }catch(e)
    {
    	res.send(e);
    }
})


app.listen(port,()=>{
  console.log(`our page is listening on port ${port}`);
})