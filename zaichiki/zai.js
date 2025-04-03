
let cont1 = document.querySelector('.game');



let imgarr = ['banya.jpg', 'bgukifashion.jpg', 'hantsic3y.png', 'paltordr.jpg', 'pml.jpg', 'smokinic3y.jpg', 'kachki.jpg', 'zachetka.jpg', 'deezainer.jpg'];

let imgContainerArr = [document.querySelector('.img1'), document.querySelector('.img2'), document.querySelector('.img3'),
    document.querySelector('.img4'), document.querySelector('.img5'), document.querySelector('.img6')];

let newImgArr = [];

//game
document.querySelector('.play').addEventListener('click', () => {

   cont1.addEventListener('mouseover', (event) => {
      if(event.target.className == 'gg') {
         let target = event.target;
         target.style.cssText = 'opacity: 0; transition: opacity 1s;'
      }
 })

 imgContainerArr.forEach((element) => {
     element.src = imgarr[Math.floor(Math.random() * imgarr.length)];
     newImgArr.push(element.src);
 })


 function hasThreeIdentical(newImgArr) {
   const count = {};

   for (const image of newImgArr) {
       if (count[image]) {
           count[image]++;
       } else {
           count[image] = 1;
       }
   }

   for (const key in count) {
       if (count[key] >= 3) {
           return true;
       }
   }

   return false;
}
  const result = hasThreeIdentical(newImgArr);

  setTimeout(() => {
   if(result) document.querySelector('.text').textContent = 'ДА ЕСТЬ ЖЕЕЕЕ';
   else document.querySelector('.text').textContent = 'НУ ТЫ И БАКЛУША';
  },15000);

})


document.querySelector('.reset').addEventListener('click', () => {
   location.reload();
})

