// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  req.socket.setNoDelay(true);

  res.statusCode = 200;
  res.write(':ok\n\n');
  res.end();
}
