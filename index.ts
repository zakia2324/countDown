#! /user/bin/env node
import inquirer from "inquirer";

let userInput = await inquirer.prompt({
type : 'number',
name: 'seconds',
message:'Enter countdown duration in seconds!'

});
let {seconds}=userInput;
if(seconds!=0){
    console.log(`starting countdown for ${seconds}seconds....`)
    startCountdownfun(seconds);
}else{
    console.log(`Please enter a number greater than 0`)
}
function  startCountdownfun(seconds:number){
    const currentTime= Date.now();

    let userenteredTime = seconds*1000
    let totalTime=  currentTime+userenteredTime;

    const timer = setInterval(()=>{
        let currentTime=Date.now()
const remainingTime =totalTime-currentTime

if(remainingTime>=0){
    process.stdout.write(`\rTime remaining ${Math.floor(remainingTime/1000)}seconds`)

}else{
    clearInterval(timer);
    console.log(`\nTime Up!`) 
    console.log(`Thankyu for using our Countdown Timer App!`)
}
    },1000)
}