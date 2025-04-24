const comp_constants = [
  {
    "company_name": "Apple Inc",
    "ticker": "AAPL",
    "scores": {
      "environmental": 29,
      "social": 84,
      "governance": 100
    },
    "stockPrice": 322
  },
  {
    "company_name": "Microsoft Corp",
    "ticker": "MSFT",
    "scores": {
      "environmental": 87,
      "social": 96,
      "governance": 82
    },
    "stockPrice": 288
  },
  {
    "company_name": "NVIDIA Corp",
    "ticker": "NVDA",
    "scores": {
      "environmental": 98,
      "social": 62,
      "governance": 62
    },
    "stockPrice": 412
  },
  {
    "company_name": "Amazon.com Inc",
    "ticker": "AMZN",
    "scores": {
      "environmental": 82,
      "social": 88,
      "governance": 55
    },
    "stockPrice": 56
  },
  {
    "company_name": "Broadcom Inc",
    "ticker": "AVGO",
    "scores": {
      "environmental": 77,
      "social": 61,
      "governance": 70
    },
    "stockPrice": 473
  },
  {
    "company_name": "Meta Platforms Inc",
    "ticker": "META",
    "scores": {
      "environmental": 68,
      "social": 83,
      "governance": 75
    },
    "stockPrice": 202
  },
  {
    "company_name": "Costco Wholesale Corp",
    "ticker": "COST",
    "scores": {
      "environmental": 92,
      "social": 56,
      "governance": 79
    },
    "stockPrice": 467
  },
  {
    "company_name": "Netflix Inc",
    "ticker": "NFLX",
    "scores": {
      "environmental": 62,
      "social": 83,
      "governance": 57
    },
    "stockPrice": 54
  },
  {
    "company_name": "Tesla Inc",
    "ticker": "TSLA",
    "scores": {
      "environmental": 52,
      "social": 77,
      "governance": 74
    },
    "stockPrice": 120
  },
  {
    "company_name": "Alphabet Inc",
    "ticker": "GOOGL",
    "scores": {
      "environmental": 77,
      "social": 91,
      "governance": 51
    },
    "stockPrice": 440
  },
  {
    "company_name": "T-Mobile US Inc",
    "ticker": "TMUS",
    "scores": {
      "environmental": 77,
      "social": 77,
      "governance": 75
    },
    "stockPrice": 375
  },
  {
    "company_name": "Cisco Systems Inc",
    "ticker": "CSCO",
    "scores": {
      "environmental": 88,
      "social": 65,
      "governance": 64
    },
    "stockPrice": 488
  },
  {
    "company_name": "PepsiCo Inc",
    "ticker": "PEP",
    "scores": {
      "environmental": 92,
      "social": 67,
      "governance": 68
    },
    "stockPrice": 461
  },
  {
    "company_name": "Palantir Technologies Inc",
    "ticker": "PLTR",
    "scores": {
      "environmental": 95,
      "social": 57,
      "governance": 99
    },
    "stockPrice": 471
  },
  {
    "company_name": "Intuitive Surgical Inc",
    "ticker": "ISRG",
    "scores": {
      "environmental": 75,
      "social": 91,
      "governance": 60
    },
    "stockPrice": 289
  },
  {
    "company_name": "Amgen Inc",
    "ticker": "AMGN",
    "scores": {
      "environmental": 75,
      "social": 74,
      "governance": 97
    },
    "stockPrice": 70
  },
  {
    "company_name": "Intuit Inc",
    "ticker": "INTU",
    "scores": {
      "environmental": 89,
      "social": 93,
      "governance": 60
    },
    "stockPrice": 477
  },
  {
    "company_name": "Adobe Inc",
    "ticker": "ADBE",
    "scores": {
      "environmental": 75,
      "social": 67,
      "governance": 66
    },
    "stockPrice": 435
  },
  {
    "company_name": "Qualcomm Inc",
    "ticker": "QCOM",
    "scores": {
      "environmental": 83,
      "social": 51,
      "governance": 58
    },
    "stockPrice": 98
  },
  {
    "company_name": "Booking Holdings Inc",
    "ticker": "BKNG",
    "scores": {
      "environmental": 63,
      "social": 83,
      "governance": 84
    },
    "stockPrice": 417
  },
  {
    "company_name": "Advanced Micro Devices Inc",
    "ticker": "AMD",
    "scores": {
      "environmental": 59,
      "social": 91,
      "governance": 57
    },
    "stockPrice": 325
  },
  {
    "company_name": "Texas Instruments Inc",
    "ticker": "TXN",
    "scores": {
      "environmental": 53,
      "social": 95,
      "governance": 78
    },
    "stockPrice": 442
  },
  {
    "company_name": "Gilead Sciences Inc",
    "ticker": "GILD",
    "scores": {
      "environmental": 63,
      "social": 73,
      "governance": 87
    },
    "stockPrice": 71
  },
  {
    "company_name": "Comcast Corp",
    "ticker": "CMCSA",
    "scores": {
      "environmental": 64,
      "social": 87,
      "governance": 58
    },
    "stockPrice": 423
  },
  {
    "company_name": "Honeywell International Inc",
    "ticker": "HON",
    "scores": {
      "environmental": 78,
      "social": 91,
      "governance": 69
    },
    "stockPrice": 496
  },
  {
    "company_name": "Vertex Pharmaceuticals Inc",
    "ticker": "VRTX",
    "scores": {
      "environmental": 68,
      "social": 81,
      "governance": 80
    },
    "stockPrice": 171
  },
  {
    "company_name": "Automatic Data Processing Inc",
    "ticker": "ADP",
    "scores": {
      "environmental": 69,
      "social": 65,
      "governance": 73
    },
    "stockPrice": 252
  },
  {
    "company_name": "Applied Materials Inc",
    "ticker": "AMAT",
    "scores": {
      "environmental": 71,
      "social": 97,
      "governance": 68
    },
    "stockPrice": 309
  },
  {
    "company_name": "Palo Alto Networks Inc",
    "ticker": "PANW",
    "scores": {
      "environmental": 70,
      "social": 63,
      "governance": 86
    },
    "stockPrice": 109
  },
  {
    "company_name": "MercadoLibre Inc",
    "ticker": "MELI",
    "scores": {
      "environmental": 77,
      "social": 78,
      "governance": 69
    },
    "stockPrice": 490
  },
  {
    "company_name": "Starbucks Corp",
    "ticker": "SBUX",
    "scores": {
      "environmental": 53,
      "social": 79,
      "governance": 97
    },
    "stockPrice": 363
  },
  {
    "company_name": "Intel Corp",
    "ticker": "INTC",
    "scores": {
      "environmental": 62,
      "social": 66,
      "governance": 68
    },
    "stockPrice": 334
  },
  {
    "company_name": "Mondelez International Inc",
    "ticker": "MDLZ",
    "scores": {
      "environmental": 88,
      "social": 98,
      "governance": 65
    },
    "stockPrice": 95
  },
  {
    "company_name": "Analog Devices Inc",
    "ticker": "ADI",
    "scores": {
      "environmental": 92,
      "social": 57,
      "governance": 57
    },
    "stockPrice": 474
  },
  {
    "company_name": "Cintas Corp",
    "ticker": "CTAS",
    "scores": {
      "environmental": 65,
      "social": 64,
      "governance": 75
    },
    "stockPrice": 144
  },
  {
    "company_name": "KLA Corp",
    "ticker": "KLAC",
    "scores": {
      "environmental": 89,
      "social": 73,
      "governance": 92
    },
    "stockPrice": 468
  },
  {
    "company_name": "Lam Research Corp",
    "ticker": "LRCX",
    "scores": {
      "environmental": 51,
      "social": 93,
      "governance": 61
    },
    "stockPrice": 378
  },
  {
    "company_name": "CrowdStrike Holdings Inc",
    "ticker": "CRWD",
    "scores": {
      "environmental": 70,
      "social": 56,
      "governance": 64
    },
    "stockPrice": 328
  },
  {
    "company_name": "Micron Technology Inc",
    "ticker": "MU",
    "scores": {
      "environmental": 95,
      "social": 59,
      "governance": 83
    },
    "stockPrice": 345
  },
  {
    "company_name": "Microstrategy Inc",
    "ticker": "MSTR",
    "scores": {
      "environmental": 95,
      "social": 63,
      "governance": 95
    },
    "stockPrice": 193
  },
  {
    "company_name": "PDD Holdings Inc",
    "ticker": "PDD",
    "scores": {
      "environmental": 93,
      "social": 90,
      "governance": 65
    },
    "stockPrice": 301
  },
  {
    "company_name": "Applovin Corp",
    "ticker": "APP",
    "scores": {
      "environmental": 96,
      "social": 100,
      "governance": 92
    },
    "stockPrice": 444
  },
  {
    "company_name": "Fortinet Inc",
    "ticker": "FTNT",
    "scores": {
      "environmental": 94,
      "social": 94,
      "governance": 61
    },
    "stockPrice": 495
  },
  {
    "company_name": "DoorDash Inc",
    "ticker": "DASH",
    "scores": {
      "environmental": 67,
      "social": 50,
      "governance": 71
    },
    "stockPrice": 109
  },
  {
    "company_name": "Cadence Design Systems Inc",
    "ticker": "CDNS",
    "scores": {
      "environmental": 82,
      "social": 71,
      "governance": 50
    },
    "stockPrice": 244
  },
  {
    "company_name": "Regeneron Pharmaceuticals Inc",
    "ticker": "REGN",
    "scores": {
      "environmental": 86,
      "social": 66,
      "governance": 81
    },
    "stockPrice": 497
  },
  {
    "company_name": "Synopsys Inc",
    "ticker": "SNPS",
    "scores": {
      "environmental": 82,
      "social": 56,
      "governance": 96
    },
    "stockPrice": 205
  },
  {
    "company_name": "Marriott International Inc",
    "ticker": "MAR",
    "scores": {
      "environmental": 79,
      "social": 99,
      "governance": 54
    },
    "stockPrice": 161
  },
  {
    "company_name": "Roper Technologies Inc",
    "ticker": "ROP",
    "scores": {
      "environmental": 87,
      "social": 100,
      "governance": 50
    },
    "stockPrice": 226
  },
  {
    "company_name": "PayPal Holdings Inc",
    "ticker": "PYPL",
    "scores": {
      "environmental": 82,
      "social": 86,
      "governance": 84
    },
    "stockPrice": 86
  },
  {
    "company_name": "American Electric Power Company Inc",
    "ticker": "AEP",
    "scores": {
      "environmental": 61,
      "social": 82,
      "governance": 81
    },
    "stockPrice": 248
  },
  {
    "company_name": "Monster Beverage Corp",
    "ticker": "MNST",
    "scores": {
      "environmental": 87,
      "social": 80,
      "governance": 69
    },
    "stockPrice": 114
  },
  {
    "company_name": "ASML Holding NV",
    "ticker": "ASML",
    "scores": {
      "environmental": 80,
      "social": 91,
      "governance": 56
    },
    "stockPrice": 236
  },
  {
    "company_name": "Autodesk Inc",
    "ticker": "ADSK",
    "scores": {
      "environmental": 87,
      "social": 98,
      "governance": 58
    },
    "stockPrice": 369
  },
  {
    "company_name": "Copart Inc",
    "ticker": "CPRT",
    "scores": {
      "environmental": 96,
      "social": 80,
      "governance": 93
    },
    "stockPrice": 319
  },
  {
    "company_name": "Paychex Inc",
    "ticker": "PAYX",
    "scores": {
      "environmental": 84,
      "social": 79,
      "governance": 90
    },
    "stockPrice": 159
  },
  {
    "company_name": "CSX Corp",
    "ticker": "CSX",
    "scores": {
      "environmental": 94,
      "social": 88,
      "governance": 93
    },
    "stockPrice": 343
  },
  {
    "company_name": "Charter Communications Inc",
    "ticker": "CHTR",
    "scores": {
      "environmental": 95,
      "social": 69,
      "governance": 60
    },
    "stockPrice": 318
  },
  {
    "company_name": "Paccar Inc",
    "ticker": "PCAR",
    "scores": {
      "environmental": 98,
      "social": 60,
      "governance": 96
    },
    "stockPrice": 292
  },
  {
    "company_name": "Workday Inc",
    "ticker": "WDAY",
    "scores": {
      "environmental": 86,
      "social": 65,
      "governance": 62
    },
    "stockPrice": 65
  },
  {
    "company_name": "Airbnb Inc",
    "ticker": "ABNB",
    "scores": {
      "environmental": 82,
      "social": 67,
      "governance": 58
    },
    "stockPrice": 103
  },
  {
    "company_name": "Keurig Dr Pepper Inc",
    "ticker": "KDP",
    "scores": {
      "environmental": 91,
      "social": 89,
      "governance": 55
    },
    "stockPrice": 222
  },
  {
    "company_name": "Exelon Corp",
    "ticker": "EXC",
    "scores": {
      "environmental": 55,
      "social": 61,
      "governance": 93
    },
    "stockPrice": 432
  },
  {
    "company_name": "Ross Stores Inc",
    "ticker": "ROST",
    "scores": {
      "environmental": 78,
      "social": 87,
      "governance": 72
    },
    "stockPrice": 60
  },
  {
    "company_name": "Marvell Technology Inc",
    "ticker": "MRVL",
    "scores": {
      "environmental": 63,
      "social": 77,
      "governance": 84
    },
    "stockPrice": 345
  },
  {
    "company_name": "Fastenal Co",
    "ticker": "FAST",
    "scores": {
      "environmental": 80,
      "social": 51,
      "governance": 91
    },
    "stockPrice": 146
  },
  {
    "company_name": "NXP Semiconductors NV",
    "ticker": "NXPI",
    "scores": {
      "environmental": 57,
      "social": 57,
      "governance": 93
    },
    "stockPrice": 173
  },
  {
    "company_name": "Verisk Analytics Inc",
    "ticker": "VRSK",
    "scores": {
      "environmental": 75,
      "social": 58,
      "governance": 86
    },
    "stockPrice": 167
  },
  {
    "company_name": "AstraZeneca PLC",
    "ticker": "AZN",
    "scores": {
      "environmental": 95,
      "social": 60,
      "governance": 96
    },
    "stockPrice": 280
  },
  {
    "company_name": "Xcel Energy Inc",
    "ticker": "XEL",
    "scores": {
      "environmental": 55,
      "social": 61,
      "governance": 99
    },
    "stockPrice": 59
  },
  {
    "company_name": "Coca-Cola Europacific Partners PLC",
    "ticker": "CCEP",
    "scores": {
      "environmental": 91,
      "social": 55,
      "governance": 77
    },
    "stockPrice": 366
  },
  {
    "company_name": "Axon Enterprise Inc",
    "ticker": "AXON",
    "scores": {
      "environmental": 93,
      "social": 88,
      "governance": 88
    },
    "stockPrice": 118
  },
  {
    "company_name": "Diamondback Energy Inc",
    "ticker": "FANG",
    "scores": {
      "environmental": 93,
      "social": 80,
      "governance": 72
    },
    "stockPrice": 77
  },
  {
    "company_name": "Kraft Heinz Co",
    "ticker": "KHC",
    "scores": {
      "environmental": 95,
      "social": 51,
      "governance": 68
    },
    "stockPrice": 340
  },
  {
    "company_name": "Electronic Arts Inc",
    "ticker": "EA",
    "scores": {
      "environmental": 67,
      "social": 54,
      "governance": 96
    },
    "stockPrice": 422
  },
  {
    "company_name": "Baker Hughes Co",
    "ticker": "BKR",
    "scores": {
      "environmental": 87,
      "social": 82,
      "governance": 70
    },
    "stockPrice": 428
  },
  {
    "company_name": "Take-Two Interactive Software Inc",
    "ticker": "TTWO",
    "scores": {
      "environmental": 91,
      "social": 69,
      "governance": 70
    },
    "stockPrice": 497
  },
  {
    "company_name": "Cognizant Technology Solutions Corp",
    "ticker": "CTSH",
    "scores": {
      "environmental": 66,
      "social": 78,
      "governance": 80
    },
    "stockPrice": 380
  },
  {
    "company_name": "Old Dominion Freight Line Inc",
    "ticker": "ODFL",
    "scores": {
      "environmental": 59,
      "social": 84,
      "governance": 96
    },
    "stockPrice": 187
  },
  {
    "company_name": "IDEXX Laboratories Inc",
    "ticker": "IDXX",
    "scores": {
      "environmental": 53,
      "social": 51,
      "governance": 88
    },
    "stockPrice": 298
  },
  {
    "company_name": "Atlassian Corporation Ltd",
    "ticker": "TEAM",
    "scores": {
      "environmental": 74,
      "social": 79,
      "governance": 85
    },
    "stockPrice": 433
  },
  {
    "company_name": "Lululemon Athletica Inc",
    "ticker": "LULU",
    "scores": {
      "environmental": 63,
      "social": 89,
      "governance": 97
    },
    "stockPrice": 189
  },
  {
    "company_name": "CoStar Group Inc",
    "ticker": "CSGP",
    "scores": {
      "environmental": 50,
      "social": 66,
      "governance": 90
    },
    "stockPrice": 322
  },
  {
    "company_name": "Datadog Inc",
    "ticker": "DDOG",
    "scores": {
      "environmental": 71,
      "social": 85,
      "governance": 72
    },
    "stockPrice": 168
  },
  {
    "company_name": "Zscaler Inc",
    "ticker": "ZS",
    "scores": {
      "environmental": 79,
      "social": 64,
      "governance": 71
    },
    "stockPrice": 359
  },
  {
    "company_name": "ANSYS Inc",
    "ticker": "ANSS",
    "scores": {
      "environmental": 91,
      "social": 78,
      "governance": 61
    },
    "stockPrice": 109
  },
  {
    "company_name": "Dexcom Inc",
    "ticker": "DXCM",
    "scores": {
      "environmental": 100,
      "social": 66,
      "governance": 62
    },
    "stockPrice": 392
  },
  {
    "company_name": "Trade Desk Inc",
    "ticker": "TTD",
    "scores": {
      "environmental": 61,
      "social": 83,
      "governance": 60
    },
    "stockPrice": 229
  },
  {
    "company_name": "Warner Bros Discovery Inc",
    "ticker": "WBD",
    "scores": {
      "environmental": 97,
      "social": 57,
      "governance": 55
    },
    "stockPrice": 457
  },
  {
    "company_name": "Microchip Technology Inc",
    "ticker": "MCHP",
    "scores": {
      "environmental": 94,
      "social": 50,
      "governance": 67
    },
    "stockPrice": 171
  },
  {
    "company_name": "CDW Corp",
    "ticker": "CDW",
    "scores": {
      "environmental": 58,
      "social": 92,
      "governance": 67
    },
    "stockPrice": 161
  },
  {
    "company_name": "Biogen Inc",
    "ticker": "BIIB",
    "scores": {
      "environmental": 57,
      "social": 99,
      "governance": 95
    },
    "stockPrice": 210
  },
  {
    "company_name": "ON Semiconductor Corp",
    "ticker": "ON",
    "scores": {
      "environmental": 52,
      "social": 76,
      "governance": 83
    },
    "stockPrice": 116
  },
  {
    "company_name": "MongoDB Inc",
    "ticker": "MDB",
    "scores": {
      "environmental": 99,
      "social": 74,
      "governance": 67
    },
    "stockPrice": 213
  }
];

export default comp_constants;