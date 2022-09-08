
var http = require("http");
export default function handler(req, resp) {
	req.status(200).json({
	  body: req.body,
	  query: req.query,
	  cookies: req.cookies,
	  headers: req.headers,
	  method : req.method,
	
	});
	console.log('aaa',req);
	
}
