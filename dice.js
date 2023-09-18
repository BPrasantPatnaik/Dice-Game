var random1=Math.floor(Math.random()*6)+1;
if(random1 === 1)
{
    document.querySelector(".img1").src="images/dice1.png";
}
if(random1 === 2)
{
    document.querySelector(".img1").src="images/dice2.png";
}if(random1 === 3)
{
    document.querySelector(".img1").src="images/dice3.png";
}if(random1 === 4)
{
    document.querySelector(".img1").src="images/dice4.png";
}if(random1 === 5)
{
    document.querySelector(".img1").src="images/dice5.png";
}if(random1 === 6)
{
    document.querySelector(".img1").src="images/dice6.png";
}
var random2=Math.floor(Math.random()*6)+1;
if(random2 === 1)
{
    document.querySelector(".img2").src="images/dice1.png";
}
if(random2 === 2)
{
    document.querySelector(".img2").src="images/dice2.png";
}if(random2 === 3)
{
    document.querySelector(".img2").src="images/dice3.png";
}if(random2 === 4)
{
    document.querySelector(".img2").src="images/dice4.png";
}if(random2 === 5)
{
    document.querySelector(".img2").src="images/dice5.png";
}if(random2 === 6)
{
    document.querySelector(".img2").src="images/dice6.png";
}

if(random1 > random2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}
if(random1 < random2)
{
    document.querySelector("h1").textContent="Player 2 Wins";
}
if(random1 === random2)
{
    document.querySelector("h1").textContent="Draw";
}

if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
  console.info(performance.navigation.type);
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    roll();
  } else {
    console.info( "This page is not reloaded");
  }