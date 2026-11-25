const cells = document.querySelectorAll("[id^='cell_']")
const combination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]]
let game_status = true
const player_turn_x = document.getElementById("player_turn_x");
const player_turn_o = document.getElementById("player_turn_o");
let score_player_x = document.getElementById("score_player_x");
let score_player_o = document.getElementById("score_player_o");
player_turn_o.classList.remove("turn")
let current_player = "X"
let score_x = 0
let score_o = 0
score_player_x.textContent = score_x
score_player_o.textContent = score_o

cells.forEach(cell => {
    cell.addEventListener("click", ()=>{
        if(game_status == false){
            return
        }
        if(cell.textContent !== ""){
            return
        }
        else if(cell.textContent == ""){
            cell.textContent = current_player
        }
        for(let i = 0; i <combination.length; i++){
            let temp = combination[i]
            if(cells[temp[0]].textContent == current_player && cells[temp[1]].textContent == current_player && cells[temp[2]].textContent == current_player){
                game_status = false
            }
        }
        if(game_status == false){
            if(current_player == "X"){
                score_x += 1
                score_player_x.textContent = score_x
            }
            else if(current_player == "O"){
                score_o += 1
                score_player_o.textContent = score_o
            }
            alert("The winner is "+ current_player)
            return
        }
        if(current_player == "X"){
            current_player = "O"
            player_turn_x.classList.remove("turn")
            player_turn_o.classList.add("turn")
        }
        else if(current_player == "O"){
            current_player = "X"
            player_turn_o.classList.remove("turn")
            player_turn_x.classList.add("turn")
        }
    })
});

const restart_button = document.getElementById("restart_game");
restart_button.addEventListener("click", ()=>{
    for(let i = 0; i < cells.length; i++){
        cells[i].textContent = ""
    }
    current_player = "X"
    player_turn_o.classList.remove("turn")
    player_turn_x.classList.add("turn")
    game_status = true
})

