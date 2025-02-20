function lockDesign(){
  const boddy = document.body;
  const header = document.getElementsByTagName("header")[0];
  const nav = document.getElementsByTagName("nav")[0];
  const nav_offset = document.querySelectorAll(".nav-offset");
  const sections = document.getElementsByTagName("section");
  const articles = document.getElementsByTagName("article");
  
  let lockHeight = [], lockPosition = [];
  let currentHeight, currentPosition;
  
  lockHeight.push(header);
  lockPosition.push(nav);
  lockHeight.push(boddy);
  
  for(let i = 0; i < articles.length; i++){
      lockHeight.push(articles[i]);
  };
  for(let i = 0; i < sections.length; i++){
      lockHeight.push(sections[i]);
  };
  nav_offset.forEach((el) => {
      lockHeight.push(el);
  })
  lockHeight.forEach((element) => {
      currentHeight = element.offsetHeight;
      element.style.height = `${currentHeight}px`;
  });
  lockPosition.forEach((element) => {
      currentPosition = element.offsetTop;
      element.style.top = `${currentPosition}px`;
  })
}