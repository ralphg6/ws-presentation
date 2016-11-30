var conn;

function openConn(){
	conn = new WebSocket("ws://"+location.hostname+":8080/ws");
    conn.onclose = function(evt) {
		console.log("Connection closed");
		setTimeout(openConn, 3000);
    }
    conn.onmessage = function(evt) {
		var url = location.href
		location.href = "#"+evt.data;
		history.replaceState(null,null,url);
    }
}

if (window["WebSocket"]) {
    openConn();
} else {
	document.body.innerHTML = "<b>Your browser does not support WebSockets.</b>";
} 