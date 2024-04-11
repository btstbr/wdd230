var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=d7ffb76f27d5f75f6ce4b7817252176f";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        var temp = jsObject.main.temp;
        var desc = jsObject.weather[0].main;
        var wind = jsObject.wind.speed;
        document.getElementById('current-temp').textContent = temp.toFixed(1);
        document.getElementById('current-temp1').textContent = temp.toFixed(1);
        document.getElementById('desc').textContent = desc;
        document.getElementById('wind').textContent = wind;
        document.getElementById('humid').textContent = jsObject.main.humidity;

    });


apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d7ffb76f27d5f75f6ce4b7817252176f";

fetch(apiURL2)
    .then((response) => response.json())
    .then((forecast) => {
        for (const item in forecast.list) {
            if (forecast.list[item].dt_txt.includes("18:00")) {
                var date = new Date(forecast.list[item].dt_txt);
                var day = date.toString();
                day = day.slice(0, 3)

                let card = document.createElement('section');
                let dd = document.createElement('h3');
                dd.textContent = day;
                card.appendChild(dd);

                let img = document.createElement('img')
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[item].weather[0].icon + '.png';
                img.setAttribute('src', imagesrc);
                img.setAttribute('alt', forecast.list[item].weather[0].main);
                card.appendChild(img);

                let tt = document.createElement('span');
                tt.textContent = forecast.list[item].main.temp.toFixed(1) + " °F";
                card.appendChild(tt);

                document.querySelector('div.forecast').appendChild(card);
            }

        }
    });
