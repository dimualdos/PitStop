const pasteAfterNode = document.querySelector('[data-paste]');

const footerElementDiv = document.createElement(`footer`);
//footerElementDiv.className = "text-center";
footerElementDiv.innerHTML = `
   <div class="container text-left">
			<hr>
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-6 mb-md-0 mb-2">
					<h4>Наши контакты</h4>
					<address>
						<strong>PitStop.</strong><br>
						105187, Москва, Борисовская 37а<br>
						<abbr title="Phone">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/Phone.webp" srcset="images/icons/Phone.webp">

								<img class=" lazyloaded" data-src="images/icons/Phone.png" width="25" height="25" alt="Телефон PitStop" src="images/icons/Phone.png">
							</picture>

						</abbr>
						<a href="tel:8 (985) 280-34-34">8 (985) 280-34-34</a>
						<br>
						<abbr title="email">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/email.webp" srcset="images/icons/email.webp">

								<img class=" lazyloaded" data-src="images/icons/email.png" width="25" height="25" alt="почта Pitstop" src="images/icons/email.png">
							</picture>

						</abbr>
						<a href="mailto:info@pitstop-online.ru">info@pitstop-online.ru</a>
						<br>
						<abbr title="WhatsApp">
							<picture>
								<source type="image/webp" class=" lazyloading" data-srcset="images/icons/whatsapp-pitstop-poster.webp" srcset="images/icons/whatsapp-pitstop-poster.webp">
								<img class=" ls-is-cached lazyloaded" data-src="images/icons/whatsapp-pitstop-poster.png" width="25" height="25" alt="пишите в WhatsApp" src="images/icons/whatsapp-pitstop-poster.png">
							</picture>

						</abbr>
						<a href="https://api.whatsapp.com/send?phone=79852803434">8 (985) 280-34-34</a>
						<br>
					</address>
					<h4>Мы в соцсетях</h4>
					<div class="row">
						<div class="col-2"><a href="https://vk.com/pitstoplike">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/VK-icons.webp" srcset="images/icons/VK-icons.webp">
									<img class="rounded-circle lazyloaded" data-src="images/icons/VK-icons.png" alt="Ищите нас в контакте" src="images/icons/VK-icons.png">
								</picture>
							</a></div>
						<!-- <div class="col-2"><a href="https://www.instagram.com/pitstopkuzovnoi/">
								<picture>
									<source type="image/webp" class="lazyload"
										data-srcset="images/icons/Insta-icons.webp">
									<img class="rounded-circle lazyload" data-src="images/icons/Insta-icons.png"
										alt="Ищите нас в инстаграмм">
								</picture>
							</a></div>
						<div class="col-2"><a href="https://www.facebook.com/pitstopavtobest">
								<picture>
									<source type="image/webp" class="lazyload" data-srcset="images/icons/FB-icons.webp">
									<img class="rounded-circle lazyload" data-src="images/icons/FB-icons.png"
										alt="Ищите нас в фейсбук">
								</picture>
							</a></div> -->
						<div class="col-2"><a href="https://www.youtube.com/channel/UCOCM3f--22ea_hlotHUuFzQ?view_as=subscriber">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/YouTube-icons.webp" srcset="images/icons/YouTube-icons.webp">
									<img class="rounded-circle lazyloaded" data-src="images/icons/YouTube-icons.png" alt="Ищите нас в ютуб" src="images/icons/YouTube-icons.png">
								</picture>
							</a></div>
					</div>
				</div>


				<div class="col-lg-4 col-md-6 col-12">
					<h4>Что думают о нашей работе</h4>
					<ul class="list-unstyled">

						<li class="media my-4">
							<a href="https://goo.gl/maps/ZnCp8aebdC9rKYMw7">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/flurry.webp" srcset="images/icons/flurry.webp">
									<img class=" lazyloaded" data-src="images/icons/flurry.png" width="35" height="35" alt="Отзывы на картах Гугл" src="images/icons/flurry.png">
								</picture>
							</a>
							<div class="media-body">
								<h5 class="mt-0 mb-1">Отзывы с гугл карт</h5>
								<p class="mb-0">Работают классные специалисты, рекомендую! Случайно попала, закрашивали
									царапины, выпрямляли деталь, отлично подобрали цвет... <a href="https://goo.gl/maps/CKQsKSTPNakurD6L6">далее</a></p>
							</div>
						</li>
						<li class="media my-4">
							<a href="https://moscow.flamp.ru/firm/pit_stop-70000001023400944?utm_source=widget&amp;utm_medium=open_filial&amp;utm_campaign=medium_widget">
								<picture>
									<source type="image/webp" class=" lazyloading" data-srcset="images/icons/flamp.webp" srcset="images/icons/flamp.webp">
									<img class=" lazyloaded" data-src="images/icons/flamp.png" width="35" height="35" alt="Мы на флампе" src="images/icons/flamp.png">
								</picture>
							</a>
							<div class="media-body">
								<h5 class="mt-0 mb-1">Отзывы на Flamp</h5>
								<p class="mb-0">Ремонтировал в Питстопе у Михаила свой автомобиль. Машина не новая, куча
									всяких царапок, больших и мелких... <a href="https://goo.gl/maps/CKQsKSTPNakurD6L6">далее</a></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-lg-4 col-12">
					<h5>О нас</h5>
					<p>Компания PitStop - это небольшой центр кузовного ремонта в Москве. </p>
					<p> Список наших услуг:
					</p>
					<ul>
						<li>ремонт бамперов;</li>
						<li>кузовной ремонт;</li>
						<li>покраска автомобиля;</li>
						<li>полировка кузова;</li>
						<li>Удаление вмятин без покраски;</li>
						<li>работы по аэрографии. </li>
					</ul>

					<p></p>
					<p>Все Ваши пожелания по улучшению нашей компании мы с радостью примем по телефону 8 (495) 055-6536.
						или
						на почту info@pitstop-online.ru</p>

				</div>
			</div>

			<hr>
		</div>

<div class="container text-center">

				<div class="row">
					<div class="col-12">
						<span data-time="time"></span>
						<br>
						<picture>
							<source type="image/webp" class="lazyload" data-srcset="../../../images/contacts_poster_.webp">
							<img class="lazyload" data-src="../../../images/contacts_poster_.png" width="25" height="25"
								alt="наш телефон для связи">
						</picture>

						<a href="tel:8 (985) 280-34-34 ">8 (985) 280-34-34 </a>

						<a href="mailto:name@website.com">info@pitstop-online.ru</a> <br>
						<picture>
							<source type="image/webp" class="lazyload"
								data-srcset="../../../images/icons/whatsapp-pitstop-poster.webp">
							<img class="lazyload" data-src="../../../images/icons/whatsapp-pitstop-poster.png" width="25"
								height="25" alt="пишите в WhatsApp">
						</picture>
						<a href="https://api.whatsapp.com/send?phone=79852803434">8 (985)
							280-34-34</a> <br>

					</div>
				</div>
			</div>
`;
pasteAfterNode.after(footerElementDiv);

export default footerElementDiv; 
