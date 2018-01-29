var app = {
		instanteAtual : new Date(),
		ponteiroSeg : document.getElementById("ponteiro-segundos"),
		ponteiroMin : document.getElementById("ponteiro-minutos"),
		ponteiroHr : document.getElementById("ponteiro-horas"),
		relogioDigital : document.getElementById("relogio-digital"),
		grausSeg : 0,
		grausMin : 0,
		grausHr : 0
	};


var hora = app.instanteAtual.getHours();
var minuto = app.instanteAtual.getMinutes();
var segundo = app.instanteAtual.getSeconds();

function initialize() {
	app.grausSeg = (segundo-1)*6;
	app.grausMin = (minuto)*6;
	app.grausHr = (hora > 12) ? (hora-13)*36 : ((hora -1)*36);
	app.ponteiroSeg.setAttribute("transform", "rotate("+app.grausSeg+" 150,150)");
	app.ponteiroMin.setAttribute("transform", "rotate("+app.grausMin+" 150,150)");
	app.ponteiroHr.setAttribute("transform", "rotate("+app.grausHr+" 150,150)");
	atualizaRelogio();
}

function atualizaInstanteAtual() {
	app.instanteAtual = new Date();
	hora = app.instanteAtual.getHours();
	minuto = app.instanteAtual.getMinutes();
	segundo = app.instanteAtual.getSeconds();
}


function atualizaRelogio() {

	atualizaInstanteAtual();

    strSegundo = new String (segundo)
    if (strSegundo.length == 1)
       segundo = "0" + segundo;

    strMinuto = new String (minuto)
    if (strMinuto.length == 1)
       minuto = "0" + minuto;

    strHora = new String (hora)
    if (strHora.length == 1)
       hora = "0" + hora;

    horaFormatada = hora + " : " + minuto + " : " + segundo;

    app.relogioDigital.value = horaFormatada;
	
	app.grausSeg += 6;

	app.ponteiroSeg.setAttribute("transform", "rotate("+app.grausSeg+" 150,150)");		

	if (app.grausSeg == 360) {
		app.grausSeg = 0;
		app.grausMin += 6;
		app.ponteiroMin.setAttribute("transform", "rotate("+app.grausMin+" 150,150)");
	}

	if (app.grausMin == 360) {
		app.grausMin = 0;
		app.grausHr += 6;
		app.ponteiroHr.setAttribute("transform", "rotate("+app.grausHr+" 150,150)");
	}


    setTimeout("atualizaRelogio()",1000);
}

initialize();