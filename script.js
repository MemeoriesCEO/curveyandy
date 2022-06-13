const img1 = '<img src="andy1.PNG" alt="andy" width="150" height="200">';
const img2 = '<img src="andy2.PNG" alt="andy" width="150" height="200">';
const img3 = '<img src="andy3.PNG" alt="andy" width="150" height="200">';
const img4 = '<img src="andy4.PNG" alt="andy" width="150" height="200">';
const img5 = '<img src="andy5.PNG" alt="andy" width="150" height="200">';
const img6 = '<img src="andy6.PNG" alt="andy" width="150" height="200">';
const img7 = '<img src="andy7.PNG" alt="andy" width="150" height="200">';
const img8 = '<img src="andy8.PNG" alt="andy" width="200" height="200">';
const img9 = '<img src="andy9.PNG" alt="andy" width="150" height="200">';
const img10 = '<img src="andy10.PNG" alt="andy" width="200" height="200">';
const img11 = '<img src="andy11.PNG" alt="andy" width="150" height="200">';
const img12 = '<img src="andy12.PNG" alt="andy" width="150" height="200">';
const img13 = '<img src="andy13.PNG" alt="andy" width="150" height="200">';
const img14 = '<img src="andy14.PNG" alt="andy" width="150" height="200">';
const img15 = '<img src="andy15.PNG" alt="andy" width="150" height="200">';
const img16 = '<img src="andy16.PNG" alt="andy" width="210" height="200">';
const img17 = '<img src="andy17.PNG" alt="andy" width="150" height="200">';
const img18 = '<img src="andy18.PNG" alt="andy" width="150" height="200">';
const img19 = '<img src="andy19.PNG" alt="andy" width="150" height="200">';
const img20 = '<img src="andy20.PNG" alt="andy" width="150" height="200">';
const img21 = '<img src="andy21.PNG" alt="andy" width="150" height="200">';
const img22 = '<img src="andy22.PNG" alt="andy" width="150" height="200">';
const img23 = '<img src="andy23.PNG" alt="andy" width="150" height="200">';
const img24 = '<img src="andy24.PNG" alt="andy" width="150" height="200">';
const img25 = '<img src="andy25.PNG" alt="andy" width="220" height="200">';
const img26 = '<img src="andy26.PNG" alt="andy" width="150" height="200">';
const img27 = '<img src="andy27.PNG" alt="andy" width="150" height="200">';
const img28 = '<img src="andy28.PNG" alt="andy" width="210" height="200">';

const imgArr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
];

const btnFunc = function () {
  const btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", function () {
    const arrPrint = function () {
      setInterval(function () {
        Array.prototype.sample = function () {
          return this[Math.floor(Math.random() * this.length)];
        };
        const arrInfo = document.querySelector(".arrayinfo");
        const html = `<h2 class="random__arr">${imgArr.sample()}`;

        arrInfo.insertAdjacentHTML("beforeend", html);
      }, 1000);
    };
    arrPrint();
  });
};

btnFunc();

const scrollFunc = function () {
  setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);
};

scrollFunc();
