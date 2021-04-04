function scuberGreetingForFeet(distance){
  // Write your code here!
  let costReply;
  if (distance > 2500) {
    costReply = "No can do.";
  } else if (distance > 2000) {
      costReply = "I will gladly take your thirty bucks.";
  } else if (distance < 401) {
    costReply = "This one is on me!";
  }
  return costReply;
}

function ternaryCheckCity (city){
  // Write your code here!
  const reply = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return reply;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}