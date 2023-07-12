import Hapi, { server } from '@hapi/hapi';

const start = async () => {
    const server = Hapi.Server({
        port:8000,
        host:'localhost'
    });

    server.route({
        method:'GET',
        path:'/hello',
        handler: (req,res) => {
            return 'Hello!';
        }
    });
    await server.start();
    console.log(`Server is listneing on ${server.info.url}`);
}



process.on('unhandledRejection',err => {
    console.log(err);
    process.exit(1);
});

start();