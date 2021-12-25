function locate(){
    player_1 = document.getElementById("player1").value;
    player_2 = document.getElementById("player2").value;
    window.locate = "";
    localStorage.setItem("Player_1", player_1);
    localStorage.setItem("Player_2", player_2)
}