import {Controller, Get} from '@tsed/common';

@Controller('/test')
export class TestController {

    @Get('/')
    public test() {
        console.log('Test');
        return 'test';
    }
}