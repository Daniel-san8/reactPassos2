const links = document.querySelectorAll(".link");

console.log(links instanceof NodeList);

links.forEach((link) => {
  console.log(link);
});
