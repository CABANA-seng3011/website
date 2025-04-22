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

export const FullNasdaqScores = [
  {
    "company_name": "Microsoft Corp",
    "average_score": 0.7089,
    "category_scores": {
      "Social Opportunity": 0.7091,
      "Social Risk": 0.9812,
      "Environmental Opportunity": 0.7821,
      "Environmental Risk": 0.4022,
      "Governance Opportunity": 0.7259,
      "Governance Risk": 0.6528
    }
  },
  {
    "company_name": "ASML Holding NV",
    "average_score": 0.676,
    "category_scores": {
      "Social Opportunity": 0.7053,
      "Social Risk": 0.8085,
      "Environmental Opportunity": 0.5352,
      "Environmental Risk": 0.5673,
      "Governance Opportunity": 0.6832,
      "Governance Risk": 0.7562
    }
  },
  {
    "company_name": "Palo Alto Networks Inc",
    "average_score": 0.6723,
    "category_scores": {
      "Social Opportunity": 0.5963,
      "Social Risk": 0.9038,
      "Environmental Opportunity": 0.5003,
      "Environmental Risk": 0.8199,
      "Governance Opportunity": 0.6394,
      "Governance Risk": 0.5743
    }
  },
  {
    "company_name": "Cisco Systems Inc",
    "average_score": 0.657,
    "category_scores": {
      "Social Opportunity": 0.6462,
      "Social Risk": 0.796,
      "Environmental Opportunity": 0.7222,
      "Environmental Risk": 0.5335,
      "Governance Opportunity": 0.7442,
      "Governance Risk": 0.4995
    }
  },
  {
    "company_name": "Lam Research Corp",
    "average_score": 0.6515,
    "category_scores": {
      "Social Opportunity": 0.5331,
      "Social Risk": 0.9097,
      "Environmental Opportunity": 0.5331,
      "Environmental Risk": 0.5734,
      "Governance Opportunity": 0.6915,
      "Governance Risk": 0.6682
    }
  },
  {
    "company_name": "Gilead Sciences Inc",
    "average_score": 0.6501,
    "category_scores": {
      "Social Opportunity": 0.6859,
      "Social Risk": 0.7929,
      "Environmental Opportunity": 0.5927,
      "Environmental Risk": 0.437,
      "Governance Opportunity": 0.669,
      "Governance Risk": 0.7229
    }
  },
  {
    "company_name": "Analog Devices Inc",
    "average_score": 0.6484,
    "category_scores": {
      "Social Opportunity": 0.5219,
      "Social Risk": 0.8842,
      "Environmental Opportunity": 0.6455,
      "Environmental Risk": 0.5616,
      "Governance Opportunity": 0.6996,
      "Governance Risk": 0.5778
    }
  },
  {
    "company_name": "Intel Corp",
    "average_score": 0.6479,
    "category_scores": {
      "Social Opportunity": 0.6269,
      "Social Risk": 0.8212,
      "Environmental Opportunity": 0.7573,
      "Environmental Risk": 0.3072,
      "Governance Opportunity": 0.688,
      "Governance Risk": 0.6865
    }
  },
  {
    "company_name": "Intuitive Surgical Inc",
    "average_score": 0.6462,
    "category_scores": {
      "Social Opportunity": 0.624,
      "Social Risk": 0.781,
      "Environmental Opportunity": 0.6082,
      "Environmental Risk": 0.5971,
      "Governance Opportunity": 0.6449,
      "Governance Risk": 0.6218
    }
  },
  {
    "company_name": "Vertex Pharmaceuticals Inc",
    "average_score": 0.6393,
    "category_scores": {
      "Social Opportunity": 0.6669,
      "Social Risk": 0.7214,
      "Environmental Opportunity": 0.4456,
      "Environmental Risk": 0.6622,
      "Governance Opportunity": 0.6705,
      "Governance Risk": 0.669
    }
  },
  {
    "company_name": "Mondelez International Inc",
    "average_score": 0.637,
    "category_scores": {
      "Social Opportunity": 0.6805,
      "Social Risk": 0.8463,
      "Environmental Opportunity": 0.6131,
      "Environmental Risk": 0.2753,
      "Governance Opportunity": 0.7633,
      "Governance Risk": 0.6437
    }
  },
  {
    "company_name": "KLA Corp",
    "average_score": 0.6271,
    "category_scores": {
      "Social Opportunity": 0.4202,
      "Social Risk": 0.8486,
      "Environmental Opportunity": 0.516,
      "Environmental Risk": 0.6881,
      "Governance Opportunity": 0.6599,
      "Governance Risk": 0.6297
    }
  },
  {
    "company_name": "PepsiCo Inc",
    "average_score": 0.6269,
    "category_scores": {
      "Social Opportunity": 0.7303,
      "Social Risk": 0.895,
      "Environmental Opportunity": 0.7688,
      "Environmental Risk": 0.1575,
      "Governance Opportunity": 0.8015,
      "Governance Risk": 0.4084
    }
  },
  {
    "company_name": "Amazon.com Inc",
    "average_score": 0.6182,
    "category_scores": {
      "Social Opportunity": 0.5957,
      "Social Risk": 0.9042,
      "Environmental Opportunity": 0.7721,
      "Environmental Risk": 0.2794,
      "Governance Opportunity": 0.5063,
      "Governance Risk": 0.6513
    }
  },
  {
    "company_name": "AstraZeneca PLC",
    "average_score": 0.6134,
    "category_scores": {
      "Social Opportunity": 0.7269,
      "Social Risk": 0.7263,
      "Environmental Opportunity": 0.6987,
      "Environmental Risk": 0.3392,
      "Governance Opportunity": 0.4907,
      "Governance Risk": 0.6985
    }
  },
  {
    "company_name": "NVIDIA Corp",
    "average_score": 0.6123,
    "category_scores": {
      "Social Opportunity": 0.4897,
      "Social Risk": 0.7805,
      "Environmental Opportunity": 0.5448,
      "Environmental Risk": 0.5142,
      "Governance Opportunity": 0.7004,
      "Governance Risk": 0.6445
    }
  },
  {
    "company_name": "Coca-Cola Europacific Partners PLC",
    "average_score": 0.6118,
    "category_scores": {
      "Social Opportunity": 0.6766,
      "Social Risk": 0.7806,
      "Environmental Opportunity": 0.6219,
      "Environmental Risk": 0.2663,
      "Governance Opportunity": 0.6113,
      "Governance Risk": 0.7144
    }
  },
  {
    "company_name": "Meta Platforms Inc",
    "average_score": 0.608,
    "category_scores": {
      "Social Opportunity": 0.5599,
      "Social Risk": 0.8817,
      "Environmental Opportunity": 0.579,
      "Environmental Risk": 0.5094,
      "Governance Opportunity": 0.5034,
      "Governance Risk": 0.6144
    }
  },
  {
    "company_name": "Synopsys Inc",
    "average_score": 0.6047,
    "category_scores": {
      "Social Opportunity": 0.3558,
      "Social Risk": 0.9572,
      "Environmental Opportunity": 0.4775,
      "Environmental Risk": 0.6246,
      "Governance Opportunity": 0.5349,
      "Governance Risk": 0.678
    }
  },
  {
    "company_name": "Fortinet Inc",
    "average_score": 0.6013,
    "category_scores": {
      "Social Opportunity": 0.4266,
      "Social Risk": 0.7,
      "Environmental Opportunity": 0.3682,
      "Environmental Risk": 0.6832,
      "Governance Opportunity": 0.6286,
      "Governance Risk": 0.8011
    }
  },
  {
    "company_name": "Amgen Inc",
    "average_score": 0.5999,
    "category_scores": {
      "Social Opportunity": 0.5309,
      "Social Risk": 0.7616,
      "Environmental Opportunity": 0.5795,
      "Environmental Risk": 0.4487,
      "Governance Opportunity": 0.7316,
      "Governance Risk": 0.5468
    }
  },
  {
    "company_name": "Lululemon Athletica Inc",
    "average_score": 0.5959,
    "category_scores": {
      "Social Opportunity": 0.4984,
      "Social Risk": 1.0,
      "Environmental Opportunity": 0.5792,
      "Environmental Risk": 0.5758,
      "Governance Opportunity": 0.498,
      "Governance Risk": 0.4242
    }
  },
  {
    "company_name": "Micron Technology Inc",
    "average_score": 0.5939,
    "category_scores": {
      "Social Opportunity": 0.707,
      "Social Risk": 0.879,
      "Environmental Opportunity": 0.4688,
      "Environmental Risk": 0.3654,
      "Governance Opportunity": 0.5897,
      "Governance Risk": 0.5534
    }
  },
  {
    "company_name": "Advanced Micro Devices Inc",
    "average_score": 0.5917,
    "category_scores": {
      "Social Opportunity": 0.5419,
      "Social Risk": 0.8747,
      "Environmental Opportunity": 0.53,
      "Environmental Risk": 0.5993,
      "Governance Opportunity": 0.5828,
      "Governance Risk": 0.4215
    }
  },
  {
    "company_name": "Autodesk Inc",
    "average_score": 0.5888,
    "category_scores": {
      "Social Opportunity": 0.4263,
      "Social Risk": 0.7463,
      "Environmental Opportunity": 0.6615,
      "Environmental Risk": 0.6818,
      "Governance Opportunity": 0.5752,
      "Governance Risk": 0.4416
    }
  },
  {
    "company_name": "Cintas Corp",
    "average_score": 0.5886,
    "category_scores": {
      "Social Opportunity": 0.5479,
      "Social Risk": 0.8581,
      "Environmental Opportunity": 0.4483,
      "Environmental Risk": 0.4206,
      "Governance Opportunity": 0.5447,
      "Governance Risk": 0.7123
    }
  },
  {
    "company_name": "ON Semiconductor Corp",
    "average_score": 0.5884,
    "category_scores": {
      "Social Opportunity": 0.5373,
      "Social Risk": 0.7765,
      "Environmental Opportunity": 0.5435,
      "Environmental Risk": 0.3894,
      "Governance Opportunity": 0.7347,
      "Governance Risk": 0.5489
    }
  },
  {
    "company_name": "Texas Instruments Inc",
    "average_score": 0.5881,
    "category_scores": {
      "Social Opportunity": 0.5999,
      "Social Risk": 0.8344,
      "Environmental Opportunity": 0.5133,
      "Environmental Risk": 0.3548,
      "Governance Opportunity": 0.6057,
      "Governance Risk": 0.6204
    }
  },
  {
    "company_name": "IDEXX Laboratories Inc",
    "average_score": 0.583,
    "category_scores": {
      "Social Opportunity": 0.535,
      "Social Risk": 0.7255,
      "Environmental Opportunity": 0.6676,
      "Environmental Risk": 0.6574,
      "Governance Opportunity": 0.5072,
      "Governance Risk": 0.4053
    }
  },
  {
    "company_name": "Electronic Arts Inc",
    "average_score": 0.5819,
    "category_scores": {
      "Social Opportunity": 0.4592,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.4841,
      "Environmental Risk": 0.6336,
      "Governance Opportunity": 0.5849,
      "Governance Risk": 0.5115
    }
  },
  {
    "company_name": "Baker Hughes Co",
    "average_score": 0.5819,
    "category_scores": {
      "Social Opportunity": 0.5824,
      "Social Risk": 0.8247,
      "Environmental Opportunity": 0.5899,
      "Environmental Risk": 0.2171,
      "Governance Opportunity": 0.6572,
      "Governance Risk": 0.6204
    }
  },
  {
    "company_name": "Diamondback Energy Inc",
    "average_score": 0.5802,
    "category_scores": {
      "Social Opportunity": 0.504,
      "Social Risk": 0.8607,
      "Environmental Opportunity": 0.5422,
      "Environmental Risk": 0.4477,
      "Governance Opportunity": 0.4887,
      "Governance Risk": 0.6378
    }
  },
  {
    "company_name": "Automatic Data Processing Inc",
    "average_score": 0.5789,
    "category_scores": {
      "Social Opportunity": 0.3989,
      "Social Risk": 0.7089,
      "Environmental Opportunity": 0.3688,
      "Environmental Risk": 0.583,
      "Governance Opportunity": 0.7369,
      "Governance Risk": 0.6767
    }
  },
  {
    "company_name": "Adobe Inc",
    "average_score": 0.578,
    "category_scores": {
      "Social Opportunity": 0.4362,
      "Social Risk": 0.6589,
      "Environmental Opportunity": 0.4836,
      "Environmental Risk": 0.5836,
      "Governance Opportunity": 0.6217,
      "Governance Risk": 0.684
    }
  },
  {
    "company_name": "Honeywell International Inc",
    "average_score": 0.5759,
    "category_scores": {
      "Social Opportunity": 0.5231,
      "Social Risk": 0.9,
      "Environmental Opportunity": 0.5244,
      "Environmental Risk": 0.1872,
      "Governance Opportunity": 0.7093,
      "Governance Risk": 0.6115
    }
  },
  {
    "company_name": "NXP Semiconductors NV",
    "average_score": 0.5738,
    "category_scores": {
      "Social Opportunity": 0.7322,
      "Social Risk": 0.7671,
      "Environmental Opportunity": 0.6484,
      "Environmental Risk": 0.3393,
      "Governance Opportunity": 0.5544,
      "Governance Risk": 0.4014
    }
  },
  {
    "company_name": "Qualcomm Inc",
    "average_score": 0.5693,
    "category_scores": {
      "Social Opportunity": 0.4999,
      "Social Risk": 0.7651,
      "Environmental Opportunity": 0.5285,
      "Environmental Risk": 0.4944,
      "Governance Opportunity": 0.6792,
      "Governance Risk": 0.4484
    }
  },
  {
    "company_name": "Verisk Analytics Inc",
    "average_score": 0.5691,
    "category_scores": {
      "Social Opportunity": 0.4308,
      "Social Risk": 0.775,
      "Environmental Opportunity": 0.4101,
      "Environmental Risk": 0.6844,
      "Governance Opportunity": 0.6714,
      "Governance Risk": 0.4428
    }
  },
  {
    "company_name": "Biogen Inc",
    "average_score": 0.568,
    "category_scores": {
      "Social Opportunity": 0.6265,
      "Social Risk": 0.6394,
      "Environmental Opportunity": 0.499,
      "Environmental Risk": 0.5337,
      "Governance Opportunity": 0.5102,
      "Governance Risk": 0.5988
    }
  },
  {
    "company_name": "Applied Materials Inc",
    "average_score": 0.5676,
    "category_scores": {
      "Social Opportunity": 0.4403,
      "Social Risk": 0.7536,
      "Environmental Opportunity": 0.4993,
      "Environmental Risk": 0.5127,
      "Governance Opportunity": 0.6074,
      "Governance Risk": 0.5924
    }
  },
  {
    "company_name": "MongoDB Inc",
    "average_score": 0.5666,
    "category_scores": {
      "Social Opportunity": 0.3445,
      "Social Risk": 0.6364,
      "Environmental Opportunity": 0.3839,
      "Environmental Risk": 0.7291,
      "Governance Opportunity": 0.5814,
      "Governance Risk": 0.7241
    }
  },
  {
    "company_name": "Kraft Heinz Co",
    "average_score": 0.562,
    "category_scores": {
      "Social Opportunity": 0.5891,
      "Social Risk": 0.8878,
      "Environmental Opportunity": 0.503,
      "Environmental Risk": 0.2332,
      "Governance Opportunity": 0.6306,
      "Governance Risk": 0.5285
    }
  },
  {
    "company_name": "Cadence Design Systems Inc",
    "average_score": 0.561,
    "category_scores": {
      "Social Opportunity": 0.3902,
      "Social Risk": 0.8037,
      "Environmental Opportunity": 0.4165,
      "Environmental Risk": 0.683,
      "Governance Opportunity": 0.473,
      "Governance Risk": 0.5999
    }
  },
  {
    "company_name": "Regeneron Pharmaceuticals Inc",
    "average_score": 0.5578,
    "category_scores": {
      "Social Opportunity": 0.5353,
      "Social Risk": 0.6891,
      "Environmental Opportunity": 0.4412,
      "Environmental Risk": 0.558,
      "Governance Opportunity": 0.4739,
      "Governance Risk": 0.6494
    }
  },
  {
    "company_name": "Take-Two Interactive Software Inc",
    "average_score": 0.556,
    "category_scores": {
      "Social Opportunity": 0.4888,
      "Social Risk": 0.8817,
      "Environmental Opportunity": 0.2727,
      "Environmental Risk": 0.6913,
      "Governance Opportunity": 0.3832,
      "Governance Risk": 0.6185
    }
  },
  {
    "company_name": "Intuit Inc",
    "average_score": 0.5532,
    "category_scores": {
      "Social Opportunity": 0.3622,
      "Social Risk": 0.7527,
      "Environmental Opportunity": 0.4751,
      "Environmental Risk": 0.6912,
      "Governance Opportunity": 0.5096,
      "Governance Risk": 0.5281
    }
  },
  {
    "company_name": "Microchip Technology Inc",
    "average_score": 0.5525,
    "category_scores": {
      "Social Opportunity": 0.5485,
      "Social Risk": 0.8867,
      "Environmental Opportunity": 0.4499,
      "Environmental Risk": 0.4298,
      "Governance Opportunity": 0.619,
      "Governance Risk": 0.3811
    }
  },
  {
    "company_name": "Starbucks Corp",
    "average_score": 0.5478,
    "category_scores": {
      "Social Opportunity": 0.6957,
      "Social Risk": 0.4739,
      "Environmental Opportunity": 0.5351,
      "Environmental Risk": 0.3404,
      "Governance Opportunity": 0.5718,
      "Governance Risk": 0.6697
    }
  },
  {
    "company_name": "Xcel Energy Inc",
    "average_score": 0.5441,
    "category_scores": {
      "Social Opportunity": 0.4984,
      "Social Risk": 0.7452,
      "Environmental Opportunity": 0.6223,
      "Environmental Risk": 0.1992,
      "Governance Opportunity": 0.5465,
      "Governance Risk": 0.6527
    }
  },
  {
    "company_name": "Keurig Dr Pepper Inc",
    "average_score": 0.5428,
    "category_scores": {
      "Social Opportunity": 0.5744,
      "Social Risk": 0.7836,
      "Environmental Opportunity": 0.6595,
      "Environmental Risk": 0.2687,
      "Governance Opportunity": 0.5976,
      "Governance Risk": 0.3731
    }
  },
  {
    "company_name": "Workday Inc",
    "average_score": 0.5411,
    "category_scores": {
      "Social Opportunity": 0.4173,
      "Social Risk": 0.9091,
      "Environmental Opportunity": 0.5393,
      "Environmental Risk": 0.6354,
      "Governance Opportunity": 0.2525,
      "Governance Risk": 0.4928
    }
  },
  {
    "company_name": "Marvell Technology Inc",
    "average_score": 0.5393,
    "category_scores": {
      "Social Opportunity": 0.4056,
      "Social Risk": 0.934,
      "Environmental Opportunity": 0.3859,
      "Environmental Risk": 0.557,
      "Governance Opportunity": 0.5088,
      "Governance Risk": 0.4447
    }
  },
  {
    "company_name": "MercadoLibre Inc",
    "average_score": 0.5385,
    "category_scores": {
      "Social Opportunity": 0.4798,
      "Social Risk": 0.716,
      "Environmental Opportunity": 0.3658,
      "Environmental Risk": 0.5018,
      "Governance Opportunity": 0.4662,
      "Governance Risk": 0.701
    }
  },
  {
    "company_name": "Paychex Inc",
    "average_score": 0.5362,
    "category_scores": {
      "Social Opportunity": 0.4551,
      "Social Risk": 0.8654,
      "Environmental Opportunity": 0.3125,
      "Environmental Risk": 0.6919,
      "Governance Opportunity": 0.3135,
      "Governance Risk": 0.5785
    }
  },
  {
    "company_name": "Netflix Inc",
    "average_score": 0.5308,
    "category_scores": {
      "Social Opportunity": 0.5118,
      "Social Risk": 0.9091,
      "Environmental Opportunity": 0.3681,
      "Environmental Risk": 0.4055,
      "Governance Opportunity": 0.5195,
      "Governance Risk": 0.471
    }
  },
  {
    "company_name": "Apple Inc",
    "average_score": 0.5265,
    "category_scores": {
      "Social Opportunity": 0.3628,
      "Social Risk": 0.9758,
      "Environmental Opportunity": 0.6808,
      "Environmental Risk": 0.3448,
      "Governance Opportunity": 0.3481,
      "Governance Risk": 0.4469
    }
  },
  {
    "company_name": "DoorDash Inc",
    "average_score": 0.5244,
    "category_scores": {
      "Social Opportunity": 0.381,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.2551,
      "Environmental Risk": 0.6858,
      "Governance Opportunity": 0.4561,
      "Governance Risk": 0.5501
    }
  },
  {
    "company_name": "Tesla Inc",
    "average_score": 0.5227,
    "category_scores": {
      "Social Opportunity": 0.5699,
      "Social Risk": 0.7932,
      "Environmental Opportunity": 0.4518,
      "Environmental Risk": 0.2963,
      "Governance Opportunity": 0.4589,
      "Governance Risk": 0.5661
    }
  },
  {
    "company_name": "Cognizant Technology Solutions Corp",
    "average_score": 0.5227,
    "category_scores": {
      "Social Opportunity": 0.5099,
      "Social Risk": 0.855,
      "Environmental Opportunity": 0.2246,
      "Environmental Risk": 0.4781,
      "Governance Opportunity": 0.5942,
      "Governance Risk": 0.4742
    }
  },
  {
    "company_name": "Alphabet Inc",
    "average_score": 0.5222,
    "category_scores": {
      "Social Opportunity": 0.336,
      "Social Risk": 0.7392,
      "Environmental Opportunity": 0.5999,
      "Environmental Risk": 0.4536,
      "Governance Opportunity": 0.3798,
      "Governance Risk": 0.6248
    }
  },
  {
    "company_name": "Roper Technologies Inc",
    "average_score": 0.5219,
    "category_scores": {
      "Social Opportunity": 0.4462,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.3134,
      "Environmental Risk": 0.464,
      "Governance Opportunity": 0.5361,
      "Governance Risk": 0.5536
    }
  },
  {
    "company_name": "Fastenal Co",
    "average_score": 0.5185,
    "category_scores": {
      "Social Opportunity": 0.4143,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.4482,
      "Environmental Risk": 0.4906,
      "Governance Opportunity": 0.5051,
      "Governance Risk": 0.4342
    }
  },
  {
    "company_name": "Booking Holdings Inc",
    "average_score": 0.5175,
    "category_scores": {
      "Social Opportunity": 0.5327,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.3148,
      "Environmental Risk": 0.4989,
      "Governance Opportunity": 0.5543,
      "Governance Risk": 0.3862
    }
  },
  {
    "company_name": "PayPal Holdings Inc",
    "average_score": 0.5122,
    "category_scores": {
      "Social Opportunity": 0.353,
      "Social Risk": 0.6426,
      "Environmental Opportunity": 0.4789,
      "Environmental Risk": 0.5159,
      "Governance Opportunity": 0.4735,
      "Governance Risk": 0.6092
    }
  },
  {
    "company_name": "Dexcom Inc",
    "average_score": 0.512,
    "category_scores": {
      "Social Opportunity": 0.3184,
      "Social Risk": 0.7955,
      "Environmental Opportunity": 0.2433,
      "Environmental Risk": 0.7458,
      "Governance Opportunity": 0.567,
      "Governance Risk": 0.402
    }
  },
  {
    "company_name": "Broadcom Inc",
    "average_score": 0.5106,
    "category_scores": {
      "Social Opportunity": 0.4454,
      "Social Risk": 0.8975,
      "Environmental Opportunity": 0.394,
      "Environmental Risk": 0.4063,
      "Governance Opportunity": 0.5494,
      "Governance Risk": 0.371
    }
  },
  {
    "company_name": "CSX Corp",
    "average_score": 0.506,
    "category_scores": {
      "Social Opportunity": 0.5611,
      "Social Risk": 0.8036,
      "Environmental Opportunity": 0.455,
      "Environmental Risk": 0.1652,
      "Governance Opportunity": 0.4233,
      "Governance Risk": 0.6278
    }
  },
  {
    "company_name": "CDW Corp",
    "average_score": 0.5035,
    "category_scores": {
      "Social Opportunity": 0.3112,
      "Social Risk": 0.6156,
      "Environmental Opportunity": 0.4448,
      "Environmental Risk": 0.535,
      "Governance Opportunity": 0.5417,
      "Governance Risk": 0.5726
    }
  },
  {
    "company_name": "T-Mobile US Inc",
    "average_score": 0.4944,
    "category_scores": {
      "Social Opportunity": 0.5023,
      "Social Risk": 0.778,
      "Environmental Opportunity": 0.5404,
      "Environmental Risk": 0.299,
      "Governance Opportunity": 0.3802,
      "Governance Risk": 0.4663
    }
  },
  {
    "company_name": "Warner Bros Discovery Inc",
    "average_score": 0.4937,
    "category_scores": {
      "Social Opportunity": 0.4635,
      "Social Risk": 0.8253,
      "Environmental Opportunity": 0.4849,
      "Environmental Risk": 0.403,
      "Governance Opportunity": 0.4654,
      "Governance Risk": 0.3202
    }
  },
  {
    "company_name": "CrowdStrike Holdings Inc",
    "average_score": 0.4874,
    "category_scores": {
      "Social Opportunity": 0.2743,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.1577,
      "Environmental Risk": 0.7136,
      "Governance Opportunity": 0.4263,
      "Governance Risk": 0.5346
    }
  },
  {
    "company_name": "Ross Stores Inc",
    "average_score": 0.4871,
    "category_scores": {
      "Social Opportunity": 0.4216,
      "Social Risk": 0.9091,
      "Environmental Opportunity": 0.4813,
      "Environmental Risk": 0.4363,
      "Governance Opportunity": 0.3353,
      "Governance Risk": 0.3388
    }
  },
  {
    "company_name": "Datadog Inc",
    "average_score": 0.4783,
    "category_scores": {
      "Social Opportunity": 0.4572,
      "Social Risk": 0.8182,
      "Environmental Opportunity": 0.3333,
      "Environmental Risk": 0.7045,
      "Governance Opportunity": 0.2294,
      "Governance Risk": 0.3271
    }
  },
  {
    "company_name": "Atlassian Corporation Ltd",
    "average_score": 0.4693,
    "category_scores": {
      "Social Opportunity": 0.4483,
      "Social Risk": 0.75,
      "Environmental Opportunity": 0.3385,
      "Environmental Risk": 0.7335,
      "Governance Opportunity": 0.2712,
      "Governance Risk": 0.2745
    }
  },
  {
    "company_name": "CoStar Group Inc",
    "average_score": 0.4691,
    "category_scores": {
      "Social Opportunity": 0.3202,
      "Social Risk": 0.6087,
      "Environmental Opportunity": 0.1488,
      "Environmental Risk": 0.7121,
      "Governance Opportunity": 0.3918,
      "Governance Risk": 0.6329
    }
  },
  {
    "company_name": "Microstrategy Inc",
    "average_score": 0.4676,
    "category_scores": {
      "Social Opportunity": 0.2166,
      "Social Risk": 0.6364,
      "Environmental Opportunity": 0.3297,
      "Environmental Risk": 0.7817,
      "Governance Opportunity": 0.3886,
      "Governance Risk": 0.4525
    }
  },
  {
    "company_name": "American Electric Power Company Inc",
    "average_score": 0.4673,
    "category_scores": {
      "Social Opportunity": 0.4667,
      "Social Risk": 0.812,
      "Environmental Opportunity": 0.3885,
      "Environmental Risk": 0.1345,
      "Governance Opportunity": 0.5894,
      "Governance Risk": 0.4125
    }
  },
  {
    "company_name": "Zscaler Inc",
    "average_score": 0.4635,
    "category_scores": {
      "Social Opportunity": 0.336,
      "Social Risk": 0.7273,
      "Environmental Opportunity": 0.2838,
      "Environmental Risk": 0.7546,
      "Governance Opportunity": 0.438,
      "Governance Risk": 0.2414
    }
  },
  {
    "company_name": "Paccar Inc",
    "average_score": 0.4616,
    "category_scores": {
      "Social Opportunity": 0.3735,
      "Social Risk": 0.8555,
      "Environmental Opportunity": 0.358,
      "Environmental Risk": 0.2738,
      "Governance Opportunity": 0.3241,
      "Governance Risk": 0.5849
    }
  },
  {
    "company_name": "ANSYS Inc",
    "average_score": 0.4561,
    "category_scores": {
      "Social Opportunity": 0.3685,
      "Social Risk": 0.65,
      "Environmental Opportunity": 0.4031,
      "Environmental Risk": 0.6994,
      "Governance Opportunity": 0.4593,
      "Governance Risk": 0.1561
    }
  },
  {
    "company_name": "Exelon Corp",
    "average_score": 0.4554,
    "category_scores": {
      "Social Opportunity": 0.4455,
      "Social Risk": 0.6512,
      "Environmental Opportunity": 0.6681,
      "Environmental Risk": 0.0914,
      "Governance Opportunity": 0.4275,
      "Governance Risk": 0.4487
    }
  },
  {
    "company_name": "Comcast Corp",
    "average_score": 0.4551,
    "category_scores": {
      "Social Opportunity": 0.3459,
      "Social Risk": 0.6364,
      "Environmental Opportunity": 0.3444,
      "Environmental Risk": 0.337,
      "Governance Opportunity": 0.58,
      "Governance Risk": 0.4869
    }
  },
  {
    "company_name": "Old Dominion Freight Line Inc",
    "average_score": 0.4458,
    "category_scores": {
      "Social Opportunity": 0.2898,
      "Social Risk": 0.8509,
      "Environmental Opportunity": 0.2464,
      "Environmental Risk": 0.4028,
      "Governance Opportunity": 0.4166,
      "Governance Risk": 0.4684
    }
  },
  {
    "company_name": "Applovin Corp",
    "average_score": 0.4455,
    "category_scores": {
      "Social Opportunity": 0.2723,
      "Social Risk": 0.5455,
      "Environmental Opportunity": 0.1604,
      "Environmental Risk": 0.7144,
      "Governance Opportunity": 0.3586,
      "Governance Risk": 0.6217
    }
  },
  {
    "company_name": "Costco Wholesale Corp",
    "average_score": 0.4449,
    "category_scores": {
      "Social Opportunity": 0.416,
      "Social Risk": 0.6491,
      "Environmental Opportunity": 0.3987,
      "Environmental Risk": 0.2322,
      "Governance Opportunity": 0.5149,
      "Governance Risk": 0.4588
    }
  },
  {
    "company_name": "Axon Enterprise Inc",
    "average_score": 0.4341,
    "category_scores": {
      "Social Opportunity": 0.344,
      "Social Risk": 0.665,
      "Environmental Opportunity": 0.155,
      "Environmental Risk": 0.6507,
      "Governance Opportunity": 0.4785,
      "Governance Risk": 0.3112
    }
  },
  {
    "company_name": "PDD Holdings Inc",
    "average_score": 0.4304,
    "category_scores": {
      "Social Opportunity": 0.1833,
      "Social Risk": 0.6667,
      "Environmental Opportunity": 0.3226,
      "Environmental Risk": 0.5093,
      "Governance Opportunity": 0.3525,
      "Governance Risk": 0.5482
    }
  },
  {
    "company_name": "Trade Desk Inc",
    "average_score": 0.4204,
    "category_scores": {
      "Social Opportunity": 0.275,
      "Social Risk": 0.6364,
      "Environmental Opportunity": 0.2491,
      "Environmental Risk": 0.7184,
      "Governance Opportunity": 0.3484,
      "Governance Risk": 0.2949
    }
  },
  {
    "company_name": "Monster Beverage Corp",
    "average_score": 0.4196,
    "category_scores": {
      "Social Opportunity": 0.406,
      "Social Risk": 0.7273,
      "Environmental Opportunity": 0.2076,
      "Environmental Risk": 0.4666,
      "Governance Opportunity": 0.3377,
      "Governance Risk": 0.3726
    }
  },
  {
    "company_name": "Marriott International Inc",
    "average_score": 0.4013,
    "category_scores": {
      "Social Opportunity": 0.5331,
      "Social Risk": 0.688,
      "Environmental Opportunity": 0.3375,
      "Environmental Risk": 0.1962,
      "Governance Opportunity": 0.3998,
      "Governance Risk": 0.2534
    }
  },
  {
    "company_name": "Airbnb Inc",
    "average_score": 0.3996,
    "category_scores": {
      "Social Opportunity": 0.2786,
      "Social Risk": 0.7273,
      "Environmental Opportunity": 0.1973,
      "Environmental Risk": 0.4682,
      "Governance Opportunity": 0.2275,
      "Governance Risk": 0.4986
    }
  },
  {
    "company_name": "Palantir Technologies Inc",
    "average_score": 0.384,
    "category_scores": {
      "Social Opportunity": 0.2626,
      "Social Risk": 0.4545,
      "Environmental Opportunity": 0.1649,
      "Environmental Risk": 0.7346,
      "Governance Opportunity": 0.2972,
      "Governance Risk": 0.3904
    }
  },
  {
    "company_name": "Copart Inc",
    "average_score": 0.3683,
    "category_scores": {
      "Social Opportunity": 0.3638,
      "Social Risk": 0.6364,
      "Environmental Opportunity": 0.0627,
      "Environmental Risk": 0.5754,
      "Governance Opportunity": 0.2456,
      "Governance Risk": 0.3263
    }
  },
  {
    "company_name": "Charter Communications Inc",
    "average_score": 0.3221,
    "category_scores": {
      "Social Opportunity": 0.2305,
      "Social Risk": 0.5769,
      "Environmental Opportunity": 0.2789,
      "Environmental Risk": 0.3604,
      "Governance Opportunity": 0.3486,
      "Governance Risk": 0.1374
    }
  }
]