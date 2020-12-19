let i = 1;
export default function handler(req, res) {
    if (req.method === 'POST') {
      i++;
      
      res.status(200).end()
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ data: i }))
    }
  }