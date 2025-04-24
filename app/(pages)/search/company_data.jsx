const comp_constants = [
  {
    "name": "Apple Inc.",
    "ticker": "AAPL",
    "scores": {
      "environmental": 29,
      "social": 84,
      "governance": 100
    },
    "stockPrice": 322
  },
  {
    "name": "Microsoft Corp",
    "ticker": "MSFT",
    "scores": {
      "environmental": 87,
      "social": 96,
      "governance": 82
    },
    "stockPrice": 288
  },
  {
    "name": "NVIDIA Corp",
    "ticker": "NVDA",
    "scores": {
      "environmental": 98,
      "social": 62,
      "governance": 62
    },
    "stockPrice": 412
  },
  {
    "name": "Amazon.com Inc",
    "ticker": "AMZN",
    "scores": {
      "environmental": 82,
      "social": 88,
      "governance": 55
    },
    "stockPrice": 56
  },
  {
    "name": "Broadcom Inc",
    "ticker": "AVGO",
    "scores": {
      "environmental": 77,
      "social": 61,
      "governance": 70
    },
    "stockPrice": 473
  },
  {
    "name": "Meta Platforms Inc",
    "ticker": "META",
    "scores": {
      "environmental": 68,
      "social": 83,
      "governance": 75
    },
    "stockPrice": 202
  },
  {
    "name": "Costco Wholesale Corp",
    "ticker": "COST",
    "scores": {
      "environmental": 92,
      "social": 56,
      "governance": 79
    },
    "stockPrice": 467
  },
  {
    "name": "Netflix Inc",
    "ticker": "NFLX",
    "scores": {
      "environmental": 62,
      "social": 83,
      "governance": 57
    },
    "stockPrice": 54
  },
  {
    "name": "Tesla Inc",
    "ticker": "TSLA",
    "scores": {
      "environmental": 52,
      "social": 77,
      "governance": 74
    },
    "stockPrice": 120
  },
  {
    "name": "Alphabet Inc",
    "ticker": "GOOGL",
    "scores": {
      "environmental": 77,
      "social": 91,
      "governance": 51
    },
    "stockPrice": 440
  },
  {
    "name": "T-Mobile US Inc",
    "ticker": "TMUS",
    "scores": {
      "environmental": 77,
      "social": 77,
      "governance": 75
    },
    "stockPrice": 375
  },
  {
    "name": "Cisco Systems Inc",
    "ticker": "CSCO",
    "scores": {
      "environmental": 88,
      "social": 65,
      "governance": 64
    },
    "stockPrice": 488
  },
  {
    "name": "PepsiCo Inc",
    "ticker": "PEP",
    "scores": {
      "environmental": 92,
      "social": 67,
      "governance": 68
    },
    "stockPrice": 461
  },
  {
    "name": "Palantir Technologies Inc",
    "ticker": "PLTR",
    "scores": {
      "environmental": 95,
      "social": 57,
      "governance": 99
    },
    "stockPrice": 471
  },
  {
    "name": "Intuitive Surgical Inc",
    "ticker": "ISRG",
    "scores": {
      "environmental": 75,
      "social": 91,
      "governance": 60
    },
    "stockPrice": 289
  },
  {
    "name": "Amgen Inc",
    "ticker": "AMGN",
    "scores": {
      "environmental": 75,
      "social": 74,
      "governance": 97
    },
    "stockPrice": 70
  },
  {
    "name": "Intuit Inc",
    "ticker": "INTU",
    "scores": {
      "environmental": 89,
      "social": 93,
      "governance": 60
    },
    "stockPrice": 477
  },
  {
    "name": "Adobe Inc",
    "ticker": "ADBE",
    "scores": {
      "environmental": 75,
      "social": 67,
      "governance": 66
    },
    "stockPrice": 435
  },
  {
    "name": "Qualcomm Inc",
    "ticker": "QCOM",
    "scores": {
      "environmental": 83,
      "social": 51,
      "governance": 58
    },
    "stockPrice": 98
  },
  {
    "name": "Booking Holdings Inc",
    "ticker": "BKNG",
    "scores": {
      "environmental": 63,
      "social": 83,
      "governance": 84
    },
    "stockPrice": 417
  },
  {
    "name": "Advanced Micro Devices Inc",
    "ticker": "AMD",
    "scores": {
      "environmental": 59,
      "social": 91,
      "governance": 57
    },
    "stockPrice": 325
  },
  {
    "name": "Texas Instruments Inc",
    "ticker": "TXN",
    "scores": {
      "environmental": 53,
      "social": 95,
      "governance": 78
    },
    "stockPrice": 442
  },
  {
    "name": "Gilead Sciences Inc",
    "ticker": "GILD",
    "scores": {
      "environmental": 63,
      "social": 73,
      "governance": 87
    },
    "stockPrice": 71
  },
  {
    "name": "Comcast Corp",
    "ticker": "CMCSA",
    "scores": {
      "environmental": 64,
      "social": 87,
      "governance": 58
    },
    "stockPrice": 423
  },
  {
    "name": "Honeywell International Inc",
    "ticker": "HON",
    "scores": {
      "environmental": 78,
      "social": 91,
      "governance": 69
    },
    "stockPrice": 496
  },
  {
    "name": "Vertex Pharmaceuticals Inc",
    "ticker": "VRTX",
    "scores": {
      "environmental": 68,
      "social": 81,
      "governance": 80
    },
    "stockPrice": 171
  },
  {
    "name": "Automatic Data Processing Inc",
    "ticker": "ADP",
    "scores": {
      "environmental": 69,
      "social": 65,
      "governance": 73
    },
    "stockPrice": 252
  },
  {
    "name": "Applied Materials Inc",
    "ticker": "AMAT",
    "scores": {
      "environmental": 71,
      "social": 97,
      "governance": 68
    },
    "stockPrice": 309
  },
  {
    "name": "Palo Alto Networks Inc",
    "ticker": "PANW",
    "scores": {
      "environmental": 70,
      "social": 63,
      "governance": 86
    },
    "stockPrice": 109
  },
  {
    "name": "MercadoLibre Inc",
    "ticker": "MELI",
    "scores": {
      "environmental": 77,
      "social": 78,
      "governance": 69
    },
    "stockPrice": 490
  },
  {
    "name": "Starbucks Corp",
    "ticker": "SBUX",
    "scores": {
      "environmental": 53,
      "social": 79,
      "governance": 97
    },
    "stockPrice": 363
  },
  {
    "name": "Intel Corp",
    "ticker": "INTC",
    "scores": {
      "environmental": 62,
      "social": 66,
      "governance": 68
    },
    "stockPrice": 334
  },
  {
    "name": "Mondelez International Inc",
    "ticker": "MDLZ",
    "scores": {
      "environmental": 88,
      "social": 98,
      "governance": 65
    },
    "stockPrice": 95
  },
  {
    "name": "Analog Devices Inc",
    "ticker": "ADI",
    "scores": {
      "environmental": 92,
      "social": 57,
      "governance": 57
    },
    "stockPrice": 474
  },
  {
    "name": "Cintas Corp",
    "ticker": "CTAS",
    "scores": {
      "environmental": 65,
      "social": 64,
      "governance": 75
    },
    "stockPrice": 144
  },
  {
    "name": "KLA Corp",
    "ticker": "KLAC",
    "scores": {
      "environmental": 89,
      "social": 73,
      "governance": 92
    },
    "stockPrice": 468
  },
  {
    "name": "Lam Research Corp",
    "ticker": "LRCX",
    "scores": {
      "environmental": 51,
      "social": 93,
      "governance": 61
    },
    "stockPrice": 378
  },
  {
    "name": "CrowdStrike Holdings Inc",
    "ticker": "CRWD",
    "scores": {
      "environmental": 70,
      "social": 56,
      "governance": 64
    },
    "stockPrice": 328
  },
  {
    "name": "Micron Technology Inc",
    "ticker": "MU",
    "scores": {
      "environmental": 95,
      "social": 59,
      "governance": 83
    },
    "stockPrice": 345
  },
  {
    "name": "Microstrategy Inc",
    "ticker": "MSTR",
    "scores": {
      "environmental": 95,
      "social": 63,
      "governance": 95
    },
    "stockPrice": 193
  },
  {
    "name": "PDD Holdings Inc",
    "ticker": "PDD",
    "scores": {
      "environmental": 93,
      "social": 90,
      "governance": 65
    },
    "stockPrice": 301
  },
  {
    "name": "Applovin Corp",
    "ticker": "APP",
    "scores": {
      "environmental": 96,
      "social": 100,
      "governance": 92
    },
    "stockPrice": 444
  },
  {
    "name": "Fortinet Inc",
    "ticker": "FTNT",
    "scores": {
      "environmental": 94,
      "social": 94,
      "governance": 61
    },
    "stockPrice": 495
  },
  {
    "name": "DoorDash Inc",
    "ticker": "DASH",
    "scores": {
      "environmental": 67,
      "social": 50,
      "governance": 71
    },
    "stockPrice": 109
  },
  {
    "name": "Cadence Design Systems Inc",
    "ticker": "CDNS",
    "scores": {
      "environmental": 82,
      "social": 71,
      "governance": 50
    },
    "stockPrice": 244
  },
  {
    "name": "Regeneron Pharmaceuticals Inc",
    "ticker": "REGN",
    "scores": {
      "environmental": 86,
      "social": 66,
      "governance": 81
    },
    "stockPrice": 497
  },
  {
    "name": "Synopsys Inc",
    "ticker": "SNPS",
    "scores": {
      "environmental": 82,
      "social": 56,
      "governance": 96
    },
    "stockPrice": 205
  },
  {
    "name": "Marriott International Inc",
    "ticker": "MAR",
    "scores": {
      "environmental": 79,
      "social": 99,
      "governance": 54
    },
    "stockPrice": 161
  },
  {
    "name": "Roper Technologies Inc",
    "ticker": "ROP",
    "scores": {
      "environmental": 87,
      "social": 100,
      "governance": 50
    },
    "stockPrice": 226
  },
  {
    "name": "PayPal Holdings Inc",
    "ticker": "PYPL",
    "scores": {
      "environmental": 82,
      "social": 86,
      "governance": 84
    },
    "stockPrice": 86
  },
  {
    "name": "American Electric Power Company Inc",
    "ticker": "AEP",
    "scores": {
      "environmental": 61,
      "social": 82,
      "governance": 81
    },
    "stockPrice": 248
  },
  {
    "name": "Monster Beverage Corp",
    "ticker": "MNST",
    "scores": {
      "environmental": 87,
      "social": 80,
      "governance": 69
    },
    "stockPrice": 114
  },
  {
    "name": "ASML Holding NV",
    "ticker": "ASML",
    "scores": {
      "environmental": 80,
      "social": 91,
      "governance": 56
    },
    "stockPrice": 236
  },
  {
    "name": "Autodesk Inc",
    "ticker": "ADSK",
    "scores": {
      "environmental": 87,
      "social": 98,
      "governance": 58
    },
    "stockPrice": 369
  },
  {
    "name": "Copart Inc",
    "ticker": "CPRT",
    "scores": {
      "environmental": 96,
      "social": 80,
      "governance": 93
    },
    "stockPrice": 319
  },
  {
    "name": "Paychex Inc",
    "ticker": "PAYX",
    "scores": {
      "environmental": 84,
      "social": 79,
      "governance": 90
    },
    "stockPrice": 159
  },
  {
    "name": "CSX Corp",
    "ticker": "CSX",
    "scores": {
      "environmental": 94,
      "social": 88,
      "governance": 93
    },
    "stockPrice": 343
  },
  {
    "name": "Charter Communications Inc",
    "ticker": "CHTR",
    "scores": {
      "environmental": 95,
      "social": 69,
      "governance": 60
    },
    "stockPrice": 318
  },
  {
    "name": "Paccar Inc",
    "ticker": "PCAR",
    "scores": {
      "environmental": 98,
      "social": 60,
      "governance": 96
    },
    "stockPrice": 292
  },
  {
    "name": "Workday Inc",
    "ticker": "WDAY",
    "scores": {
      "environmental": 86,
      "social": 65,
      "governance": 62
    },
    "stockPrice": 65
  },
  {
    "name": "Airbnb Inc",
    "ticker": "ABNB",
    "scores": {
      "environmental": 82,
      "social": 67,
      "governance": 58
    },
    "stockPrice": 103
  },
  {
    "name": "Keurig Dr Pepper Inc",
    "ticker": "KDP",
    "scores": {
      "environmental": 91,
      "social": 89,
      "governance": 55
    },
    "stockPrice": 222
  },
  {
    "name": "Exelon Corp",
    "ticker": "EXC",
    "scores": {
      "environmental": 55,
      "social": 61,
      "governance": 93
    },
    "stockPrice": 432
  },
  {
    "name": "Ross Stores Inc",
    "ticker": "ROST",
    "scores": {
      "environmental": 78,
      "social": 87,
      "governance": 72
    },
    "stockPrice": 60
  },
  {
    "name": "Marvell Technology Inc",
    "ticker": "MRVL",
    "scores": {
      "environmental": 63,
      "social": 77,
      "governance": 84
    },
    "stockPrice": 345
  },
  {
    "name": "Fastenal Co",
    "ticker": "FAST",
    "scores": {
      "environmental": 80,
      "social": 51,
      "governance": 91
    },
    "stockPrice": 146
  },
  {
    "name": "NXP Semiconductors NV",
    "ticker": "NXPI",
    "scores": {
      "environmental": 57,
      "social": 57,
      "governance": 93
    },
    "stockPrice": 173
  },
  {
    "name": "Verisk Analytics Inc",
    "ticker": "VRSK",
    "scores": {
      "environmental": 75,
      "social": 58,
      "governance": 86
    },
    "stockPrice": 167
  },
  {
    "name": "AstraZeneca PLC",
    "ticker": "AZN",
    "scores": {
      "environmental": 95,
      "social": 60,
      "governance": 96
    },
    "stockPrice": 280
  },
  {
    "name": "Xcel Energy Inc",
    "ticker": "XEL",
    "scores": {
      "environmental": 55,
      "social": 61,
      "governance": 99
    },
    "stockPrice": 59
  },
  {
    "name": "Coca-Cola Europacific Partners PLC",
    "ticker": "CCEP",
    "scores": {
      "environmental": 91,
      "social": 55,
      "governance": 77
    },
    "stockPrice": 366
  },
  {
    "name": "Axon Enterprise Inc",
    "ticker": "AXON",
    "scores": {
      "environmental": 93,
      "social": 88,
      "governance": 88
    },
    "stockPrice": 118
  },
  {
    "name": "Diamondback Energy Inc",
    "ticker": "FANG",
    "scores": {
      "environmental": 93,
      "social": 80,
      "governance": 72
    },
    "stockPrice": 77
  },
  {
    "name": "Kraft Heinz Co",
    "ticker": "KHC",
    "scores": {
      "environmental": 95,
      "social": 51,
      "governance": 68
    },
    "stockPrice": 340
  },
  {
    "name": "Electronic Arts Inc",
    "ticker": "EA",
    "scores": {
      "environmental": 67,
      "social": 54,
      "governance": 96
    },
    "stockPrice": 422
  },
  {
    "name": "Baker Hughes Co",
    "ticker": "BKR",
    "scores": {
      "environmental": 87,
      "social": 82,
      "governance": 70
    },
    "stockPrice": 428
  },
  {
    "name": "Take-Two Interactive Software Inc",
    "ticker": "TTWO",
    "scores": {
      "environmental": 91,
      "social": 69,
      "governance": 70
    },
    "stockPrice": 497
  },
  {
    "name": "Cognizant Technology Solutions Corp",
    "ticker": "CTSH",
    "scores": {
      "environmental": 66,
      "social": 78,
      "governance": 80
    },
    "stockPrice": 380
  },
  {
    "name": "Old Dominion Freight Line Inc",
    "ticker": "ODFL",
    "scores": {
      "environmental": 59,
      "social": 84,
      "governance": 96
    },
    "stockPrice": 187
  },
  {
    "name": "IDEXX Laboratories Inc",
    "ticker": "IDXX",
    "scores": {
      "environmental": 53,
      "social": 51,
      "governance": 88
    },
    "stockPrice": 298
  },
  {
    "name": "Atlassian Corporation Ltd",
    "ticker": "TEAM",
    "scores": {
      "environmental": 74,
      "social": 79,
      "governance": 85
    },
    "stockPrice": 433
  },
  {
    "name": "Lululemon Athletica Inc",
    "ticker": "LULU",
    "scores": {
      "environmental": 63,
      "social": 89,
      "governance": 97
    },
    "stockPrice": 189
  },
  {
    "name": "CoStar Group Inc",
    "ticker": "CSGP",
    "scores": {
      "environmental": 50,
      "social": 66,
      "governance": 90
    },
    "stockPrice": 322
  },
  {
    "name": "Datadog Inc",
    "ticker": "DDOG",
    "scores": {
      "environmental": 71,
      "social": 85,
      "governance": 72
    },
    "stockPrice": 168
  },
  {
    "name": "Zscaler Inc",
    "ticker": "ZS",
    "scores": {
      "environmental": 79,
      "social": 64,
      "governance": 71
    },
    "stockPrice": 359
  },
  {
    "name": "ANSYS Inc",
    "ticker": "ANSS",
    "scores": {
      "environmental": 91,
      "social": 78,
      "governance": 61
    },
    "stockPrice": 109
  },
  {
    "name": "Dexcom Inc",
    "ticker": "DXCM",
    "scores": {
      "environmental": 100,
      "social": 66,
      "governance": 62
    },
    "stockPrice": 392
  },
  {
    "name": "Trade Desk Inc",
    "ticker": "TTD",
    "scores": {
      "environmental": 61,
      "social": 83,
      "governance": 60
    },
    "stockPrice": 229
  },
  {
    "name": "Warner Bros Discovery Inc",
    "ticker": "WBD",
    "scores": {
      "environmental": 97,
      "social": 57,
      "governance": 55
    },
    "stockPrice": 457
  },
  {
    "name": "Microchip Technology Inc",
    "ticker": "MCHP",
    "scores": {
      "environmental": 94,
      "social": 50,
      "governance": 67
    },
    "stockPrice": 171
  },
  {
    "name": "CDW Corp",
    "ticker": "CDW",
    "scores": {
      "environmental": 58,
      "social": 92,
      "governance": 67
    },
    "stockPrice": 161
  },
  {
    "name": "Biogen Inc",
    "ticker": "BIIB",
    "scores": {
      "environmental": 57,
      "social": 99,
      "governance": 95
    },
    "stockPrice": 210
  },
  {
    "name": "ON Semiconductor Corp",
    "ticker": "ON",
    "scores": {
      "environmental": 52,
      "social": 76,
      "governance": 83
    },
    "stockPrice": 116
  },
  {
    "name": "MongoDB Inc",
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