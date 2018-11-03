import {ServerLoader, ServerSettings, IServerLifecycle} from '@tsed/common';
import Path = require('path');
import * as Express from 'express';

@ServerSettings({
    rootDir: Path.resolve(__dirname),
    acceptMimes: ['application/json'],
    port: 3400,
    mount: {
        '/api': '${rootDir}/**/*.js'
    }
})
export class Server extends ServerLoader implements IServerLifecycle {
    constructor() {
        super();
    }

    public $onReady() {
        console.log('Server started....');
    }

    public $onMountingMiddleware() {
        console.log('On mounting middleware ', Path.resolve(__dirname, 'dist'));
        this.use(Express.static(Path.resolve(__dirname, 'dist')));
    }
}

const server = new Server();
server.start();