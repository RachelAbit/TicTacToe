const display = document.getElementById('gameboard');
const player1_field = document.getElementById('player1');
const player2_field = document.getElementById('player2');
const start = document.getElementById('start');

function createGame(){
   return {

      createPlayer: (player_1, player_2) =>{
         return {
            player_1,
            player_2,
            greet: () =>{
               alert(`Welcome ${player_1} and ${player_2}. Let's play the Game!`);
            }
         }
      }

      //need to create another object

   };
}

start.addEventListener('click', () => {
   let getPlayer1 = player1_field.value;
   let getPlayer2 = player2_field.value;
   
   const init_game = createGame();
   const players = init_game.createPlayer(getPlayer1, getPlayer2)
   players.greet();
})