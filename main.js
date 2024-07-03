const _gameboard = document.querySelector('#gameboard');

const create_board = () => {
   let board_size = 3;

   for(let i=0; i < board_size * board_size; i++){
      let div = document.createElement('div');
      let p = document.createElement('p');

      div.style.border = '2px solid black';
      div.style.width = '165px';
      div.style.height = '100px';
      div.style.cursor = 'pointer';
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.alignItems = 'center';

      p.style.color = 'Red';
      p.style.fontSize = '50px';

      div.addEventListener('click', () =>{
        p.innerText = 'X';
      })

      div.appendChild(p);
      _gameboard.appendChild(div);
   }

   
}

create_board();

