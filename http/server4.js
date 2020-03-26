const http = require ('http');
const fs = require ('fs');
const url = require ('url');
const qs = require ('querystring');

const parseCokies = (cookie = '') => 
     cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce ((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {};
const server = http.createServer((req, res) => {
    const cookies = parseCokies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        // console.log (req.url);
        const { query } = url.parse(req.url);
        // console.log(query);
        const { name } = qs.parse(query);
        // console.log(name);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const randomInt = +new Date();
        session[randomInt] = {
            name,
            expires,
        };
        console.log (typeof session);
        res.writeHead (302, {
            Location: '/',
            'Set-Cookie': `session=${randomInt}; \
            Expires=${expires.toGMTString()}; HttpOnly; path=/`
        });
        res.end ();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8' });
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        fs.readFile ('./assets/server4.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

server.listen(8084);
server.on ('listening', () => {
    console.log ('8084포트에서 서버 대기중 입니다.');
});
server.on ('error', (error) => {
    console.error (error);
});