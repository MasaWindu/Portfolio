'use strict';

/*function countdown(due){
    const now = new Date();
    
    const rest = due.getTime() - now.getTime();
    const days =Math.floor(rest/1000/60/60/24);
    const day = new Date();
    const count =[days,day];
    
    return count;
}

const goal = new Date(2020,2,5);

function recalc(){
    const counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    refresh();
}

function refresh(){
    setTimeout(recalc,1000)
}

recalc();*/

$(document).ready(function(){
    $('#opennav').on('click',function(){
        $('#wrapper,#nav').toggleClass('show');
    });
});