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

// deleting process
app.delete('/employee/:id',async(req,res)=>{
    try{
    	const deletedata = await Employee.findByIdAndDelete(req.params.id);
    	if(!req.params.id)
    	{
    		res.status(400).send('Error');
    	}
    	res.send(deletedata);
    }catch(e)
    {
    	res.status(500).send(e);
    }
})

app.listen(port,()=>{
  console.log(`our page is listening on port ${port}`);
})