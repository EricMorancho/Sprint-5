interface jokeType {joke: string, score: number, date: string};
const reportJokes: jokeType[] = [];
let actualJoke: string = '';

const jokeText= document.querySelector(".joke") as HTMLElement;
const weather = document.querySelector(".clima") as HTMLElement;
const iconWeather = document.querySelector(".iconoClima") as HTMLElement;
const bloop = document.getElementById("blop") as HTMLElement;

  async function buscarChiste() {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: 'application/json',
      },
    });

    const joke = response.json();
    return joke;
  }

  async function pulsarBoton() {
    if (randomNum() === 0){
      const { joke } = await buscarChiste();
      actualJoke=joke;
      jokeText.innerText = joke;
      bloop.innerHTML = `<div id="blop3"></div>`
    } else {
      const { value } = await ChuckNorris();
      actualJoke = value;
      jokeText.innerText = value;
      bloop.innerHTML = `<div id="blop2"></div>`
    }
    refresh();
  };

  function jokeScore(nota: number){
    const d = new Date();
    let text = d.toISOString();

    reportJokes.push({
      joke: actualJoke,
      score: nota,
      date: text,
    });

    display();
    console.log(reportJokes);
  }

  function display(){
    let showBtn = document.getElementById("scoreButtons") as HTMLElement;
    let showText = document.getElementById("scoreText") as HTMLElement;
    showBtn.style.display = "none";
    showText.style.display = "block";
  }

  function refresh(){
    let showBtn = document.getElementById("scoreButtons") as HTMLElement;
    let showText = document.getElementById("scoreText") as HTMLElement;
      showBtn.style.display = "block";
      showText.style.display = "none";
    }
  
  
  const getWeatherData = async () =>{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&appid=d6c0713d2f6f4fce6fbeed7403319adf&units=metric&lang=ES`,
      );

    const data = await res.json();
  
    displayData(data);
  }

  const displayData = (obj: any) =>{
    weather.innerHTML = Math.floor(obj.main.temp)+"ºC";
    const icon = obj.weather[0].icon;
    iconWeather.innerHTML = `<img src='./icons/${icon}.png' class="imagenIcono"></img>`
  }


  const ChuckNorris = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');

    const data = await res.json();

    return data;
  }

const randomNum = () =>{
  let num = Math.floor(Math.random() * 2);
  return num;
}


  window.onload = () => {
  getWeatherData();
  }
