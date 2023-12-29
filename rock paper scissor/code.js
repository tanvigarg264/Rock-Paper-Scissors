let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randinx=Math.floor(Math.random()*3);
    return options[randinx];
};

const showinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU WIN! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU LOSE! ${userchoice} loses ${compchoice}`;
        msg.style.backgroundColor="red";
    }
};

const drawgame=()=>{
    msg.innerText="GAME WAS A DRAW. PLAY AGAIN!"
    msg.style.backgroundColor="#33186B";
};

const playgame=(userchoice)=>{
    const compchoice=getcompchoice();
    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="rock"?true:false;
        }
        else if(userchoice==="scissors")
        {
            userwin=compchoice==="paper"?true:false;
        }
        showinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});