/* Switch Statements */

// Switch Case One 
const pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}

// Switch Case Two
switch ("oboe") {
    case "trumpet":
      console.log("I play the trumpet");
      break;
    case "flute":
      console.log("I play the flute");
      break;
    case "oboe":
      console.log("I play the oboe");
      break;
    default:
      console.log("I don't play an instrument. Sorry");
      break;
  }