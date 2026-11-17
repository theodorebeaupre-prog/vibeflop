const $ = selector => document.querySelector(selector);
let toastTimer;
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').style.display='none',3500)}
const stages=['Installing 17 competing UI libraries…','Adding purple gradient…','Removing tests for performance…','Asking AI to fix what AI broke…','Done. Business model not found.'];
let launchTimer;
document.addEventListener('click',event=>{
 const action=event.target.closest('[data-action]')?.dataset.action;
 if(action==='cookie') $('#cookie').remove();
 if(action==='toast') toast('✨ This feature is on our roadmap. The roadmap is also on our roadmap.');
 if(action==='chaos'){document.body.classList.toggle('chaos');toast('Design feedback implemented: made it pop.');}
 if(action==='ship'){
 $('#launch').showModal();$('#progress').value=0;let step=0;$('#launchtext').textContent=stages[0];clearInterval(launchTimer);
 launchTimer=setInterval(()=>{$('#progress').value+=20;step++;$('#launchtext').textContent=stages[Math.min(step,4)];if(step>=5){clearInterval(launchTimer);$('#terminal').append(document.createElement('br'),'✓ Successfully deployed absolutely nothing.');}},650);
 }
});
$('#close').onclick=()=>$('#launch').close();
$('#launch').addEventListener('close',()=>clearInterval(launchTimer));
$('#chat').onclick=()=>{$('#chatbox').hidden=!$('#chatbox').hidden;if(!$('#chatbox').hidden)$('#chatform input').focus()};
let answer=0;
$('#chatform').onsubmit=event=>{event.preventDefault();const answers=['Great question. Have you considered a purple gradient?','I have rewritten your entire codebase. The button is now slightly rounder.','This sounds like a caching issue. Or a mindset issue.','Let’s add a subscription tier before investigating.','You’re absolutely right! I have made the same mistake again.'];$('#reply').textContent=answers[answer++%answers.length];$('#chatform').reset()};
$('#motion').onclick=()=>{const paused=document.body.classList.toggle('paused');$('#motion').textContent=paused?'Resume the vibes':'Pause the vibes'};
