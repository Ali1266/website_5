$(function(){
    $(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

window.addEventListener('DOMContentLoaded', ()=>{
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu');
  let span1 = document.querySelector('.burger span:nth-child(1)');
      span2 = document.querySelector('.burger span:nth-child(2)');
      span3 = document.querySelector('.burger span:nth-child(3)');
  
  burger.addEventListener('click', ()=>{
      menu.classList.toggle('active');
      rotate();
  });

  function rotate(){
      span1.classList.toggle('line1');
      span2.classList.toggle('line2');
      span3.classList.toggle('line3');
  };


  let yearHtml = document.querySelector('.footer span');
  let year = new Date().getFullYear();
  yearHtml.innerHTML = year;


  const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.menu__list-link').forEach((link) => {
            let id = link.getAttribute('href').replace('#', '');
            if (id === entry.target.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.5
    });
    document.querySelectorAll('section').forEach(section => { observer.observe(section)} );
});