const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const main = document.getElementById('main');
const submit = document.getElementById('submit');
const input = document.getElementById('input');

async function getWeather(city) {
    const resp = await fetch(APIURL + city + "&appid=" + apikey);
    const respData = await resp.json();

    createWeatherCard(respData);
}

function createWeatherCard(city) {
    const temp = (city.main.temp - 273.15).toFixed(0);

    main.innerHTML = `
        <div class="card">
            <div class="name"
                <h2>${city.name}</h2><small>${city.sys.country}</small>
            </div>
            <div class="temp">
                <span>${temp}°C</span>
                <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png"
                <span>${city.weather[0].main}</span>
            </div>
        </div>
    `;

}

submit.addEventListener('click', () => {
    const cityname = input.value;
    getWeather(cityname);
});
