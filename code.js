


let timePlayer = Math.floor(Math.random() * 10 ) ;
let letter  ;

function change(element, button){

    if(timePlayer%2==0){
        letter = "x" ;
        document.querySelector("#spanTime").innerHTML = "Bolinha"
    }else{
        letter = "o"
        document.querySelector("#spanTime").innerHTML = "Xizinho"
    }
    element.setAttribute("src","image/"+letter+".png");
    button.setAttribute("value",letter);
    console.log(button.getAttribute("value")) ;
    
}


window.onload = () => {
    
    //nesse trexo de código consegui definir todos os botoes com a classe BOX para serem clicáveis (onclick)
    for(let i=0;i<document.querySelectorAll(".box").length;i++){
        document.querySelectorAll(".box")[i].onclick = function(){
            element = document.querySelectorAll(".pic")[i];
            button = document.querySelectorAll(".box")[i];
            timePlayer ++ ;
            console.log(timePlayer);
            change(element, button)
            verificaQuemGanhou(button)
        }
    }

}

//possibilidades
//pos == 0 && pos == 1 && pos == 2
//pos == 0 && pos == 4 && pos == 8
//pos == 0 && pos == 3 && pos == 6
//pos == 2 && pos == 4 && pos == 6
//pos == 2 && pos == 5 && pos == 8
//pos == 2 && pos == 1 && pos == 0
//pos == 1 && pos == 4 && pos == 7
//pos == 3 && pos == 4 && pos == 5
//pos == 6 && pos == 7 && pos == 8

function verificaQuemGanhou(button){

    // arrayButtons = [];
    // arrayButtons.push(button)
    console.log(button)

    let letterChoiced = button.getAttribute("value");

    let linhas = [];

    //A lógica é a seguinte: 'linhas' é um array de boleano
    //Logo, ele faz o push de um false ou true
    //que é feito com o operador '&&', 
    //que retorna true caso a codição de o valor de todos os objetos pegados seja igual  

    //if pos == 0 && pos == 1 && pos == 2 then return TRUE 
    linhas.push(document.querySelector(".box0").value == letterChoiced &&
    document.querySelector(".box1").value == letterChoiced && 
    document.querySelector(".box2").value == letterChoiced)

    //pos == 0 && pos == 4 && pos == 8  
    linhas.push(document.querySelector(".box0").value == letterChoiced &&
    document.querySelector(".box4").value == letterChoiced && 
    document.querySelector(".box8").value == letterChoiced)

    //pos == 0 && pos == 3 && pos == 6
    linhas.push(document.querySelector(".box0").value == letterChoiced &&
    document.querySelector(".box3").value == letterChoiced && 
    document.querySelector(".box6").value == letterChoiced)

    //pos == 2 && pos == 4 && pos == 6
    linhas.push(document.querySelector(".box2").value == letterChoiced &&
    document.querySelector(".box4").value == letterChoiced && 
    document.querySelector(".box6").value == letterChoiced)

    //pos == 2 && pos == 5 && pos == 8
    linhas.push(document.querySelector(".box2").value == letterChoiced &&
    document.querySelector(".box5").value == letterChoiced && 
    document.querySelector(".box8").value == letterChoiced)

    //pos == 1 && pos == 4 && pos == 7
    linhas.push(document.querySelector(".box1").value == letterChoiced &&
    document.querySelector(".box4").value == letterChoiced && 
    document.querySelector(".box7").value == letterChoiced)

    //pos == 3 && pos == 4 && pos == 5
    linhas.push(document.querySelector(".box3").value == letterChoiced &&
    document.querySelector(".box4").value == letterChoiced && 
    document.querySelector(".box5").value == letterChoiced)

    //pos == 6 && pos == 7 && pos == 8
    linhas.push(document.querySelector(".box6").value == letterChoiced &&
    document.querySelector(".box7").value == letterChoiced && 
    document.querySelector(".box8").value == letterChoiced)

    

    console.log("Linhas: "+linhas);
    for(let i=0;i<linhas.length;i++){
        if(linhas[i]){
            let popup = document.querySelector(".pop-up") ;
            popup.style.visibility = "visible" ;
            // "Letter "+letterChoiced.toUpperCase()+" Wins!"
            
        }
    }

    document.querySelector(".btnPlayAgain").addEventListener("click",()=>{
        document.location.reload();
    })

    document.querySelector(".finalPic").setAttribute("src","image/"+letter+".png");

}