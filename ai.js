$(document).ready(function () {
  set_battle_format('OU');
  set_team('[OU] Level 1 Troll');
  queue_for_battle();
 
  function logic() {
    console.log('logic goes here');

    //use_nth_move(3);
	//use_move('Flamethrower');
  }
  
  // Register our AI to be called every turn
  register_ai(logic);
});
