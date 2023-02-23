const emotions = prompt(
  `Напишіть одним словом як ви себе почуваєте`,
  "щасливий / сумний / злий"
);

let message;

switch (emotions) {
  case "щасливий":
    message = String.fromCodePoint(128578);
    break;
  case "сумний":
    message = String.fromCodePoint(128532);
    break;
  case "злий":
    message = String.fromCodePoint(128545);
    break;

  default:
    message = `Якщо Ви хочете, щоб життя посміхалося Вам, подаруйте їй спочатку свій гарний настрій (Бенедикт Спіноза).`;
}

alert(message);
