const start = document.getElementById('start');
const restart = document.getElementById('restart');

const gameboard = {

   createPlayer: function(_player1, _player2){
      return {
         _player1,
         _player2,
         greet: () => {
            document.getElementById('players-intro').innerText = `Welcome ${_player1} and ${_player2}. 
            Let's play the Game. ${_player1} is 'X' and ${_player2} is 'O'`;
         }
      }
   },

   board: function(){

      //this part is to initialize the tictac toe board and show it to the gameboard container
      const _gameboard = document.querySelector('#gameboard');
      const initializeBoard = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""]
      ]
      _gameboard.innerText = '';

      //this nested loop is to create columns and rows or cell
      for(let row = 0; row < initializeBoard.length; row++){
        for(let col = 0; col < initializeBoard[row].length; col++){
            let div = document.createElement('div');

            gameboard.gameLogic.flow(div, row, col);
            _gameboard.appendChild(div);
        }
      }
      return _gameboard;
   },

   player_turns: {
      turns: {return: currentP = 'O'}
   },

   gameLogic: {
      flow:  function (div, row, col){

         div.addEventListener('click', () =>{
            
            if(div.innerHTML === ''){
               let p = document.createElement('p');
               if(gameboard.player_turns.turns === 'O'){
                  p.style.color = 'Green';
                  p.style.fontSize = '50px';
                  p.innerHTML = 'O';
                  document.querySelector('.name').innerText = document.getElementById('player1').value + ' turns';
                  gameboard.player_turns.turns = 'X';
               } else{
                  p.style.color = 'Red';
                  p.style.fontSize = '50px';
                  p.innerHTML = 'X';
                  document.querySelector('.name').innerText = document.getElementById('player2').value + ' turns';
                  gameboard.player_turns.turns = 'O';
               }
               div.appendChild(p);
               console.log(`Row: ${row}, Column: ${col}`);
               
            }else{
               console.log('The box is already filled!')
            }
         })
      }
   },
}

start.addEventListener('click', () => {
   let getPlayer1 = document.getElementById('player1').value;
   let getPlayer2 = document.getElementById('player2').value;
   
   const game = gameboard;
   const players = game.createPlayer(getPlayer1, getPlayer2);
   players.greet();
   game.board();
})

restart.addEventListener('click', () =>{
})