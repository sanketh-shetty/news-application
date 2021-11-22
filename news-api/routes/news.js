var express = require("express");
var router = express.Router();
const { default: axios } = require("axios");
var apiUtils = require("../utils/apiUtils.js");
const { ErrorHandler } = require("../app/error");

router.get("/", function (req, res) {
  res.send("News Home Page");
});

/*********************************************
 * Path: /list_news?
 * Query Params: keyWord, country, pageSize, page
 * Body Params: None
 *********************************************/
router.get("/list_news", function (req, res) {
  const { keyWord, country, pageSize, page } = req.query;
  let url = apiUtils.getNewsListUrl(keyWord, country, pageSize||20, page||1); //`${endpoint}${params}`;
  console.log("url", url);

  if (!keyWord && !country) {
    throw new ErrorHandler(
      404,
      "missing fields : Provide either keyWord or country"
    );
  }

  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err.code);
      res.json(err);
    });

  /* setTimeout(() => {
    res.json(json);
  }, 2000); */
});

module.exports = router;

var json = {
  totalResults: 20,
  articles: [
    {
      source: {
        id: null,
        name: "Sky Sports",
      },
      author: "Sky Sports",
      title:
        "Qatar GP: Valtteri Bottas and Lewis Hamilton ahead for Mercedes with edge over Red Bull in Practice Three - Sky Sports",
      description:
        "Valtteri Bottas pipped Lewis Hamilton to the fastest time of Practice Three at the Qatar GP with Mercedes appearing to have the edge over Red Bull.",
      url: "https://www.skysports.com/f1/news/12433/12473276/qatar-gp-valtteri-bottas-and-lewis-hamilton-ahead-for-mercedes-with-edge-over-red-bull-in-practice-three",
      urlToImage:
        "https://e0.365dm.com/21/11/1600x900/skysports-valtteri-bottas-mercedes_5589090.jpg",
      publishedAt: "2021-11-20T12:12:53Z",
      content:
        "Please use Chrome browser for a more accessible video player\r\nRed Bull have plenty of work to do on their rear wing ahead of qualifying in Qatar. \r\nRed Bull have plenty of work to do on their rear wi… [+3413 chars]",
    },
    {
      source: {
        id: null,
        name: "Nottinghamshire Live",
      },
      author: "Jamie Barlow, Joseph Locker, Ellie Danemann",
      title:
        "Live updates as Nottingham's Victoria Centre evacuated - Nottinghamshire Live",
      description: "A fire cordon has been put up",
      url: "https://www.nottinghampost.com/news/local-news/live-updates-nottinghams-victoria-centre-6236537",
      urlToImage:
        "https://i2-prod.nottinghampost.com/incoming/article6236551.ece/ALTERNATES/s1200/2_fire-1.jpg",
      publishedAt: "2021-11-20T12:04:38Z",
      content:
        "Nottingham's Victoria Centre has been taped off - and shoppers have been evactuated.\r\nAccording to eyewitnesses at the scene everyone inside the shopping centre was evacuated shortly before 12pm on S… [+805 chars]",
    },
    {
      source: {
        id: null,
        name: "ITV News",
      },
      author: "ITV News",
      title:
        "Lockdowns and bans on unvaccinated: How Europe is coping with Covid surge - ITV News",
      description:
        "As Austria prepares to enter another national lockdown, we take a look at how other European countries are coping with the spread of the virus.",
      url: "https://www.itv.com/news/2021-11-19/lockdowns-and-public-transport-bans-across-europe-as-covid-cases-rise-again",
      urlToImage:
        "https://images.ctfassets.net/pjshm78m9jt4/6PuBmregeUrCIluyHBRhBB/25dc3c7e878de34c9aa8d0f17112cc93/AP_21324011346717.jpg",
      publishedAt: "2021-11-20T12:01:21Z",
      content:
        "As Austria prepares to go into a full nationwide lockdown and makes vaccinations mandatory to tackle surging Covid cases, how are other countries across Europe coping with the virus?\r\nSeveral Europea… [+9065 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Covid: WHO says it is very worried about Europe surge - BBC News",
      description:
        "The health organisation's regional director warns of half a million more deaths by March without action.",
      url: "https://www.bbc.co.uk/news/world-europe-59358074",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/84AB/production/_121736933_0d44d890-ac7f-47cb-8765-013c845da27a.jpg",
      publishedAt: "2021-11-20T11:50:58Z",
      content:
        'Image caption, Dr Kluge said introducing measures like mask wearing could immediately help\r\nThe World Health Organization (WHO) is "very worried" about the spread of Covid-19 within Europe as the con… [+2546 chars]',
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Matchday Live: Leicester v Chelsea | Pre-Match | Premier League Matchday - Chelsea Football Club",
      description:
        "Download Chelsea FC's official mobile app:-App Store https://apple.co/2vvlN9t-Play Store http://bit.ly/2MfNJHX Subscribe: http://che.lc/YTsubscribeTo watch m...",
      url: "https://www.youtube.com/watch?v=kLolVSPp0h0",
      urlToImage: "https://i.ytimg.com/vi/kLolVSPp0h0/maxresdefault_live.jpg",
      publishedAt: "2021-11-20T11:25:07Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Metro.co.uk",
      },
      author: "Sean Seddon",
      title:
        "France: Fire rips through buildings in central Paris near Opera house - Metro",
      description:
        "A huge blaze took hold on one of the city's 'grand boulevards' near its world-famous opera house.",
      url: "https://metro.co.uk/2021/11/20/france-fire-rips-through-buildings-in-central-paris-near-opera-house-15636202/",
      urlToImage:
        "https://metro.co.uk/wp-content/uploads/2021/11/PRC_211135000_1637409393.jpg?quality=90&strip=all&w=1200&h=630&crop=1",
      publishedAt: "2021-11-20T10:55:00Z",
      content:
        "To view this video please enable JavaScript, and consider upgrading to a web\r\nbrowser that\r\nsupports HTML5\r\nvideo\r\nA large fire has devastated a historic row in the heart of Paris.\r\nVideos of the bla… [+1702 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Liam James",
      title:
        "Boris Johnson news – live: PM orders migrant crisis review, as former chancellor predicts rail plan U-turn - The Independent",
      description:
        "PM said to be ‘exasperated’ by lack of policy on channel crossings",
      url: "https://www.independent.co.uk/news/uk/politics/hs2-boris-johnson-news-latest-b1961287.html",
      urlToImage:
        "https://static.independent.co.uk/2021/11/19/17/PRI210887512%20copy.jpg?width=1200&auto=webp&quality=75",
      publishedAt: "2021-11-20T10:27:34Z",
      content:
        "Migrants know theyre not going to be removed'\r\nKevin Saunders, former chief immigration officer for the UK Border Force [see last post], said migrants crossing the channel know theyre not going to be… [+621 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Celine Wadhera",
      title:
        "Covid news - live: Two shot at Rotterdam lockdown riots as infections soar to record high in Czech Republic - The Independent",
      description: "Follow for live updates",
      url: "https://www.independent.co.uk/news/health/covid-uk-news-rotterdam-riots-vaccine-b1961292.html",
      urlToImage:
        "https://static.independent.co.uk/2021/11/20/07/urnpublicidap.org63bc4f644c254bab998a53cfbbb414dc.jpg?width=1200&auto=webp&quality=75",
      publishedAt: "2021-11-20T10:25:06Z",
      content:
        "Two people were shot and several more were injured at an anti-lockdown protest in Rotterdam on Friday.\r\nThe violent unrest was linked to the Dutch governments plan to introduce a law that would preve… [+7814 chars]",
    },
    {
      source: {
        id: null,
        name: "Liverpool Echo",
      },
      author: "Jake Bayliss",
      title:
        "Full Liverpool squad available for Arsenal clash as Jurgen Klopp faces midfield decision - Liverpool Echo",
      description:
        "Liverpool boss Jurgen Klopp has had to contend with several injury concerns to key players during the international break",
      url: "https://www.liverpoolecho.co.uk/sport/football/football-news/liverpool-squad-arsenal-jurgen-klopp-22224123",
      urlToImage:
        "https://i2-prod.liverpoolecho.co.uk/incoming/article22224125.ece/ALTERNATES/s1200/0_GettyImages-1354050588.jpg",
      publishedAt: "2021-11-20T10:02:27Z",
      content:
        "Liverpool have an opportunity to get their title challenge back on track against Arsenal on Saturday.\r\n Having drawn with Brighton and lost to West Ham in their two most recent games, prior to the in… [+2482 chars]",
    },
    {
      source: {
        id: null,
        name: "Cheshire Live",
      },
      author: "Matthew Dresch, Alex McIntyre",
      title:
        "Cheshire woman who refused jab 'dies eight times' after getting covid - Cheshire Live",
      description:
        "Gemma Roberts now says she regrets refusing to get the vaccination",
      url: "https://www.cheshire-live.co.uk/news/chester-cheshire-news/cheshire-woman-who-refused-jab-22224251",
      urlToImage:
        "https://i2-prod.cheshire-live.co.uk/incoming/article22224280.ece/ALTERNATES/s1200/0_image.jpg",
      publishedAt: "2021-11-20T09:45:26Z",
      content:
        "A woman from Cheshire died eight times while she was in hospital with Covid after refusing to be vaccinated.\r\n Gemma Roberts, from Warrington, suffered eight cardiac arrests and at one point was dead… [+3990 chars]",
    },
    {
      source: {
        id: null,
        name: "Liverpool Echo",
      },
      author: "Aaliyah Rugg",
      title:
        "Update on taxi driver in Liverpool bomb attack as major milestone reached - Liverpool Echo",
      description:
        "Donations keep pouring in for the taxi driver who is 'lucky to be alive'",
      url: "https://www.liverpoolecho.co.uk/news/liverpool-news/update-taxi-driver-liverpool-bomb-22223987",
      urlToImage:
        "https://i2-prod.cheshire-live.co.uk/incoming/article22166787.ece/ALTERNATES/s1200/3_image-6.jpg",
      publishedAt: "2021-11-20T09:42:19Z",
      content:
        "The community continues to rally behind a taxi driver who is 'lucky to be alive' after a bomb explosion outside the Liverpool Women's Hospital.\r\n Terror suspect Emad Al Swealmeen, 32, is believed to … [+2494 chars]",
    },
    {
      source: {
        id: null,
        name: "Eurogamer.net",
      },
      author: "Wesley Yin-Poole",
      title:
        "Rockstar releases first post-launch update for Grand Theft Auto: The Trilogy - The Definitive Edition - Eurogamer.net",
      description: null,
      url: "https://www.eurogamer.net/articles/2021-11-20-rockstar-releases-first-post-launch-update-for-grand-theft-auto-the-trilogy-the-definitive-edition",
      urlToImage:
        "https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-11-20-09-35/rockstar-releases-first-post-launch-update-for-grand-theft-auto-the-trilogy-the-definitive-edition-1637400930227.jpg/EG11/resize/1200x-1/rockstar-releases-first-post-launch-update-for-grand-theft-auto-the-trilogy-the-definitive-edition-1637400930227.jpg",
      publishedAt: "2021-11-20T09:39:33Z",
      content:
        "Rockstar has released the first post-launch update for Grand Theft Auto: The Trilogy - The Definitive Edition.\r\nTitle update 1.02 is available now for the GTA Trilogy on PlayStation 5, PlayStation 4,… [+8035 chars]",
    },
    {
      source: {
        id: null,
        name: "ChronicleLive",
      },
      author: "Mike Kelly",
      title:
        "Heavy snow to fall 'for days' across UK with temperatures to drop as low as -12C - ChronicleLive",
      description:
        "Freezing temperatures forecast from the start of next week which might drop to as low as -12C by the end of the month with snow predicted",
      url: "https://www.chroniclelive.co.uk/news/uk-news/uk-weather-heavy-snow-days-22224047",
      urlToImage:
        "https://i2-prod.chroniclelive.co.uk/incoming/article21969726.ece/ALTERNATES/s1200/1_Winter-weather-Feb-27th-2018.jpg",
      publishedAt: "2021-11-20T09:25:06Z",
      content:
        "The North East is facing freezing temperatures alongside the rest of the UK from the start of next week as the cold weather hits the country.\r\nThe sub-zero temperatures are to arrive from Monday, acc… [+3281 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title: "Manchester City v Everton: match preview - The Guardian",
      description:
        "Pep Guardiola’s strength in depth is going to be seriously tested against Everton as Manchester City miss Kevin De Bruyne and Jack Grealish",
      url: "https://amp.theguardian.com/football/2021/nov/20/manchester-city-everton-match-preview-premier-league",
      urlToImage: null,
      publishedAt: "2021-11-20T09:02:00Z",
      content:
        "Match previewsSat 20 Nov 2021 04.00 EST\r\nManchester Citys strength in depth is going to be seriously tested against Everton. Kevin De Bruyne and Jack Grealish have been ruled out while Phil Foden is … [+1757 chars]",
    },
    {
      source: {
        id: null,
        name: "Express",
      },
      author: "Millie Cooke",
      title:
        "Meghan and Harry 'fired all guns' – Sussexes out of options as Royal Family 'moves on' - Daily Express",
      description:
        "MEGHAN MARKLE and Prince Harry have 'fired all their guns' but the 'British monarchy keeps moving forward', a royal expert has claimed.",
      url: "https://www.express.co.uk/news/royal/1524334/Meghan-Markle-Prince-Harry-monarchy-Duke-Duchess-Sussex-Royal-Family-news",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/106/750x445/1524334.jpg",
      publishedAt: "2021-11-20T08:31:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "ITV News",
      },
      author: "ITV News",
      title:
        "Joe Biden on Rittenhouse verdict: 'We must acknowledge that the jury has spoken' - ITV News",
      description:
        "The case against Rittenhouse split the US over whether he was acting against unlawfulness or if he was a vigilante who took an assault rifle to a protest.",
      url: "https://www.itv.com/news/2021-11-19/kyle-rittenhouse-us-teenager-cleared-over-kenosha-killings",
      urlToImage:
        "https://images.ctfassets.net/pjshm78m9jt4/5sOOkdyYZWzJidW2CnacAq/84e20d1a8323ae1877c9856f07e6d216/AP_21323701515011.jpg",
      publishedAt: "2021-11-20T08:20:01Z",
      content:
        "ITV News Correspondent Robert Moore reports on the polarising verdict and what it means for the US\r\nJoe Biden has stood by the not-guilty verdict of Kyle Rittenhouse, the American teenager who was cl… [+4305 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Laurie Churchman",
      title:
        "‘Incredible’ doctor who spent months apart from family on Covid frontline dies of virus - The Independent",
      description:
        "Dr Irfan Halim was saving lives when he collapsed after becoming infected",
      url: "https://www.independent.co.uk/news/uk/home-news/doctor-on-nhs-frontline-dies-of-covid-b1960875.html",
      urlToImage:
        "https://static.independent.co.uk/2021/11/19/15/Dr%20Irfan%20Halim.jpeg?width=1200&auto=webp&quality=75",
      publishedAt: "2021-11-20T08:18:31Z",
      content:
        "An NHS surgeon who spent months apart from his family treating patients on the Covid frontline has died after contracting the virus himself. \r\nDr Irfan Halim collapsed on shift and was in intensive c… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Jasper Jolly",
      title:
        "‘The story is very rich’: Ghosn’s escape to freedom has come at a cost - The Guardian",
      description:
        "Ex-head of Renault and Nissan insists colleague held in Japan is innocent as he works to refute his own charges",
      url: "https://amp.theguardian.com/business/2021/nov/20/the-story-is-very-rich-ghosns-escape-to-freedom-has-come-at-a-cost",
      urlToImage:
        "https://i.guim.co.uk/img/media/a0bd0b25f6da60f9ccc605358a376afe2bc4e0a0/0_0_5662_3396/master/5662.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45331b0b9a9b895457d280831d0d340c",
      publishedAt: "2021-11-20T08:06:00Z",
      content:
        "Carlos Ghosn knows how compelling his story is. Born in Brazil to Lebanese parents, he scaled the corporate ladder to the very top of global industry to be crowned head of Renault and Nissan, before … [+5533 chars]",
    },
    {
      source: {
        id: null,
        name: "Metro.co.uk",
      },
      author: "Jordan King",
      title:
        "Afghanistan: Taliban soldiers ‘shot civilians when they got bored’ - Metro",
      description:
        "A British soldier said he had 'never come across more evil people in his life'.",
      url: "https://metro.co.uk/2021/11/20/afghanistan-taliban-soldiers-shot-civilians-when-they-got-bored-15611841/",
      urlToImage:
        "https://metro.co.uk/wp-content/uploads/2021/11/PRI_210595790-e1637168934979_1637336508.jpg?quality=90&strip=all&w=1200&h=630&crop=1",
      publishedAt: "2021-11-20T08:00:00Z",
      content:
        "A British soldier said he had never come across more evil people in his life (Pictures: AP/Reuters/Getty Images)\r\nWhen Taliban fighters got tired of waiting for evacuations to be processed, they woul… [+5301 chars]",
    },
    {
      source: {
        id: null,
        name: "Louder",
      },
      author: "Paul Brannigan",
      title:
        "‘We made great music. We had a great time. Then it stopped’: Why Led Zeppelin’s success wasn’t enough for Robert Plant - Louder",
      description:
        "Robert Plant talks Led Zeppelin’s break-up and the addiction which drives him, announces 2022 tour with Alison Krauss",
      url: "https://www.loudersound.com/news/we-made-great-music-we-had-a-great-time-then-it-stopped-why-led-zeppelins-success-wasnt-enough-for-robert-plant",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/rYkv3YV72maFH2BHik8frE-1200-80.jpeg",
      publishedAt: "2021-11-20T07:00:51Z",
      content:
        "Robert Plant has announced a summer 2022 tour alongside Alison Krauss, and revealed that memories of suggestions that he might retire from the music business in 1980 after Led Zeppelin disbanded have… [+2683 chars]",
    },
  ],
};
