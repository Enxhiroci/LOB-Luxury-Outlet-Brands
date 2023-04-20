const express = require('express');

const postgres = require('postgres');

const sql = postgres({
    database: 'shop',
    username: 'postgres',
    password: 'erta123'
});

const app = express();

app.all('*', function(req, res, next) {
 
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await sql`
        select * from users
    `;

    res.json(users);
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    await sql`
    DELETE FROM users WHERE id = ${ id }
    `;

    res.statusCode = 200;
    res.end('User deleted');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    const user = await sql`
        select username, role from users where username = ${username} and password = ${password}
    `;

    console.log('user', user);

    if(user.length > 0) {
        res.statusCode = 200;
        res.end(user[0].role);
    } else {
        res.statusCode = 403;
        res.end('NOT NOT NOT OK');
    }
});

app.post('/login-admin', async (req, res) => {
    const { username, password } = req.body;

    const user = await sql`
        select username from users where username = ${username} and password = ${password} and role = 'admin'
    `;

    res.statusCode = user.length > 0 ? 200 : 403;
    res.end();
})

app.post('/users', async (req, res) => {  
    const { username, password, role } = req.body;

    if (!role) {
        res.statusCode = 400;
        res.json("No role provided");
        return;
    }
    
    await sql`
    insert into users (username, password, create_time, role)
    values (${username}, ${password}, now(), ${role})
    `;

    res.statusCode = 200;
    res.end('User was created');
})


app.listen(3001);