function isLove(petalsFlower1, petalsFlower2) {
  if (petalsFlower1 % 2 === 0 && petalsFlower2 % 2 === 1) {
    return true;
  } else if (petalsFlower1 % 2 === 1 && petalsFlower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
petals1 = Math.floor(Math.random() * 10) + 1;
petals2 = Math.floor(Math.random() * 10) + 1;
isLove(petals1, petals2);
