const yourNumber = prompt();

for (let i = 1; i <= yourNumber; i += 1) {
  console.log(i);
  if (i == 1000) break; //поставив закінчення циклу на цьому місці (для себе), бо ради експеременту "наклацав" 8 значне число, по звуку роботи кулера процесора пілся початку циклу, я зрозумів що він мені дякую не скаже за мої "експеременти".
}
