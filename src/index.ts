(() => {
    let vValueAtual = document.getElementById("panelResult").innerText
    
    vValueAtual = vValueAtual==="0" ? "" : vValueAtual
    
    const elButton = document.querySelectorAll("button")
    
    elButton.forEach((elValue)=>{
        elValue.addEventListener("click", (e) => {
            const vValue = e.target.innerText
            
            fCalc(vValue)
        })
   });

   const fCalc = (v) => {
   
        if (v === "C") {
            vValueAtual = "0"
            document.getElementById("panelResult").innerHTML = "0"

        } else if (v === "Del") {
            console.log("apagar")

        } else if (v === "%") {
            console.log("percentual")

        } else if (v === "/") {
            console.log("dividir")

        } else if (v === "x") {
            console.log("mulltiplicar")

        } else if (v === "-") {
            console.log("diminuie")

        } else if (v === "+") {
            console.log("somar")

        } else if (v === "=") {
            console.log("igual")
        
        } else if (v === ",") {

            if (vValueAtual.indexOf(",") <= 0) {
                vValueAtual += vValueAtual==="" ? "0" + v : v
                
                document.getElementById("panelResult").innerHTML = (vValueAtual.indexOf(",")<=0) ? parseInt(vValueAtual) : vValueAtual
            }

        } else {
            vValueAtual += v
            vValueAtual = (vValueAtual.indexOf(",")<=0) ? parseInt(vValueAtual) : vValueAtual
            
            document.getElementById("panelResult").innerHTML = vValueAtual
            
            //vValueAtual = vValorNovo
    
        }
console.log(vValueAtual)
   }

})();