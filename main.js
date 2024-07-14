const start = document.getElementById('start');


const gameboard = {

   createPlayer: function(_player1, _player2){
      return {
         _player1,
         _player2,
         greet: () => {
            alert(`Welcome ${_player1} and ${_player2}. Let's play the Game`);
         }
      }
   },

   board: function(){
      const _gameboard = document.querySelector('#gameboard');
      const initializeBoard = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""]
      ]

      for(let i = 0; i < initializeBoard.length; i++){
        for(let j = 0; j < initializeBoard[i].length; j++){
            let div = document.createElement('div');
            _gameboard.appendChild(div)
        }
      }
      return _gameboard;
   },

   // gameLogic:
   
     
}

start.addEventListener('click', () => {
   let getPlayer1 = document.getElementById('player1').value;
   let getPlayer2 = document.getElementById('player2').value;
   
   const game = gameboard;
   const players = game.createPlayer(getPlayer1, getPlayer2);
   players.greet();
   game.board();
})