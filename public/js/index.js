"use strict";
var vVal1 = "";
var vVal2 = "";
var vOperator = "";
var vControl = 0;
(function () {
    var vCurrentValue = document.getElementById("panelResult").innerText;
    vCurrentValue = vCurrentValue === "0" ? "" : vCurrentValue;
    var elButton = document.querySelectorAll("button");
    elButton.forEach(function (elValue) {
        elValue.addEventListener("click", function (e) {
            var vKey = e.target.id;
            fCalc(vKey.replace("n", ""));
        });
    });
    var fCalc = function (v) {
        var vResult = "";
        switch (v) {
            case "cc":
                vCurrentValue = "0";
                vVal1 = "";
                vVal2 = "";
                vOperator = "";
                vControl = 0;
                document.getElementById("panelCalc").innerHTML = "";
                document.getElementById("panelResult").innerHTML = "0";
                break;
            case "del":
            case "pe":
            case "di":
                fOperator("/");
                break;
            case "mu":
                fOperator("*");
                break;
            case "su":
                fOperator("-");
                break;
            case "so":
                fOperator("+");
                break;
            case "ig":
                fOperator("=");
                vResult = eval(vVal1 + vOperator + vVal2);
                document.getElementById("panelCalc").innerHTML = vVal1 + vOperator + vVal2 + " =";
                document.getElementById("panelResult").innerHTML = vResult;
                break;
            case "vi":
                if (vCurrentValue.indexOf(",") <= 0) {
                    vCurrentValue += vCurrentValue === "" ? "0" + v : v;
                    document.getElementById("panelResult").innerHTML = (vCurrentValue.indexOf(",") <= 0) ? parseInt(vCurrentValue) : vCurrentValue;
                }
                break;
            default:
                vCurrentValue += v;
                vCurrentValue = ((vCurrentValue.indexOf(",") <= 0) ? parseInt(vCurrentValue) : vCurrentValue) + "";
                if (vOperator.length <= 0) {
                    vVal1 = vCurrentValue;
                }
                else {
                    vVal2 = vCurrentValue;
                }
                document.getElementById("panelResult").innerHTML = vCurrentValue;
        }
    };
    var fOperator = function (op) {
        if (op === "=") {
            console.log('[' + vResult + ']');
            if (vVal1.length > 0 && vOperator.length > 0) {
                vCurrentValue = vVal1;
            }
        }
        vOperator = op === "=" ? vOperator : op;
        document.getElementById("panelCalc").innerHTML = vCurrentValue + op;
        vCurrentValue = "";
    };
})();
