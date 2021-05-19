async function getImage() {
  let image = await fetch(
    `https://bing-image-search1.p.rapidapi.com/images/search?q=${searchValue}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9ec856775cmsh18791d11e3541e2p1eeaf3jsn760b3c3d7241",
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );
  myImage = await image.json();
  const newImage = document.createElement("img");
  newImage.src = myImage.value[0].thumbnailUrl;
  document.body.appendChild(newImage);
  console.log(myImage);
}
const searchValue = "Maths";
getImage();
