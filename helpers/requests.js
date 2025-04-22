const URL = 'https://esg-hub-staging.up.railway.app';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// GET /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function fetchGetMetrics(category, company) {
  const req = '/get?category=' + category + '&columns=metric_name,metric_value,percentile&company_name=company'

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  const data = JSON.parse(json);
  return data.events;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// NASDAQ /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function fetchNasdaq100() {
  const req = '/get/nasdaq100?columns=company_name,metric_name,metric_value,percentile';

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  const data = JSON.parse(json);
  return data.events;
}

export async function fetchNasdaq100Category(category, top10) {
  const req = '/score?category=' + category;

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  const data = JSON.parse(json);
  const filtered = data.events.filter(
    event => event.category?.trim().toLowerCase() === category.trim().toLowerCase()
  );
  
  const edited = data.events.filter(event => event.category === category);

  const sorted = edited.sort((a, b) => b.score - a.score);

  const top = sorted.slice(0, 10);
  if (top10) {
    return top.map(({ company_name, score }) => ({ company_name, score }));
  } else {
    return sorted.map(({ company_name, score }) => ({ company_name, score }));
  }
}

export async function fetchNasdaq100Company(company) {
  const req = '/score?company=' + company;
  console.log('Request:', URL + req);
  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  const data = JSON.parse(json);
  return data.events;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// TICKER /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function fetchTicker(company) {
  const req = '/searchName?name=' + company;

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  for (const e of json.events) {
    if (e.exchange === "NASDAQ") {
      return e.symbol;
    }
  }
  return json.events;
}

export async function fetchFinOverview(ticker) {
  const req = '/financesOverview/' + ticker;

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  return json;
}