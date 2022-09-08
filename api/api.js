var getRawBody = require('raw-body');
var body = require('body');
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
	/*var params = {
	        path: req.path,
	        queries: req.query,
	        headers: req.header,
	        method : req.method,
	        requestURI : req.url,
	        clientIP : req.clientIP,
	    }
	    
	    var tmpUrls=req.url.split('?');
	    var queryStr='';
	    if(tmpUrls.length==2){
	        queryStr=tmpUrls[1];
	    }
	        
	    getRawBody(req, (err, body)=> {
	        var apihost="api101.zyapp.xyz";
	        var hostIndex=Math.round(Math.random()*10);
	        if(hostIndex>6){
	            apihost="api102.zyapp.xyz";
	        }
	        
	    
	        var pathStr=params.path;
	        if(queryStr.length>0){
	            pathStr+='?'+queryStr;
	        
	        }
	        params.body = body.toString();
	        //console.log('path',pathStr)
	        const options = {
	        hostname: apihost,
	        port: 80,
	        path: pathStr,
	        method: params.method,
	        agent: false
	        };
	        
	        delete params.headers['host'];
	        options.headers = params.headers;
	        
	        options.headers['x-real-ip']=req.clientIP;
	        options.headers['x-forwarded-for']=req.clientIP;
	        options.headers['cdn-real-ip']=req.clientIP;
	        
	        const myreq = http.request(options, (res) => {
	        
	            let result= '' ;
	            
	            res.on('data', (buffer) => {
	                result+=buffer;
	                
	            });
	            res.on('end', (e) => {
	                //console.log('responseHeader',res.headers)
	                //console.log('response',result)
	               for(var key in res.headers){
	                    resp.setHeader(key, res.headers[key])
	                }
	            
	                resp.send(result);
	        
	
	            });
	        });
	
	        myreq.on('error', (e) => {
	            console.log('params',params)
	            console.log('错误：',e)
	            resp.setStatusCode(500);
	            resp.setHeader('content-type', 'application/json')
	            resp.send(JSON.stringify(e))
	        });
	        if(params.method=='POST'){
	            myreq.write(params.body);
	        }
	        
	        myreq.end();
	
	        
	    }); */
  
}
