let main = document.querySelector("main")
// let someP = document.createElement("p")

const mapArray = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
]

//inicio : [9][0]
//final : [8][20]

let inicio_I=[9]
let inicio_J=[0]

let final_I=[8]
let final_J = [20]

let i = 9
let j = 0
function maze (){
    for (let i=0; i<mapArray.length;i++){
        // console.log(mapArray[i])
        // console.log(i)
        // console.log(mapArray[i])
        let line = document.createElement("div")
        line.className="line"
        for (let j=0; j<mapArray[i].length;j++){
            let cell = document.createElement("div")
            cell.classList.add("cell")
            
            if(mapArray[i][j]===" "||mapArray[i][j]==="F"||mapArray[i][j]==="S"){
                cell.classList.add("stDiv")
                cell.classList.add(`stDiv_`+`[${i}][${j}]`)
            }
            
            else if(mapArray[i][j]==="W"){
                cell.classList.add("wallDiv")
                cell.classList.add(`stDiv_`+i+j)
            }
            if (mapArray[i][j]==="F"){
                cell.classList.add("final")
            }
            line.appendChild(cell)
            

        }
        main.appendChild(line)
    }move(9,0)
    
}
function player(){
    let movingPlayer = document.createElement("div")
    movingPlayer.className="movingPlayer"
    return movingPlayer
}
maze()

// console.log(document.querySelectorAll("div")[5])
// let varMain = document.querySelector("main")
// console.log(varMain.children[5].children[3])


function move(i,j){
    // let moveArray = mapArray
    let varMain = document.querySelector("main")
    let playerPosition = varMain.children[i].children[j]
    if(i===9&&j===0){
        playerPosition.appendChild(player())
    }
    else{
        playerPosition.appendChild(document.getElementsByClassName("movingPlayer")[0])
    }
    
}
function victory(){
    let divVict = document.createElement("div")
    let pVict = document.createElement("p")
    let textToAdd = document. createTextNode("Voce venceu!!");
    pVict.appendChild(textToAdd)
    divVict.appendChild(pVict)
    
    document.querySelector("main").appendChild(divVict)

}
document.addEventListener('keydown' , function(event){
    // const keyName = event.key;
    console.log(event.key)
    if(document.querySelector("main").children[i].children[j].classList[3]=="final"){
        console.log("entrou")
        // victory()
    }
    if(event.key=="ArrowUp"){
        if(document.querySelector("main").children[i].children[j-1].classList[1]=="stDiv"){
            console.log(i,j)
            if(i==9 &&j<=1){}
            else{
                console.log(event.key)
                j--
                move(i,j)
            }
        }
    }
    else if(event.key=="ArrowDown"){
        console.log(event.key)
        // console.log(document.querySelector("main").children[i].children[j+1].classList[1]=="stDiv")
        if(document.querySelector("main").children[i].children[j+1].classList[1]=="stDiv"){
            j++
            move(i,j)
        }
        
    }
    else if(event.key=="ArrowRight"){
        if(document.querySelector("main").children[i+1].children[j].classList[1]=="stDiv"){
            console.log(event.key)
            i++
            move(i,j)  
        }
        
    }
    else if(event.key=="ArrowLeft"){
        if(document.querySelector("main").children[i-1].children[j].classList[1]=="stDiv"){
            console.log(event.key)
            i--
            move(i,j)
        }
    }
    if (i===8&&j===20){
        console.log("got it!")
        victory()
    }
})
// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     alert('keydown event\n\n' + 'key: ' + keyName);
//   });
