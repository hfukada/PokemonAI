/* Works when called after page load, but not on page load -- dunno lel
function join_chat_room(room_name) {
  console.log('Joining chat room ' + room_name);

  // Join the chosen chat room
  $('.roomlist')
    .find('div > a')
    .filter(function () {
      return $(this).find('strong').text().trim() == room_name; })
    .click();
}
*/

function set_battle_format(format_name) {
  console.log('Selecting format ' + format_name);

  // Open format select menu
  $('.formatselect').click();
  
  // Select the chosen format
  $('.ps-popup')
    .find('li > button')
    .filter(function () { return $(this).text() == format_name; })
	.click();
}

function set_team(team_name) {
  console.log('Selecting team ' + team_name);

  // Open team select menu
  $('.teamselect').click();
  
  // Choose given team
  $('.ps-popup')
    .find('li > button')
	.filter(function () { return $(this).text() == team_name; })
	.click();
}

function queue_for_battle() {
  console.log('Queuing for battle');

  $('.big.button').click();
}

function register_ai(logic_function) {
  console.log('Registering AI');

  setInterval(function () {
    // If we're still waiting, do nothing:
	if ($('.battle-controls > .controls').text().split('...')[0] == 'Waiting for opponent') {
	  return;
	}
	
	// If the client is accepting moves, call the AI's logic function
	logic_function();
  }, 1000);
}

function send_chat_message(message) {
  console.log('Sending chat message: ' + message);

  $('.chatbox').first().find('textarea').val(message).submit();
}

function use_nth_move(n) { // 0-indexed
  console.log('Using nth move where n=' + n);

  $('.movemenu').find('button')[n].click();
}

function get_nth_move_type(n) {
  console.log('Getting nth move type');
  
  return $($('.movemenu').find('button')[n]).attr('class').split('-')[1];
}

function use_move(move_name) {
  console.log('Using move: ' + move_name);

  $('.movemenu')
    .find('button')
	.filter(function (i) { return this['value'] == move_name })
	.click();
}

function get_learnset(pokemon_name) {
  // Returns a hash of {move_name => move_info}
  return Tools.getLearnset(pokemon_name);
}
