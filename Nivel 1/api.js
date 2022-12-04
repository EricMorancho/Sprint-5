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
    console.log(joke);
  }




