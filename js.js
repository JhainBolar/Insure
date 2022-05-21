

window.addEventListener('scroll', fixNav)

function fixNav(){
    console.log("yes")
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.icons');
  
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('square-animation');
    });
  });
  
  observer.observe(document.querySelector('.inside'));

//   const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.inside-contain');
  
//       if (entry.isIntersecting) {
//         square.classList.add('square-animation01');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       square.classList.remove('square-animation01');
//     });
//   });
  
//   observer1.observe(document.querySelector('.container-3'));