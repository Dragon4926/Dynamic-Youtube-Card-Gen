let createCard = (title, cName, views, upldDate, dur, thumb) => {
  let v = views < 1000 ? views : views > 100000 ? views/100000 + "M" : views/1000 + "k";
  let u =
    upldDate < 13
      ? upldDate + " months ago "
      : upldDate < 25
      ? (upldDate - 13) + " year ago "
      : upldDate + " years ago ";
  let html = `<div class="card">
                <div class="image">
                    <img src="${thumb}" onclick="p()" alt="Thumbnail image" style="cursor: pointer;">
                    <div class="dur">${dur}</div>
                </div>
                <div class="text">
                    <h1>${title}</h1>
                    <p>${cName} <b>.</b> ${v} views <b>.</b> ${u}</p>
                </div> 
              </div>`;
  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
};

document.querySelector("button").addEventListener("click", () => {
  createCard(
    "Ariana Grande - We Can't Be Friends -「AMV」- Anime MV",
    "Anime Amv Sensei",
    79000,
    24,
    "2:56",
    "https://i.ytimg.com/vi/x299KHmCeT0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCsBypwYb8ZM0JC5ml014gv40JvBQ"
  );
});

let p = ()=>{
  document.body.getElementsByClassName('container')[0].innerHTML = `<video src='video.mp4' autoplay controls>`;
}
