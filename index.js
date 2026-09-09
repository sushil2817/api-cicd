import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/',(req,res)=>{
    return res.json({msg:"Hello From the server"})
})
app.get('/jyoti',(req,res)=>{
    return res.json({msg:"Hello JYOTI I'm from server"});
})


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})