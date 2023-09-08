let container = document.querySelector(".container");
let leftSide = createLeftSide();
let newsSection = createNewsSection();
let sectionTitle = createSectionTitle();
let newsItems = createNewsItems();
let newsWrap = createNewsWrap();
let newsWrapSmall = createNewsWrapSmall();
let newsCardLarge = createNewsCardLarge();
let newsItemSmall = createNewsItemSmall();
let btnToAll = createBtnToAll();
let videosSection = createVideosSection();
let allVideos = createAllVideos();
let video = createVideo();
let sectionSubtitle = createSectionSubtitle();
let rightSide = createRightSide();
let podcastsSection = createPodcastsSection();
let podcastsWrap = createPodcastsWrap();
let podcastContainer = createPodcastContainer();

container.append(leftSide, rightSide);
leftSide.append(newsSection, videosSection);

function createLeftSide() {
  let leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  return leftSide;
}

function createNewsSection() {
  let newsSection = document.createElement("section");
  newsSection.classList.add("news");
  return newsSection;
}

function createSectionTitle(title) {
  let sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  return sectionTitle;
}

let sectionTitleNews = createSectionTitle("Naujienos");

function createNewsItems() {
  let newsItems = document.createElement("div");
  newsItems.classList.add("news-items");
  return newsItems;
}

let btnToAllNews = createBtnToAll("Visos naujienos");

newsSection.append(sectionTitleNews, newsItems, btnToAllNews);

function createNewsWrap() {
  let newsWrap = document.createElement("div");
  newsWrap.classList.add("news-wrap");
  return newsWrap;
}

function createNewsWrapSmall() {
  let newsWrapSmall = document.createElement("div");
  newsWrapSmall.classList.add("news-wrap-small");
  return newsWrapSmall;
}

newsItems.append(newsWrap, newsWrapSmall);

function createNewsCardLarge(addressUrl, imgSrc, category, title, date) {
  let newsCardLarge = document.createElement("div");
  newsCardLarge.classList.add("news-card-large");

  let newsLink = document.createElement("a");
  newsLink.setAttribute("href", addressUrl);
  newsCardLarge.append(newsLink);

  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img");
  cardImg.src = imgSrc;

  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  newsLink.append(cardImg, cardContent);

  let newsCategory = document.createElement("span");
  newsCategory.classList.add("news-category");
  newsCategory.textContent = category;

  let newsTitle = document.createElement("h3");
  newsTitle.textContent = title;

  let newsDate = document.createElement("span");
  newsDate.classList.add("news-upload-date");
  newsDate.textContent = date;

  cardContent.append(newsCategory, newsTitle, newsDate);

  return newsCardLarge;
}

let newsCardLarge1 = createNewsCardLarge(
  `#`,
  `./images/pexels-christina-morillo-1181467-1024x684.jpg`,
  `Ai & deep learning`,
  `Ar "ChatGPT" užims mūsų darbo vietas?`,
  `2023-01-27`
);

let newsCardLarge2 = createNewsCardLarge(
  `#`,
  `./images/2022_11_10-Code-Academy-221-1024x683.jpg`,
  `Naujienos`,
  `Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?`,
  `2022-12-12`
);

newsWrap.append(newsCardLarge1, newsCardLarge2);

function createNewsItemSmall(addressUrl, imgSrc, category, title, date) {
  let newsItemSmall = document.createElement("div");
  newsItemSmall.classList.add("news-item-small");

  let newsLink = document.createElement("a");
  newsLink.classList.add("news-item-small-wrapper");
  newsLink.setAttribute("href", addressUrl);
  newsItemSmall.append(newsLink);

  let imgDiv = document.createElement("div");

  let cardImgSmall = document.createElement("img");
  cardImgSmall.classList.add("card-img-small");
  cardImgSmall.src = imgSrc;

  imgDiv.append(cardImgSmall);

  let cardContentSmall = document.createElement("div");
  cardContentSmall.classList.add("news-item-small-content");
  newsLink.append(imgDiv, cardContentSmall);

  let newsCategory = document.createElement("span");
  newsCategory.classList.add("news-category");
  newsCategory.textContent = category;

  let newsTitle = document.createElement("h3");
  newsTitle.textContent = title;

  let newsDate = document.createElement("span");
  newsDate.classList.add("news-upload-date");
  newsDate.textContent = date;

  cardContentSmall.append(newsCategory, newsTitle, newsDate);

  return newsItemSmall;
}

let newsItemSmall1 = createNewsItemSmall(
  `#`,
  `./images/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994 (1).jpg`,
  `Naujienos`,
  `Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?`,
  `2022-03-23`
);

let newsItemSmall2 = createNewsItemSmall(
  `#`,
  `./images/group-of-people.jpg`,
  `Naujienos`,
  `CodeAcademy" projektinė veikla - indėlis į gražesnę ateitį`,
  `2021-11-09`
);

let newsItemSmall3 = createNewsItemSmall(
  `#`,
  `./images/pexels-tima-miroshnichenko-5428258-1024x692.jpg`,
  `Technologijų ritmu`,
  `Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į
                                            klases?`,
  `2021-09-02`
);

let newsItemSmall4 = createNewsItemSmall(
  `#`,
  `./images/Shirts.jpg`,
  `Technologijų ritmu`,
  `Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?`,
  `2021-09-02`
);

newsWrapSmall.append(
  newsItemSmall1,
  newsItemSmall2,
  newsItemSmall3,
  newsItemSmall4
);

function createBtnToAll(title) {
  let btnToAll = document.createElement("a");
  btnToAll.classList.add("btn-to-all");
  btnToAll.textContent = title;
  return btnToAll;
}

function createVideosSection() {
  let videosSection = document.createElement("section");
  videosSection.classList.add("videos");
  return videosSection;
}

let sectionTitleVideos = createSectionTitle("Vaizdo įrašai");

function createAllVideos() {
  let allVideos = document.createElement("div");
  allVideos.classList.add("all-videos");
  return allVideos;
}

function createSectionSubtitle(title) {
  let sectionSubtitle = document.createElement("h3");
  sectionSubtitle.textContent = title;
  return sectionSubtitle;
}

let sectionSubtitleVideos = createSectionSubtitle("Jei galiu aš - gali ir tu!");
let btnToAllVideos = createBtnToAll("Visi vaizdo įrašai");
videosSection.append(
  sectionTitleVideos,
  allVideos,
  sectionSubtitleVideos,
  btnToAllVideos
);

function createVideo() {
  let video = document.createElement("div");
  video.classList.add("video");
  video.innerHTML = `<iframe width="560" height="415" src="https://www.youtube.com/embed/b8dGCsP75HA"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>`;
  return video;
}

allVideos.append(video);

function createRightSide() {
  let rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  return rightSide;
}

function createPodcastsSection() {
  let podcastsSection = document.createElement("section");
  podcastsSection.classList.add("podcasts");
  return podcastsSection;
}

let sectionTitlePodcasts = createSectionTitle("Podcastai ir radijo laidos");

function createPodcastsWrap() {
  let podcastsWrap = document.createElement("div");
  podcastsWrap.classList.add("podcasts-wrap");
  return podcastsWrap;
}

rightSide.append(podcastsSection, sectionTitlePodcasts, podcastsWrap);

function createPodcastContainer(imgSrc, playTime, title, date) {
  let podcastContainer = document.createElement("div");
  podcastContainer.classList.add("podcast-container");

  let podcastCardTop = document.createElement("div");
  podcastCardTop.classList.add("podcast-card-top");

  let podcastImg = document.createElement("img");
  podcastImg.src = imgSrc;
  podcastImg.style.width = "70px";
  podcastImg.style.height = "70px";

  let playTimeDiv = document.createElement("div");
  playTimeDiv.classList.add("play-time");
  playTimeDiv.textContent = `Trukmė: ${playTime}`;

  let playButton = document.createElement("button");
  playButton.classList.add("play-btn");

  let playImg = document.createElement("img");
  playImg.src = "./images/play-icon.webp";
  playImg.style.width = "20px";
  playImg.style.height = "20px";

  playButton.append(playImg);

  podcastCardTop.append(podcastImg, playTimeDiv, playButton);

  let podcastCardContent = document.createElement("div");
  podcastCardContent.classList.add("podcast-card-content");

  let podcastTitle = document.createElement("h3");
  podcastTitle.textContent = title;

  let podcastDate = document.createElement("span");
  podcastDate.classList.add("news-upload-date");
  podcastDate.textContent = date;

  podcastCardContent.append(podcastTitle, podcastDate);

  podcastContainer.append(podcastCardTop, podcastCardContent);

  return podcastContainer;
}

let podcastContainer1 = createPodcastContainer(
  `./images/Untitled-design-260x260.png`,
  `7:55`,
  `Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas`,
  `2021-09-02`
);

let podcastContainer2 = createPodcastContainer(
  `./images/Untitled-design-260x260.png`,
  `7:54`,
  `Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“`,
  `2021-08-25`
);

let podcastContainer3 = createPodcastContainer(
  `./images/Untitled-design-260x260.png`,
  `9:22`,
  `Kaip gyvensime 2031-aisiais? 10 esminių prognozių`,
  `2021-08-18`
);

let podcastContainer4 = createPodcastContainer(
  `./images/Untitled-design-260x260.png`,
  `8:32`,
  `Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“`,
  `2021-08-11`
);

podcastsWrap.append(
  podcastContainer1,
  podcastContainer2,
  podcastContainer3,
  podcastContainer4
);
