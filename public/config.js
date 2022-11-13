const config = (() => {
  return {
    "VUE_APP_API_URL": "https://api.royal88lounge.com",
      "IntercomAppId": "",
      "ExternalLoginsEnabled": false,
      "SportsEnabled": false,
      "ChatEnabled": false,
      "SupportEnabled": false,
      "BetsTableEnabled": false,
      "CurrencySelectOnRegister": false,
      "ShowCryptoMessageOnRegister": false,
      "FiatProcessor": "",
      "ThemePath": '/themes/ydhe73/',
      "TwitterLoginUrl": "https://api.royal88lounge.com/externallogin/signin?provider=Twitter&returnUrl=",
      "DomainName": "royal88lounge.com",
      "SiteName": "Royal88Lounge",
      "SiteUrl": "https://royal88lounge.com",
      "BusinessName": "R.Bostock Enterprises B.V.",
      "TelegramLink": "https://t.me/",
      "TwitterLink": "https://twitter.com/",
      "InstagramLink": "",
      "DiscordLink": "https://discord.gg/",
      "FacebookLink": "",
      "TikTokLink": "",
      "TwitterName": "Royal88Lounge",
      "SupportEmail": "support@royal88lounge.com",
      "GATAG": "",
      "ShowCryptoPrices": false,
      "Theme": {
        "MainColor": "#d8a83b",
        "MainColorGradiant": "#d8a83b",
        "MainBgColor": "#0a212b",
        "SecondBgColor": "#0a2836"
      },
      "HomePageSlides": [
          {
        "img": "/themes/ydhe73/cashbackbanner.jpg",
        "mobImg": "/themes/ydhe73/cashbackbanner.jpg",
        "url": "welcome-bonus"
      },
      {
        "img": "/themes/ydhe73/vipbanner.jpg",
        "mobImg": "/themes/ydhe73/vipbanner.jpg",
        "url": "vip"
      },
       {
        "img": "/themes/ydhe73/live_support_banner.jpg",
        "mobImg": "/themes/ydhe73/live_support_banner.jpg",
        "url": "transfer"
      },
      {
        "img": "/themes/ydhe73/dealer_banner.jpg",
        "mobImg": "/themes/ydhe73/dealer_banner.jpg",
        "url": "discord"
      },
      ],
      "SideMenu": {
        "Sections": [
          {
            "Links": [
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/lobby_icon.png",
                "Text": "All Games",
                "Title": "All Games",
                "RouteTo": "Home",
                "RouteParams": {},
                "Url": ""
              },
              {
              "IsHeader": false,
              "IsSubMenu": false,
              "IsRoute": true,
              "HasIcon": true,
              "IconUrl": "/themes/ydhe73/favourite_icon.png",
              "Text": "Favourite Games",
              "Title": "Favourite Games",
              "RouteTo": "Games",
              "RouteParams": {category: 'new'},
              "Url": ""
            },
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/slots_icon.png",
                "Text": "Slots",
                "Title": "Slots",
                "RouteTo": "Games",
                "RouteParams": {category: 'slots'},
                "Url": ""
              },
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/live_icon.png",
                "Text": "Live Casino",
                "Title": "Live Casino",
                "RouteTo": "Games",
                "RouteParams": {category: 'live'},
                "Url": ""
              },
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/table_icon.png",
                "Text": "Table",
                "Title": "Table",
                "RouteTo": "Games",
                "RouteParams": {category: 'table'},
                "Url": ""
              },
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/feature_buy_icon.png",
                "Text": "Feature Buy-in",
                "Title": "Feature Buy-in",
                "RouteTo": "Games",
                "RouteParams": {category: 'feature-buy-in'},
                "Url": ""
              },
              {
                "IsHeader": false,
                "IsSubMenu": false,
                "IsRoute": true,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/game_shows_icon.png",
                "Text": "Game Shows",
                "Title": "Game Shows",
                "RouteTo": "Games",
                "RouteParams": {category: 'live'},
                "Url": ""
              },
              {
              "IsHeader": false,
              "IsSubMenu": false,
              "IsRoute": true,
              "HasIcon": true,
              "IconUrl": "/themes/ydhe73/blackjack_icon.png",
              "Text": "Blackjack",
              "Title": "Blackjack",
              "RouteTo": "Games",
              "RouteParams": {category: 'blackjack'},
              "Url": ""
            },
            {
              "IsHeader": false,
              "IsSubMenu": false,
              "IsRoute": true,
              "HasIcon": true,
              "IconUrl": "/themes/ydhe73/baccarat_icon.png",
              "Text": "Baccarat",
              "Title": "Baccarat",
              "RouteTo": "Games",
              "RouteParams": {category: 'baccarat'},
              "Url": ""
            },
            {
              "IsHeader": false,
              "IsSubMenu": false,
              "IsRoute": true,
              "HasIcon": true,
              "IconUrl": "/themes/ydhe73/table_icon.png",
              "Text": "Roulette",
              "Title": "Roulette",
              "RouteTo": "Games",
              "RouteParams": {category: 'roulette'},
              "Url": ""
            },
          //   {
          //   "IsHeader": false,
          //   "IsSubMenu": false,
          //   "IsRoute": true,
          //   "HasIcon": true,
          //   "IconUrl": "/themes/ydhe73/VIP_icon.png",
          //   "Text": "VIP Club",
          //   "Title": "VIP Club",
          //   "RouteTo": "VIP",
          //   "Url": ""
          // },
            ]
          },
          {
            "Links": [
              {
                "IsHeader": true,
                "IsSubMenu": false,
                "IsRoute": false,
                "HasIcon": true,
                "IconUrl": "/themes/ydhe73/promotions_icon.png",
                "Text": "Promotions",
                "Title": "",
                "RouteTo": "",
                "RouteParams": {},
                "Url": ""
              },
              // {
              //   "IsHeader": false,
              //   "IsSubMenu": true,
              //   "IsRoute": true,
              //   "HasIcon": false,
              //   "IconUrl": "",
              //   "Text": "Welcome Bonus",
              //   "Title": "Welcome Bonus",
              //   "RouteTo": "WelcomeOffer",
              //   "RouteParams": {},
              //   "Url": ""
              // },
              // {
              //   "IsHeader": false,
              //   "IsSubMenu": true,
              //   "IsRoute": true,
              //   "HasIcon": false,
              //   "IconUrl": "",
              //   "Text": "Monday Reloads",
              //   "Title": "Monday Reloads",
              //   "RouteTo": "Reload",
              //   "RouteParams": {},
              //   "Url": ""
              // },
              // {
              //   "IsHeader": false,
              //   "IsSubMenu": true,
              //   "IsRoute": true,
              //   "HasIcon": false,
              //   "IconUrl": "",
              //   "Text": "Wednesday Free Spins",
              //   "Title": "Wednesday Free Spins",
              //   "RouteTo": "FreeSpins",
              //   "RouteParams": {},
              //   "Url": ""
              // },
              {
                "IsHeader": false,
                "IsSubMenu": true,
                "IsRoute": true,
                "HasIcon": false,
                "IconUrl": "",
                "Text": "$1,000,000 Pragmatic...",
                "Title": "",
                "RouteTo": "PragmaticDrops",
                "RouteParams": {},
                "Url": ""
              },
            ]
          },
        ]
      }
    };
  })();
