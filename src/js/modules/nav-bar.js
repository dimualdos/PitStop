const fontsElem = document.querySelector('[data-fonts]');

const navBarElement = document.createElement(`nav`);
navBarElement.className = "navbar navbar-expand-lg navbar-light";
navBarElement.style = "background-color: rgba(255, 199, 87, 0.5)";
navBarElement.innerHTML = `
<div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <picture>
          <source type="image/webp" srcset="../../../images/logo-pitstop_poster_.webp">
          <img src="../../../images/logo-pitstop-poster.png" height="50" width="50" alt="логотип PitStop">
        </picture>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Услуги
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

              <li><a class="dropdown-item" href="body-repair.html">кузовной ремонт</a></li>
              <li><a class="dropdown-item" href="remont-bampera.html">ремонт бампера</a></li>
              <li><a class="dropdown-item" href="zamena-bampera.html">замена бампера</a></li>
              <li><a class="dropdown-item" href="car-painting.html">покраска авто</a></li>
              <li><a class="dropdown-item" href="pokraska-dveri-avtomobilya.html">покраска двери авто</a>
              </li>
              <li><a class="dropdown-item" href="pokraska-kryla.html">покраска крыла авто</a></li>
              <li><a class="dropdown-item" href="pokraska-bampera.html">покраска бампера</a></li>
              <li><a class="dropdown-item" href="pokraska-kapota.html">покраска капота</a></li>
              <li><a class="dropdown-item" href="pokraska-kryshi-avtomobilya.html">покраска крыши</a></li>
              <li><a class="dropdown-item" href="pokraska-tsarapin.html">покраска царапин</a></li>
              <li><a class="dropdown-item" href="polirovka-avtomobilya.html">полировка кузова</a></li>
              <li><a class="dropdown-item" href="polirovka-far.html">полировка фар</a></li>
              <li><a class="dropdown-item" href="polirovka-tsarapin.html">полировка царапин</a></li>
              <li><a class="dropdown-item" href="udaleniye-vmyatin.html">PDR удаление вмятин</a></li>

            </ul>
          </li>
          <li class="nav-item"> <a class="nav-link" href="tseny.html">Цены</a> </li>
          <li class="nav-item"> <a class="nav-link" href="kontakty.html">Контакты</a> </li>
        </ul>
        <a class="btn btn-sm" href="https://vk.com/pitstoplike">
          <picture>
            <source type="image/webp" srcset="../../../images/icons/vkicon.webp">
            <img data-src="../../../images/icons/vkicon.png" alt="pitstop vk" width="25" height="25">
          </picture>
        </a>
        <a class="btn btn1 btn-sm me-2" href="https://api.whatsapp.com/send?phone=79852803434"
          role="button">WhatsApp</a>
      </div>
    </div>
`;

export default fontsElem.after(navBarElement);;  
