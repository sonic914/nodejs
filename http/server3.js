const http = require ('http');

const parseCokies = (cookie = '') => {
    // console.log ('cookie: ', cookie);
    // let result = cookie.split(';');
    // console.log ('cookie.split(): ', result);
    // result = result.map(v => v.split('='));
    // console.log ('cookie.split().map(): ', result);
    // result = result.map(([k, ...vs]) => [k, vs.join('=')]);
    // console.log ('cookie.split().map().map(): ', result);
    // result = result.reduce((acc, [k,v]) => {
    //     acc[k.trim()] = decodeURIComponent(v);
    //     console.log ('cookie.split().map().map().reduce(): ', acc);
    //     return acc;
    // }, {});

    return cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce ((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

    }
const server = http.createServer((req, res) => {
    const cookies = parseCokies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead (200, { 'Set-Cookie':'mycookie2=test' });
    res.end ('Hello Cookie');
});

server.listen(8082);
server.on ('listening', () => {
    console.log ('8082포트에서 서버 대기중 입니다.');
});
server.on ('error', (error) => {
    console.error (error);
});