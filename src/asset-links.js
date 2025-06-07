const getPublicUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

export const startScreenImages = {
  submarine: getPublicUrl("/assets/submarine.png"),
};

export const expositionImages = {
  exposition: getPublicUrl("/assets/exposition/exposition.png"),
  techbros: getPublicUrl("/assets/exposition/techbros.png"),
  dinner: getPublicUrl("/assets/exposition/dinner.png"),
  gym: getPublicUrl("/assets/exposition/gym.png"),
  party: getPublicUrl("/assets/exposition/party.png"),
  redroom: getPublicUrl("/assets/exposition/redroom.png"),
  mayday: getPublicUrl("/assets/exposition/mayday.png"),
  villain: getPublicUrl("/assets/exposition/villain.png"),
  running: getPublicUrl("/assets/exposition/running.png"),
};

export const kitchenImages = {
  chef: getPublicUrl("/assets/chef.png"),
  envelope: getPublicUrl("/assets/envelope.jpg"),
  end: getPublicUrl("/assets/end.png"),
  padlock: getPublicUrl("/assets/padlock-icon.png"),
  book: getPublicUrl("/assets/book.png"),
  hint: getPublicUrl("/assets/hint.png"),
  kitchenBg: getPublicUrl("/assets/kitchen.png"),
  aquarium: getPublicUrl("/assets/aquarium.gif"),
};

export const bookImages = {
  default: getPublicUrl("/assets/openbook-default.png"),
  course1: getPublicUrl("/assets/openbook-course1.png"),
  course2: getPublicUrl("/assets/openbook-course2.png"),
  course3: getPublicUrl("/assets/openbook-course3.png"),
  rejected: getPublicUrl("/assets/openbook-rejected.png"),
};

export const expositionSounds = {
  exposition1: getPublicUrl("/sounds/exposition1.mp3"),
  exposition2: getPublicUrl("/sounds/exposition2.mp3"),
  exposition3: getPublicUrl("/sounds/exposition3.mp3"),
  exposition4: getPublicUrl("/sounds/exposition4.mp3"),
  exposition5: getPublicUrl("/sounds/exposition5.mp3"),
  exposition6: getPublicUrl("/sounds/exposition6.mp3"),
  exposition7: getPublicUrl("/sounds/exposition7.mp3"),
  exposition8: getPublicUrl("/sounds/exposition8.mp3"),
  alert1: getPublicUrl("/sounds/alert1.mp3"),
  alert2: getPublicUrl("/sounds/alert2.mp3"),
  villain1: getPublicUrl("/sounds/villain1.mp3"),
  villain2: getPublicUrl("/sounds/villain2.mp3"),
  villain3: getPublicUrl("/sounds/villain3.mp3"),
  villain4: getPublicUrl("/sounds/villain4.mp3"),
  gameIntro: getPublicUrl("/sounds/game-intro.mp3"),
  gameThreat: getPublicUrl("/sounds/game-threat.mp3"),
  doorOpen: getPublicUrl("/sounds/door-open.mp3"),
};

export const expositionMusic = {
  intro: getPublicUrl("/sounds/intro-music.mp3"),
  siren: getPublicUrl("/sounds/siren.mp3"),
  villain: getPublicUrl("/sounds/villain-music.mp3"),
};

export const kitchenSounds = {
  kitchen1: getPublicUrl("/sounds/kitchen1.mp3"),
  kitchen2: getPublicUrl("/sounds/kitchen2.mp3"),
  kitchen3: getPublicUrl("/sounds/kitchen3.mp3"),
  kitchen4: getPublicUrl("/sounds/kitchen4.mp3"),
  kitchen5: getPublicUrl("/sounds/kitchen5.mp3"),
  gamsay1: getPublicUrl("/sounds/gamsay1.mp3"),
  sea: getPublicUrl("/sounds/sea.mp3"),
  success: getPublicUrl("/sounds/success.mp3"),
  gameover: getPublicUrl("/sounds/gameover.mp3"),
};
