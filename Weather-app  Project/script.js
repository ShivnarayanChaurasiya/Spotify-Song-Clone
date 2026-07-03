async function getWeather() {

    const city = document.getElementById("city").value;
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${data.current_condition[0].temp_C} °C</p>
            <p>Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
        `;

    } catch (error) {
        document.getElementById("result").innerHTML = `<p>Error fetching data ❌</p>`;
    }
}
