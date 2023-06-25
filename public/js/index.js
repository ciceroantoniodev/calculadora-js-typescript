"use strict";
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
        if (v === "C") {
            vValueAtual = 0;
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
            console.log("somar");
        }
        else if (v === "=") {
            console.log("igual");
        }
        else {
            if (v === ",") {
                if (vValueAtual.indexOf(",") <= 0) {
                    vValueAtual += vValueAtual === "" ? "0" + v : v;
                }
            }
            else {
                vValueAtual += vValueAtual === "" ? "0" : v;
            }
            document.getElementById("panelResult").innerHTML = vValueAtual;
            //vValueAtual = vValorNovo
        }
    };
})();
