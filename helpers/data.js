export const navData = [
  { text: 'About Us', href: '/about-us' },
  {text: 'Trending', href: '/trending'},
  {text: 'Search a Company', href: '/search'},
  { text: 'Developers', href: '/dev',
    subData: [
      { text: 'Using CABANA API', href: '/dev/api' },
      { text: 'Suggestions', href: '/dev/contact' },
    ]
  }
];

export const trendingDesc = 'The higher the score, the better the company performed in relevant ESG metrics.';

export const ESGCategories = [
  'Social Opportunity',
  'Social Risk',
  'Environmental Opportunity',
  'Environmental Risk',
  'Governance Opportunity',
  'Governance Risk',
];

export const nasdaq100 = [
  'Apple Inc', 'Microsoft Corp', 'NVIDIA Corp', 'Amazon.com Inc', 'Broadcom Inc', 'Meta Platforms Inc', 'Costco Wholesale Corp', 'Netflix Inc', 'Tesla Inc', 'Alphabet Inc', 'T-Mobile US Inc', 'Cisco Systems Inc', 
  'PepsiCo Inc', 'Palantir Technologies Inc', 'Intuitive Surgical Inc', 'Amgen Inc', 'Intuit Inc', 'Adobe Inc',
  'Qualcomm Inc', 'Booking Holdings Inc', 'Advanced Micro Devices Inc', 'Texas Instruments Inc', 'Gilead Sciences Inc', 'Comcast Corp', 'Honeywell International Inc', 'Vertex Pharmaceuticals Inc', 'Automatic Data Processing Inc', 'Applied Materials Inc',
  'Palo Alto Networks Inc', 'MercadoLibre Inc', 'Starbucks Corp', 'Intel Corp', 'Mondelez International Inc', 'Analog Devices Inc',
  'Cintas Corp', 'KLA Corp', 'Lam Research Corp', 'CrowdStrike Holdings Inc', 'Micron Technology Inc', 'Microstrategy Inc', 'PDD Holdings Inc', 'Applovin Corp', 'Fortinet Inc', 'DoorDash Inc', 'Cadence Design Systems Inc', 'Regeneron Pharmaceuticals Inc', 
  'Synopsys Inc', 'Marriott International Inc', 'Roper Technologies Inc', 'PayPal Holdings Inc', 'American Electric Power Company Inc', 'Monster Beverage Corp', 'ASML Holding NV', 'Autodesk Inc', 'Copart Inc', 'Paychex Inc',
  'CSX Corp', 'Charter Communications Inc', 'Paccar Inc', 'Workday Inc', 'Airbnb Inc', 'Keurig Dr Pepper Inc', 'Exelon Corp', 'Ross Stores Inc', 'Marvell Technology Inc', 'Fastenal Co',
  'NXP Semiconductors NV', 'Verisk Analytics Inc', 'AstraZeneca PLC', 'Xcel Energy Inc', 'Coca-Cola Europacific Partners PLC', 'Axon Enterprise Inc', 'Diamondback Energy Inc', 'Kraft Heinz Co', 'Electronic Arts Inc', 'Baker Hughes Co',
  'Take-Two Interactive Software Inc', 'Cognizant Technology Solutions Corp', 'Old Dominion Freight Line Inc', 'IDEXX Laboratories Inc', 'Atlassian Corporation Ltd', 'Lululemon Athletica Inc', 'CoStar Group Inc', 'Datadog Inc', 'Zscaler Inc',
  'ANSYS Inc', 'Dexcom Inc', 'Trade Desk Inc', 'Warner Bros Discovery Inc', 'Microchip Technology Inc', 'CDW Corp', 'Biogen Inc', 'ON Semiconductor Corp', 'MongoDB Inc'
]

/////////////////////
// TOP 10 DATA /////
////////////////////

export const socialRisk10 = [ 
  {company_name: 'Lululemon Athletica Inc', score: 1},
  {company_name: 'Microsoft Corp', score: 0.9811827956989246},
  {company_name: 'Apple Inc', score: 0.9758064516129031},
  {company_name: 'Synopsys Inc', score: 0.9572208436724565},
  {company_name: 'Marvell Technology Inc', score: 0.9340468227424749},
  {company_name: 'Lam Research Corp', score: 0.9097109412326804},
  {company_name: 'Netflix Inc', score: 0.9090909090909091},
  {company_name: 'Workday Inc', score: 0.9090909090909091},
  {company_name: 'Ross Stores Inc', score: 0.9090909090909091},
  {company_name: 'Amazon.com Inc', score: 0.9041563275434242}
]

export const socialOpp10 = [
  {company_name: 'NXP Semiconductors NV', score: 0.7321706729169823},
  {company_name: 'PepsiCo Inc', score: 0.7302621443694018},
  {company_name: 'AstraZeneca PLC', score: 0.7268607528995719},
  {company_name: 'Microsoft Corp', score: 0.7090676842828173},
  {company_name: 'Micron Technology Inc', score: 0.7070203389821342},
  {company_name: 'ASML Holding NV', score: 0.7053278840681267},
  {company_name: 'Starbucks Corp', score: 0.6957369354773915},
  {company_name: 'Gilead Sciences Inc', score: 0.6859491976795451},
  {company_name: 'Mondelez International Inc', score: 0.6805182861886524},
  {company_name: 'Coca-Cola Europacific Partners PLC', score: 0.676572023471018}
]

export const envRisk10 = [
  {company_name: 'Palo Alto Networks Inc', score: 0.8198619946162526},
  {company_name: 'Microstrategy Inc', score: 0.7817430622417506},
  {company_name: 'Zscaler Inc', score: 0.7545782784501947},
  {company_name: 'Dexcom Inc', score: 0.7457868881364466},
  {company_name: 'Palantir Technologies Inc', score: 0.7345622892299892},
  {company_name: 'Atlassian Corporation Ltd', score: 0.7335232565796901},
  {company_name: 'MongoDB Inc', score: 0.7290537721636848},
  {company_name: 'Trade Desk Inc', score: 0.7183839589009521},
  {company_name: 'Applovin Corp', score: 0.7144291091736407},
  {company_name: 'CrowdStrike Holdings Inc', score: 0.7136156412684738}
]

export const envOpp10 = [
  {company_name: 'Microsoft Corp', score: 0.7821258982353336},
  {company_name: 'Amazon.com Inc', score: 0.7721032880281553},
  {company_name: 'PepsiCo Inc', score: 0.7688373482164218},
  {company_name: 'Intel Corp', score: 0.7573195898450811},
  {company_name: 'Cisco Systems Inc', score: 0.7222261992138608},
  {company_name: 'AstraZeneca PLC', score: 0.6987305271443233},
  {company_name: 'Apple Inc', score: 0.6808089761943416},
  {company_name: 'Exelon Corp', score: 0.6680898836356975},
  {company_name: 'IDEXX Laboratories Inc', score: 0.6675600134547198},
  {company_name: 'Autodesk Inc', score: 0.6615213953154557}
]

export const govRisk10 = [
  {company_name: 'Fortinet Inc', score: 0.8010618060939538},
  {company_name: 'ASML Holding NV', score: 0.756196570493555},
  {company_name: 'MongoDB Inc', score: 0.7240845920621202},
  {company_name: 'Gilead Sciences Inc', score: 0.7228598169038152},
  {company_name: 'Coca-Cola Europacific Partners PLC', score: 0.7144441725875808},
  {company_name: 'Cintas Corp', score: 0.712319311031825},
  {company_name: 'MercadoLibre Inc', score: 0.7010121492566298},
  {company_name: 'AstraZeneca PLC', score: 0.6985167853418204},
  {company_name: 'Intel Corp', score: 0.6865164570788064},
  {company_name: 'Adobe Inc', score: 0.6840211386545911}
]

export const govOpp10 = [
  {company_name: 'PepsiCo Inc', score: 0.8015162140337456},
  {company_name: 'Mondelez International Inc', score: 0.763345233541587},
  {company_name: 'Cisco Systems Inc', score: 0.7441972570829513},
  {company_name: 'Automatic Data Processing Inc', score: 0.7369461417497883},
  {company_name: 'ON Semiconductor Corp', score: 0.7346652003910068},
  {company_name: 'Amgen Inc', score: 0.7316494865583224},
  {company_name: 'Microsoft Corp', score: 0.725876196423181},
  {company_name: 'Honeywell International Inc', score: 0.7092521394765434},
  {company_name: 'NVIDIA Corp', score: 0.7004096009180161},
  {company_name: 'Analog Devices Inc', score: 0.6995814688661813}
]

export const top10Nasdaq = [
  {company_name: 'Microsoft Corp', social: 0.8451, environmental: 0.5922, governance: 0.6893, average_score: 0.7089},
  {company_name: 'ASML Holding NV', social: 0.7569, environmental: 0.5513, governance: 0.7197, average_score: 0.676},
  {company_name: 'Palo Alto Networks Inc', social: 0.75, environmental: 0.6601, governance: 0.6068, average_score: 0.6723},
  {company_name: 'Cisco Systems Inc', social: 0.7211, environmental: 0.6279, governance: 0.6218, average_score: 0.657},
  {company_name: 'Lam Research Corp', social: 0.7214, environmental: 0.5532, governance: 0.6798, average_score: 0.6515},
  {company_name: 'Gilead Sciences Inc', social: 0.7394, environmental: 0.5148, governance: 0.6959, average_score: 0.6501},
  {company_name: 'Analog Devices Inc', social: 0.7031, environmental: 0.6036, governance: 0.6387, average_score: 0.6484},
  {company_name: 'Intel Corp', social: 0.7241, environmental: 0.5322, governance: 0.6873, average_score: 0.6479},
  {company_name: 'Vertex Pharmaceuticals Inc', social: 0.6942, environmental: 0.5539, governance: 0.6698, average_score: 0.6393},
  {company_name: 'Mondelez International Inc', social: 0.7634, environmental: 0.4442, governance: 0.7035, average_score: 0.637}
]