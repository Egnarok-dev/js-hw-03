const yourCountry = prompt(`Вкажіть назву Вашої країни:`);
const normalizedToUpperCaseInput = yourCountry.toUpperCase();
let message;

switch (normalizedToUpperCaseInput) {
  case `КИТАЙ`:
    message = `Доставка в Китай буде коштувати 100 кредитів`;
    break;
  case `ЧИЛІ`:
    message = `Доставка в Чилі буде коштувати 250 кредитів`;
    break;
  case `АВСТРАЛІЯ`:
    message = `Доставка в Австралію буде коштувати 170 кредитів`;
    break;
  case `ІНДІЯ`:
    message = `Доставка в Індію буде коштувати 80 кредитів`;
    break;
  case `ЯМАЙКА`:
    message = `Доставка на Ямайку буде коштувати 120 кредитів`;
    break;
  default:
    message = `Нажаль в вашу країну не має доставки.`;
}

alert(message);
