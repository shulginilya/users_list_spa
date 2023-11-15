const jsonServer = require('json-server');
const cors = require('cors');

const port = process.env.PORT || 3000;
const server = jsonServer.create();
server.use(cors());
const router = jsonServer.router('db.json');

server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
