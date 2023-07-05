"use strict";
var vVal1 = "";
var vVal2 = "";
var vOperator = "";
var vControl = 0;
(function () {
    var vValueAtual = document.getElementById("panelResult").innerText;
    vValueAtual = vValueAtual === "0" ? "" : vValueAtual;
    var elButton = document.querySelectorAll("button");
    elButton.forEach(function (elValue) {
        elValue.addEventListener("click", function (e) {
            var vValue = e.target.innerText;
            fCalc(vValue);
        });
    });
    var fCalc = function (v) {
        var vValue1 = document.getElementById("panelCalc").innerText;
        var vValue2 = document.getElementById("panelResult").innerText;
        if (v === "C") {
            vValueAtual = "0";
            document.getElementById("panelCalc").innerHTML = "";
            document.getElementById("panelResult").innerHTML = "0";
        }
        else if (v === "Del") {
            console.log("apagar");
        }
        else if (v === "%") {
            console.log("percentual");
        }
        else if (v === "/") {
            console.log("dividir");
        }
        else if (v === "x") {
            console.log("mulltiplicar");
        }
        else if (v === "-") {
            console.log("diminuie");
        }
        else if (v === "+") {
            fOperator("+");
            document.getElementById("panelCalc").innerHTML = vValueAtual + " + ";
            //vValueAtual = "0"
            document.getElementById("panelResult").innerHTML = vValueAtual;
            console.log("somar");
        }
        else if (v === "=") {
            fOperator("=");
            var vResult = eval(vValue1 + vValue2);
            document.getElementById("panelCalc").innerHTML = vValue1 + vValue2 + " =";
            document.getElementById("panelResult").innerHTML = vResult;
            console.log(vVal1 + vOperator + vVal2);
            console.log(vResult);
        }
        else if (v === ",") {
            if (vValueAtual.indexOf(",") <= 0) {
                vValueAtual += vValueAtual === "" ? "0" + v : v;
                document.getElementById("panelResult").innerHTML = (vValueAtual.indexOf(",") <= 0) ? parseInt(vValueAtual) : vValueAtual;
            }
        }
        else {
            vValueAtual += v;
            vValueAtual = ((vValueAtual.indexOf(",") <= 0) ? parseInt(vValueAtual) : vValueAtual) + "";
            document.getElementById("panelResult").innerHTML = vValueAtual;
        }
    };
    var fOperator = function (op) {
        if (vVal1.length <= 0) {
            vVal1 = vValueAtual;
        }
        else {
            vVal2 = vValueAtual;
        }
        vOperator = op === "=" ? vOperator : op;
    };
})();
