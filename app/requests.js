const URL = 'https://esg-hub-staging.up.railway.app';

export async function fetchNasdaq100() {
  const req = '/get/nasdaq100?columns=company_name,metric_name,metric_value,percentile';

  const res = await fetch(URL + req);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const json = await res.json();

  const grouped = {};
  for (const event of json.events) {
    const { company_name } = event;
    if (!grouped[company_name]) {
      grouped[company_name] = [];
    }
    grouped[company_name].push(event);
  }

  return grouped;
}