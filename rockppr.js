let userscore = 0 ;
let compscore = 0 ;
// access all  the    button

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const countuserscore =document.querySelector("#user-score");
const countcompscore = document.querySelector("#comp-score");
const refbutton =document.querySelector("#refbuttons");

    refbutton.addEventListener("click"  ,() => {
      console.log("button was clicked");
      resetGame();
    });
   

choices.forEach((choice)  => {
    choice.addEventListener("click" , () => {
        const userchoice =choice.getAttribute("id");
  playgame(userchoice);
    });
});




// the main function of code

const playgame =(userchoice) => {
    console.log("user choice =",userchoice);
    const  compchoice =gencompchoice();
    console.log("comp choice =" ,compchoice);

    if(userchoice === compchoice){
         drawgame() ;
  }
  else{
    let userwin = true ;
    if(userchoice ==="rock"){
      //paper , scissor
        userwin = compchoice === "paper" ? false : true ;
    } 
    else if(userchoice==="paper"){
      //rock , scissors
       userwin = compchoice ==="scissors" ? false:true;
    }
    else {
      //paper, rock
      userwin = compchoice==="rock" ? false :true ;
    }
    
   showwinner(userwin,userchoice,compchoice);
   
}

};

//generate computer choice 

const gencompchoice =() =>{
    const option = ["rock" ,"paper" ,"scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
};
// draw game
const drawgame  = () =>{
  console.log("game was Draw");
  msg.innerText ="Game Was Draw ,Play Again";
  msg.style.backgroundColor ="#081B31";
};

// change in score and show winners
const showwinner = (userwin ,userchoice ,compchoice) => {
    if(userwin){
       userscore++ ;
       countuserscore.innerText =userscore ;
        msg.innerText=`you won!. ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
      compscore++ ;
      countcompscore.innerText = compscore;
      msg.innerText =`you Lose!. ${compchoice} beats ${userchoice}`;
          msg.style.backgroundColor ="red";

    }
};

 const resetGame =() => {
  userscore =0 ;
  compscore =0;
  countcompscore.innerText  = compscore ;
  countuserscore.innerText = userscore ;

 };






