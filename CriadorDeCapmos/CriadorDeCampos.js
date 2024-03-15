function adicionarLinha(){
    let table = document.querySelector('table');
    let tr = document.createElement('tr');


    let numeroCampos = prompt("Quantos campos terão nesta linha? ");
    for(i = 0; i < numeroCampos; i++){
        let nomeTitulo = prompt("Qual será o título do " + (i+1) + "º campo?");
        let tipoDoCampo = prompt("Qual será o tipo do " + (i+1) + "º campo? 1-Texto 2-Número 3-Data 4-TextArea");
        let td = document.createElement("td");
        let tdTitulo = document.createElement("td");
        tdTitulo.innerHTML = nomeTitulo;

        let campo = "";
        switch(tipoDoCampo){
            case "1": {
                campo = document.createElement("input");
                campo.setAttribute("type", "text");
                break;
            } 
            case "2": {
                campo = document.createElement("input");
                campo.setAttribute("type", "number");
                break;
            } 
            case "3": {
                campo = document.createElement("input");
                campo.setAttribute("type", "date");
                break;
            } 
            case "4": {
                campo = document.createElement("textArea");
                break;
            } 
            
        }

        tr.appendChild(tdTitulo);
        td.appendChild(campo);
        tr.appendChild(td);
    }

    table.appendChild(tr);
}





