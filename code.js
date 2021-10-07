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


function maze (){
    for (let i=0; i<mapArray.length;i++){
        // console.log(mapArray[i])
        // console.log(i)
        // console.log(mapArray[i])
        let line = document.createElement("div")
        line.className="line"
        for (let j=0; j<mapArray[i].length;j++){
            let cell = document.createElement("div")
            // if (mapArray[i][j]==="S"){
            //     inicio_I=i
            //     inicio_J=j
            // }
            if(mapArray[i][j]===" "||mapArray[i][j]==="F"||mapArray[i][j]==="S"){
                cell.classList.add("stDiv")
                cell.classList.add(`stDiv_`+`[${i}][${j}]`)
            }
            
            else if(mapArray[i][j]==="W"){
                cell.classList.add("wallDiv")
                cell.classList.add(`stDiv_`+i+j)
            }
            line.appendChild(cell)
            

        }
        main.appendChild(line)
    }
    move(9,0)
    
}
maze()
function player(){
    
}
// console.log(document.querySelectorAll("div")[5])
// let varMain = document.querySelector("main")
// console.log(varMain.children[5].children[3])
let i = 9
let j = 0

function move(i,j){
    // let moveArray = mapArray
    let varMain = document.querySelector("main")
    let playerPosition = varMain.children[i].children[j]
    console.log(playerPosition)
    let movingPlayer = document.createElement("div")
    movingPlayer.className="movingPlayer"
    playerPosition.appendChild(movingPlayer)
    
}
move(3,6)

document.addEventListener('keydown' , function(event){
    // const keyName = event.key;
    switch (event.key){
        case "arrowUp":
            console.log(event.key)
            move(i+1,j)
        case "arrowDown":
            move(i-1,j)
            console.log(event.key)
        case "arrowLeft":
            move(i,j-1)
            console.log(event.key)
        case "arrowRight":
            move(i,j+1)
            console.log(event.key)
    }
})

// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     alert('keydown event\n\n' + 'key: ' + keyName);
//   });
