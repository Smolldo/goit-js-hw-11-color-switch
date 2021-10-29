const colors = [
    '#249571',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const BUTTONS = {
    startBtn: document.querySelector('button[data-action = "start"]'),
    stopBtn: document.querySelector('button[data-action = "stop"]'),
    body: document.querySelector('body')
}
//random color
  const randomIntegerFromInterval = () => {
     let color =  colors[Math.floor(Math.random()* colors.length)];
return color;
  };
//start coloring
    const startColorize = () => {
        BUTTONS.startBtn.setAttribute("disabled", "true")
        BUTTONS.startBtn.classList.add('is-active');
      time = setInterval(()=>{ BUTTONS.body.style.backgroundColor = randomIntegerFromInterval()},1000)
        }

//stop coloring
const stopColorize = () => {
    BUTTONS.startBtn.removeAttribute("disabled");
    clearInterval(time);
    BUTTONS.startBtn.classList.remove('is-active');
}
//listeners
BUTTONS.startBtn.addEventListener('click', startColorize);
BUTTONS.stopBtn.addEventListener('click', stopColorize);