
  const hamburger = document.querySelector('.hamburger');
  const headerMenu = document.querySelector('.header_menu');
  const headerList = document.querySelector('.header_list');

  hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
  });

  headerList.addEventListener('click', () => {
    headerMenu.classList.remove('active');
  });


