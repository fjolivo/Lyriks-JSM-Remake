const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '898d6b7133msh58ae5b9706ef504p13fde6jsn2232927e4d2d',
      'X-RapidAPI-Host': ''
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));