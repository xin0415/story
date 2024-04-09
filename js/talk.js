new TypeIt("#xc", {
  loop: true,
  cursorSpeed: 1000,
  speed: 100
})
.type("This is the fourth month since we met")
.pause(2000)
.delete(null, {
  delay: 500
})
.type("Hope you will be happy every day")
.pause(2000)
.delete(null, {
  delay: 500
})
.type("Your Loved one will love you to the stars and beyond")
.pause(2000)
.delete(null, {
  delay: 500
})
.type("心上人会像奔向食堂一样向你奔来")
.pause(3000)
.go();
