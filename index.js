
const errand = "Going to the Dentist";

switch (errand) {
  case "Going to the Dentist": {
    const message = "I hate going to the dentist";
    console.log(message);
    break;
  }
  case "Going Shopping": {
    const message = "I love to shop";
    console.log(message);
    break;
  }
  case "Going to the movies": {
    const message = "I love chick-flicks";
    console.log(message);
    break;
  }
  case "Going to the Bank": {
    const message = "Money makes the world go round!";
    console.log(message);
    break;
  }
  case "Going to the gym": {
    const message = "Healthy bodies host healthy minds!";
    console.log(message);
    break;
  }
  default:
    console.log("No errand");
    break;
}
