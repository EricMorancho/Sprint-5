const reportJokes = [];
let actualJoke = '';

const jokeText = document.querySelector(".joke");
const weather = document.querySelector(".clima");
const iconWeather = document.querySelector(".iconoClima");

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
    const { joke } = await buscarChiste();
    actualJoke=joke;
    jokeText.innerText = joke;
    display();
  }

  function jokeScore(nota){
    const d = new Date();
    let text = d.toISOString();

    reportJokes.push({
      joke: actualJoke,
      score: nota,
      date: text,
    });

    display();
    console.log(reportJokes)
  }

  function display(){
    let showBtn = document.getElementById("scoreButtons");
    let showText = document.getElementById("scoreText");
    if(showBtn.style.display === "block"){
    showBtn.style.display = "none";
    showText.style.display = "block";
    } else {
      showBtn.style.display = "block";
      showText.style.display = "none";
    }
  }
  
  const getWeatherData = async () =>{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&appid=d6c0713d2f6f4fce6fbeed7403319adf&units=metric&lang=ES`,
      );

    const data = await res.json();
  
    displayData(data);
  }

  const displayData = (obj) =>{
    weather.innerHTML = Math.floor(obj.main.temp)+"ºC";
    const icon = obj.weather[0].icon;
    iconWeather.innerHTML = `<img src='../icons/${icon}.png' class="imagenIcono"></img>`
  }


  window.onload = () => {
  getWeatherData();
  }

