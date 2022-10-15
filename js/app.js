const loadCoutries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => displayUi(data))
}
loadCoutries();
const displayUi = loadData => {
    // console.log(loadData);
    const row = document.getElementById('row');
    for (const load of loadData) {
        // console.log(load.name.common);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
            <div class="card">
            <img src="${load.coatOfArms.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Country Name: ${load.name.common}</h5>
            <h6 class="card-title">Time Zone: ${load.timezones}</h6>
            <button onclick="loadCountryDetails('${load.name.common}')">Details</button>
            </div>
          </div>
        `
        row.appendChild(createDiv);
    }
}

// button load details 
const loadCountryDetails = countryDetails => {
    const url = `https://restcountries.com/v3.1/name/${countryDetails}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayLoadDetails(data[0]))
}

const displayLoadDetails = countryShowUi => {
    console.log(countryShowUi.area);
    const card =document.getElementById('card');
    card.innerHTML=`
    <img id="button-details" src="${countryShowUi.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country Name: ${countryShowUi.name.common}</h5>
      <h6 class="card-title">Capital: ${countryShowUi.capital}</h6>
      <h6 class="card-title">Region: ${countryShowUi.region}</h6>
      <h6 class="card-title">Population: ${countryShowUi.population}</h6>
      <h6 class="card-title">Area: ${countryShowUi.area}</h6>
    </div>
    `


}