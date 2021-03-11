 
   
    var spanResposta = document.querySelector('#resposta')
    var valorHora = document.querySelector('#valor-hora')
    var HorasProjeto = document.querySelector('#horas-projeto')
    function calcular() {  
      var valorProjeto = (valorHora.valueAsNumber * HorasProjeto.valueAsNumber).toFixed(2)
      spanResposta.textContent = "R$" + valorProjeto 

    } 
      

    function hora() {
      var data = new Date()
      var hora = data.getHours()    
      msg.innerHTML = `Faça seu orçamento!`  
     if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Faça o seu orçamento:`
      }else if (hora >=12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Faça o seu orçamento:`
      }else {
       msg.innerHTML = `Boa noite! Faça o seu orçamento:`
      }   







    }
   
  
  