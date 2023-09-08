let container = document.querySelector(".container");
let leftSide = createLeftSide();
let newsSection = createNewsSection();
let sectionTitle = createSectionTitle();
let newsItems = createNewsItems();
let newsWrap = createNewsWrap();
let newsWrapSmall = createNewsWrapSmall();
let newsCardLarge = createNewsCardLarge();
let newsItemSmall = createNewsItemSmall();

container.append(leftSide);
leftSide.append(newsSection);

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

newsSection.append(sectionTitleNews, newsItems);

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

  let cardImgSmall = document.createElement("img");
  cardImgSmall.classList.add("card-img-small");
  cardImgSmall.src = imgSrc;

  let cardContentSmall = document.createElement("div");
  cardContentSmall.classList.add("news-item-small-content");
  newsLink.append(cardImgSmall, cardContentSmall);

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
