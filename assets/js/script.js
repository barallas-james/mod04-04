function reuseAdd(add){


	document.getElementById('col-1').classList.add("col-lg-" + add);
	document.getElementById('col-2').classList.add("col-lg-" + add);
	document.getElementById('col-3').classList.add("col-lg-" + add);
	document.getElementById('col-4').classList.add("col-lg-" + add);
	document.getElementById('col-5').classList.add("col-lg-" + add);
	document.getElementById('col-6').classList.add("col-lg-" + add);
	document.getElementById('col-7').classList.add("col-lg-" + add);
	document.getElementById('col-8').classList.add("col-lg-" + add);
	document.getElementById('col-9').classList.add("col-lg-" + add);
	document.getElementById('col-10').classList.add("col-lg-" + add);
	document.getElementById('col-11').classList.add("col-lg-" + add);
	document.getElementById('col-12').classList.add("col-lg-" + add);

}

function remove(add){

	document.getElementById('col-1').classList.remove("col-lg-" + add);
	document.getElementById('col-2').classList.remove("col-lg-" + add);
	document.getElementById('col-3').classList.remove("col-lg-" + add);
	document.getElementById('col-4').classList.remove("col-lg-" + add);
	document.getElementById('col-5').classList.remove("col-lg-" + add);
	document.getElementById('col-6').classList.remove("col-lg-" + add);
	document.getElementById('col-7').classList.remove("col-lg-" + add);
	document.getElementById('col-8').classList.remove("col-lg-" + add);
	document.getElementById('col-9').classList.remove("col-lg-" + add);
	document.getElementById('col-10').classList.remove("col-lg-" + add);
	document.getElementById('col-11').classList.remove("col-lg-" + add);
	document.getElementById('col-12').classList.remove("col-lg-" + add);

}

document.getElementById('1').onclick = () => {

	reuseAdd(12);
	remove(6);
	remove(4);
	remove(3);
	remove(2);
	remove(1);

}

document.getElementById('2').onclick = () => {

	remove(12);
	reuseAdd(6);
	remove(4);
	remove(3);
	remove(2);
	remove(1);


}

document.getElementById('3').onclick = () => {

	remove(12);
	remove(6);
	reuseAdd(4);
	remove(3);
	remove(2);
	remove(1);

}

document.getElementById('4').onclick = () => {

	remove(12);
	remove(6);
	remove(4);
	reuseAdd(3);
	remove(4);
	remove(2);
	remove(1);

}

document.getElementById('6').onclick = () => {

	remove(12);
	remove(6);
	remove(4);
	remove(3);
	remove(4);
	reuseAdd(2);
	remove(1);

}

document.getElementById('12').onclick = () => {

	remove(12);
	remove(6);
	remove(4);
	remove(3);
	remove(4);
	remove(2);
	reuseAdd(1);

}


