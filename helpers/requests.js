const URL = 'https://esg-hub-staging.up.railway.app';

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

export async function fetchNasdaq100Category(category) {
  const req = '/score?category=' + category;

  const res = await fetch(URL + req);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();
  const data = JSON.parse(json);
  
  const filtered = data.events.filter(event => event.category === category);

  const sorted = filtered.sort((a, b) => b.score - a.score);

  const top10 = sorted.slice(0, 10);
  console.log(top10.map(({ company_name, score }) => ({ company_name, score })))

  return top10.map(({ company_name, score }) => ({ company_name, score }));
}