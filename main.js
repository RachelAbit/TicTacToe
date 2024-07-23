const start = document.querySelector('#start');
const restart = document.querySelector('#restart');

const greet = {
   greetPlayer: function(p1, p2){
      return document.querySelector('#players-intro').innerText = `Welcome! ${p1} and ${p2}. ${p1} is X and ${p2} is O`
   }
}

const game = {
   //this function has 2d array inside; those empty string will holds the letter X and O
   board: function(){
      let init_board = [
         ['', '', '',],
         ['', '', ''],
         ['', '', '']
      ]
      return init_board
   },

   displayBoard: function(){
      const gameboard = document.querySelector('#gameboard');
      gameboard.innerText = '';
      const tictactoe_board = this.board();

      for(let i=0; i < tictactoe_board.length; i++){
         for(let j=0; j < tictactoe_board[i].length; j++){
            let div = document.createElement('div');
            div.classList.add('cell');

            div.innerText = this.turns; //nagkaroon ng X sa bawat cell



            // div.appendChild(p);
            gameboard.appendChild(div);
         }
      }
   }, 

   turns: 'X'

}

start.addEventListener('click', () =>{
   const playerfield_1 = document.querySelector('#player1').value;
   const playerfield_2 = document.querySelector('#player2').value;

   const g = greet;
   const tictactoe = game;
   if(playerfield_1 === '' || playerfield_2 === ''){
      console.error('Please fill out the name fields');
   } else {
      console.log(g.greetPlayer(playerfield_1, playerfield_2));
      console.log('Lets play the game!');
      game.displayBoard();
   }
})