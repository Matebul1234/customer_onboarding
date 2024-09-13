import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));

// db connected 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "login_client"
});

connection.connect((error) => {
    if (error) {
        console.error("Error in connection:", error);
    } else {
        console.log("Database connected");
    }
});

const saltRounds = 10;

// verify user
const verifyUser = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token) {
        return res.json({Error:"your are not Authenticated"});
    }else{
        jwt.verify(token,"secret_key_here",(err,decoded)=>{
            if(err){
                return res.json({Error:"Token is not okey"});
            }else{
                req.name = decoded.name;
                req.last_name = decoded.last_name;
                next();
            }
        })
    }

}

// register
app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`first_name`, `last_name`, `email`, `mobile`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
        if (err) {
            console.error("Error in hashing password:", err);
            return res.status(500).json({ message: 'Error in hashing password' });
        }

        const values = [
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.mobile,
            hash
        ];

        connection.query(sql, [values], (err, result) => {
            if (err) {
                console.error("Inserting data error in server:", err);
                return res.status(500).json({ error: "Error inserting data in the server" });
            }
            return res.status(200).json({ status: "Success", result });
        });
    });
});

app.post('/login',(req,res)=>{
    const sql = "select * from login where email =?";
    connection.query(sql, [req.body.email],(err,data)=>{
        if(err) return res.json({Error:"Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
                if(err) return res.json({Error:"password comparer error"});
                if(response){
                    const name = data[0].first_name
                    const last_name = data[0].last_name
                    const token = jwt.sign({name,last_name},"secret_key_here", {expiresIn:'1d'});
                    res.cookie('token',token);
                    return res.json({Status:"Success"});
                }else{
                    return res.json({Error:"password not matched"});
                }
            })
        }else{
            return res.json({Error:"No email exitsed"});
        }
    })
})

app.get('/',verifyUser,(req,res)=>{
 return res.json({Status:"Success",name:req.name,last_name:req.last_name});
})

app.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json({Status:"Success"});
})

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
