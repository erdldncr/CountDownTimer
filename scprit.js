let day=document.getElementById('days')
let hour=document.getElementById('hours')
let minute=document.getElementById('mins')
let second=document.getElementById('seconds')

let oneDay=24*60*60*1000
let oneHour=60*60*1000
let oneMinute=60*1000
let oneSecond=1000

function calculate(){
    let now=new Date().getTime()
    let eve= new Date(2021,11,30,23,59,59)
    let lefttime=eve-now
    if(lefttime>0){
        let remainingDays=Math.floor(lefttime/oneDay)
        day.innerHTML=remainingDays>0?remainingDays:0
        lefttime-=Math.floor(lefttime/oneDay)*oneDay
        let remainingHours=Math.floor(lefttime/oneHour)
        hour.innerHTML=remainingHours
        lefttime-=Math.floor(lefttime/oneHour)*oneHour
        let remainingMinutes=Math.floor(lefttime/oneMinute)
        minute.innerHTML=remainingMinutes
        lefttime-=Math.floor(lefttime/oneMinute)*oneMinute
        let remainingSeconds=Math.floor(lefttime/oneSecond)
        second.innerHTML=remainingSeconds
    }else{
        document.querySelector('h1').innerHTML='Happy New Year'
        document.body.style.backgroundImage="url('https://fdn.gsmarena.com/imgroot/news/20/12/happy-new-year-2021/-1200/gsmarena_002.jpg')"
    }

}


setInterval(calculate,1000)