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
  
  return data.events;
}