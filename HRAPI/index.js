const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req , res)=>{
    try {
          res.json('WELCOME TO HQ API ');
    }catch(err){
         res.status(500).json({ERROR :err.message});
    }
});
app.get('/department', async(req , res)=>{
    try{
         const result = await pool.query('select d.department_name, count(e.employee_id) from departments d left join employees e on d.department_id = e.department_id group by d.department_name');
         res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/location', async(req , res)=>{
    try{
         const result = await pool.query(`select * from location`);
         res.json(result.rows);
    }catch(err){ 
        res.status(500).json({Error:err.message});
    }
});
app.get('/country', async(req , res)=>{
    try{
         const result = await pool.query('select count(country_id) from countries');
         res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/region', async(req , res)=>{
    try{
         const result = await pool.query('select count(region_id) from regions');
         res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/job_history' , async(req , res)=>{
    try{
        const result = await pool.query(`select `);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/employee' ,async(req ,res)=>{
    try{
        const result = await pool.query( ` select e.first_name, e.last_name, e.employee_id, j.job_title from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id where l.city = 'Toronto' `);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
const PORT = process.env.PORT;
app.listen(PORT,()=>{
  console.log(`connected Successfully....on PORT ${PORT}`);
})