const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`;

fetch(apiUrl)
 .then(res => res.json())
 .then(data => {
    console.log(data);
 });