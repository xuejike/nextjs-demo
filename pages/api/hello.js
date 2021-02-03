// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  req.socket.setNoDelay(true);
 res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive'
  });
//   res.statusCode = 200;
  res.write(':ok\n\n');
  setTimeout(function (){
    res.write(`event:xxxx\ndata:${new Date().toLocaleTimeString()}\n\r\n\r\n\r\n`)
  },1000)
  setTimeout(function (){
    res.write(`event:xxxx\ndata:${new Date().toLocaleTimeString()}\n\r\n\r\n\r\n`)
  },2000)
  setTimeout(function (){
    res.write(`event:xxxx\ndata:${new Date().toLocaleTimeString()}\n\r\n\r\n\r\n`)
  },3000)
  setTimeout(function (){
    res.end()
  },3001)
}
