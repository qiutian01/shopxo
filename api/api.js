
var http = require("http");
export default function handler(req, resp) {
	resp.status(200).json({
	  body: req.body,
	  query: req.query,
	  cookies: req.cookies,
	  headers: req.headers,
	  method : req.method,
	
	});
	console.log('aaa',req);
	
}
