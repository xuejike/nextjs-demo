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
        res.write(':ok\n\n');

    res.end()
  },2000)
}
