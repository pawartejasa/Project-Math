var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');
var zero=document.getElementById('zero');
var point=document.getElementById('point');
var equal=document.getElementById('equal');
var addition=document.getElementById('addition');
var subtract=document.getElementById('subtract');
var multiply=document.getElementById('multiply');
var division=document.getElementById('division');
var cancel=document.getElementById('cancel');
var sign=document.getElementById('sign');
var ac=document.getElementById('ac');
var heading=document.getElementById('displayHeading');

var ans="0";
ac.addEventListener('click', display0);
function display0(){
    ans="0";
    heading.innerHTML=ans;
}
one.onclick=function() {pressOne()};
function pressOne(){
    if(ans==0){
        ans="1";
    }else{
        ans=ans+"1";
    }
    
    heading.innerHTML=ans;
}
two.onclick=function() {pressTwo()};
function pressTwo(){
    if(ans==0){
        ans="2";
    }else{
        ans=ans+"2";
    }
    
    heading.innerHTML=ans;
}
three.onclick=function() {pressThree()};
function pressThree(){
    if(ans==0){
        ans="3";
    }else{
        ans=ans+"3";
    }
    
    heading.innerHTML=ans;
}
four.onclick=function() {pressFour()};
function pressFour(){
    if(ans==0){
        ans="4";
    }else{
        ans=ans+"4";
    }
    
    heading.innerHTML=ans;
}
five.onclick=function() {pressFive()};
function pressFive(){
    if(ans==0){
        ans="5";
    }else{
        ans=ans+"5";
    }
    
    heading.innerHTML=ans;
}
six.onclick=function() {pressSix()};
function pressSix(){
    if(ans==0){
        ans="6";
    }else{
        ans=ans+"6";
    }
    
    heading.innerHTML=ans;
}
seven.onclick=function() {pressSeven()};
function pressSeven(){
    if(ans==0){
        ans="7";
    }else{
        ans=ans+"7";
    }
    
    heading.innerHTML=ans;
}
eight.onclick=function() {pressEight()};
function pressEight(){
    if(ans==0){
        ans="8";
    }else{
        ans=ans+"8";
    }
    
    heading.innerHTML=ans;
}
nine.onclick=function() {pressNine()};
function pressNine(){
    if(ans==0){
        ans="9";
    }else{
        ans=ans+"9";
    }
    
    heading.innerHTML=ans;
}
zero.onclick=function() {pressZero()};
function pressZero(){
    if(ans==0){
        ans="0";
    }else{
        ans=ans+"0";
    }
    
    heading.innerHTML=ans;
}
multiply.onclick=function() {pressMultiply()};
function pressMultiply(){
    if(ans[ans.length-1]!="*"){
    ans=ans+"*";
    }
    heading.innerHTML=ans;
}
addition.onclick=function() {pressAddition()};
function pressAddition(){
    if(ans[ans.length-1]!="+"){
    ans=ans+"+";
    }
    heading.innerHTML=ans;
}
subtract.onclick=function() {pressSubtract()};
function pressSubtract(){
    if(ans[ans.length-1]!="-"){
        ans=ans+"-";
        }
    heading.innerHTML=ans;
}
division.onclick=function() {pressDivision()};
function pressDivision(){
    if(ans[ans.length-1]!="/"){
        ans=ans+"/";
        }
    heading.innerHTML=ans;
}
sign.onclick=function(){pressSign()};
function pressSign(){
    if(ans[0]!="-" && ans != 0){
        
        ans="-"+ans;
        }
        else if(ans==0){
            ans=ans;
        }
    else{
        ans=ans.slice(0, 0) + ans.slice(1, ans.length)
    }
    heading.innerHTML=ans;
}
equal.onclick=function(){pressEqual()};
function pressEqual(){
    ans=eval(ans);
    heading.innerHTML=ans;
}
cancel.onclick=function(){pressCancel()};
function pressCancel(){
    //ans=ans.slice(0, ans.length-1) + ans.slice(ans.length, ans.length);
   ans=ans.substr(0, ans.length-1);
    heading.innerHTML=ans;
}

point.onclick=function() {pressPoint()};
function pressPoint(){
    if(ans[ans.length-1]!="."){
        ans=ans+".";
    }
    
    heading.innerHTML=ans;
}