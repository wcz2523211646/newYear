function setDate(){
	var data = new Date();
	var yy = data.getFullYear();
	var mm = data.getMonth()+1;
	var dd = data.getDate();
	var box = document.getElementById('box');
//	console.log(yy + '年' + mm + '月' + dd + '日');
	var datt = yy + '年' + mm + '月' + dd + '日';
	return datt;
}

box.append(setDate());
