
var http = require("http");
export default function handler(req, resp) {
	
	var url=req.url.replace('/api/api?url=','');
	
	
	    
	        
	    var apihost="api101.zyapp.xyz";
	    var hostIndex=Math.round(Math.random()*10);
	    if(hostIndex>6){
	        apihost="api102.zyapp.xyz";
	    }
	    var body ='{}';
	    if(req.body!=null&&req.body!=undefined){
			body = req.body.toString();
		}
	    
	    
	    const options = {
	    hostname: apihost,
	    port: 80,
	    path: url,
	    method: req.method,
	    agent: false
	    };
	    var headers=req.headers;
	    delete headers['host'];
		 options.headers = headers;

	
	    options.headers['cdn-real-ip']=headers['x-real-ip'];
	    console.log('options',options)
		console.log('headers',headers)
	    const myreq = http.request(options, (res) => {
	    
	        let result= '' ;
	        
	        res.on('data', (buffer) => {
	            result+=buffer;
	            
	        });
	        res.on('end', (e) => {
	            console.log('responseHeader',res.headers)
	            console.log('response',result)
	           /*for(var key in res.headers){
	                resp.setHeader(key, res.headers[key])
	            }
				resp.flushHeaders();
			console.log('responseHeaders',resp.headers);
	        
	            resp.send(result);*/
				
				resp
				  .writeHead(res.statusCode, res.headers)
				  .end(result);
	    
	    	
	        });
	    });
	    	
	    myreq.on('error', (e) => {
	        
	        console.log('错误：',e)
	        /*resp.statusCode =500;
	        resp.setHeader('content-type', 'application/json')
	        resp.send(JSON.stringify(e))*/
			//resp.status(500).json(e)
	    });
	    if(req.method=='POST'){
	        myreq.write(body);
	    }
	    
	    myreq.end();
	
}
