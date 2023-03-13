

const footerElem = document.querySelector('footer')
const formElement = document.createElement(`div`);
formElement.className = "modal";
formElement.innerHTML = `
    <div class="modal__dialog">
        <div class="modal__content">
      					<form class="mb-3 mt-3 "  enctype="multipart/form-data" method="post">
                          <div data-close class="modal__close">&times;</div>
								<h4 class="text-center ">Бесплатная оценка по фото</h4>
								<div class=" mb-3 ">
									<label for=" formName" class="form-label">Ваше имя</label>
									<input data-validate  name="name" type="name" placeholder="введите Ваше имя" id="formName" required
										minlength="2" maxlength="15" class="form-control" aria-describedby="emailHelp">
									<div class="form-text">Мы не будем ни с кем делиться Вашими данными.
									</div>
								</div>
								<div class="mb-3 ">
									<label for="phone" class="form-label">Ваш телефон</label>
									<input  data-validate name="phone" minlength="11" maxlength="12" placeholder="введите 11 цифр телефона" required
										type="tel" id="phone" class="form-control">
								</div>
								<div class="mb-3 ">
									<label for="myfile" class="form-label ">Ваш телефон</label>
									<input name="myfile[]" type="file" multiple
										accept="image/jpeg, image/png, image/gif, image/jpg" class="form-control"
										id="myfile">
								</div>
								<button type="submit" class="btn btn-primary">Отправить</button>
							</form>
				</div>
        </div>
    </div>
    `;

export default document.body.append(formElement);


