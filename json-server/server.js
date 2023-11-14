const port = process.env.PORT || 3000;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
