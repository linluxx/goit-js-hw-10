import { getRefs } from './getRefs';

const refs = getRefs();

export function clearCountryList() {
  return (refs.list.innerHTML = '');
}

export function clearCountryInfo() {
  return (refs.info.innerHTML = '');
}

export function renderCountryList(data) {
  return data
    .map(item => {
      refs.list.insertAdjacentHTML(
        'beforeend',
        `<li class='country-list-item'>
        <img src="${item.flags.svg}" alt="" width = 30 >
        <p class="country-list-text">${item.name.official}</p>
      </li>
      `
      );
    })
    .join('');
}
export function renderCountryInfo(data) {
  return data
    .map(country => {
      refs.info.insertAdjacentHTML(
        'beforeend',
        `
      
       <div class="wrap"> <img src="${country.flags.svg}" alt="" width = 50>
      <p class="country-title">${country.name.common}</p> </div>
      <p class="country-description">Capital: <span class="country-description-name">${
        country.capital
      }</span></p>
      <p class="country-description">Population: <span class="country-description-name">${
        country.population
      }</span></p>
      <p class="country-description">Languages: <span class="country-description-name">${Object.values(
        country.languages
      )}</span></p>
        
        `
      );
    })
    .join('');
}
