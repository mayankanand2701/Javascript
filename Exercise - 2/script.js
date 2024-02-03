// Snake Water and Gun Game
// or you can use 0 for Snake,1 for Water,2 for Gun logic too
function getRandomCharacter() 
{
    const characters = ['S', 'W', 'G'];
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

let score=0;
let run=0;
while(run<=10)
{
    run++;
    let g=prompt("Enter yor Choice (S/W/G) : ");
    const randomCharacter = getRandomCharacter();
    document.write("-------------------<br>");
    document.write("Round : ",run);
    document.write("<br>-------------------<br>");
    if(randomCharacter==g)
    {
        score++;
        document.write("Congratulations. You Won!  <br>")
    }
    else document.write("Opps. CPU Won! <br>");
    let c=confirm("Do you want to continue the Game ? ")
    if(c==true) continue;
    else break;
}
if(run==11)run--;
document.write("-------------------<br>");
alert("Game Over !")
document.write("Your Socre is : "+score+" out of "+(run));