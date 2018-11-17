function ajax_tool(url,data,method,success){

	var ajax=new XMLHttpRequest();

	if(method=="get"){

		if(data){
			url+="?";
			url+=data;
		}else{

		}
		ajax.open(method,url);

		ajax.send();
	}else{

		ajax.open(method,url);

		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		if(data){
			ajax.send(data);
		}else{
			ajax.send();
		}
	}

	ajax.onreadystatechange=function(){

		if(ajax.readyState==4&&ajax.status==200){

			success(ajax.responseText);
		}
	}
}