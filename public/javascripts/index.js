window.onload = function (){
	var string = document.getElementsByClassName("cutout");
	var textlength = 200;
	for(var i = 0 ; i<string.length ; i++){
		string[i].innerHTML = cutstr(string[i].innerHTML,textlength);
	}
	var head = document.getElementById("head");
	var head_val = document.getElementById("head_val");
}
function cutstr(str,len)
{
	var str_length = 0;
	var str_len = 0;
	str_cut = new String();
	str_len = str.length;
	for(var i = 0;i<str_len;i++)
	{
		a = str.charAt(i);
		str_length++;
		if(escape(a).length > 4)
		{
			str_length++;
		}
		str_cut = str_cut.concat(a);
		if(str_length>=len)
		{
			str_cut = str_cut.concat("...");
			return str_cut;
		}
	}
	if(str_length<len){
		return str;
	}
}

function uplog(){
	var head = document.getElementById("head");
	var head_val = document.getElementById("head_val");
	head_val.value = head.value.substring(12);
}

