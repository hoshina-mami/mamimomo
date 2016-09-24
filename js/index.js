(function () {
	var lists;
	document.addEventListener('DOMContentLoaded', function() {
		lists = $('.list_works').find('li');

		var $menuNews = $('#jsMenuNews'),
			$menuContact = $('#jsMenuContact');

		$menuNews.on('click', function () {
			$(this).next().slideToggle('fast');
			$(this).toggleClass('active');
		});

		$menuContact.on('click', function () {
			$(this).next().slideToggle('fast');
			$(this).toggleClass('active');
		});

		$('#js_all').on('click', function () {
			$('.nav').removeClass('on');
			$('#js_all').addClass('on');
			updateWorkList('all');
		});
		$('#js_app').on('click', function () {
			$('.nav').removeClass('on');
			$('#js_app').addClass('on');
			updateWorkList('app');
		});
		$('#js_stamp').on('click', function () {
			$('.nav').removeClass('on');
			$('#js_stamp').addClass('on');
			updateWorkList('stamp');
		});
		$('#js_skin').on('click', function () {
			$('.nav').removeClass('on');
			$('#js_skin').addClass('on');
			updateWorkList('skin');
		});
	});

	/* @param target {String} */
	var updateWorkList = function (target) {
		var $list_works = $('.list_works');

		$list_works.addClass('hide').empty();

		switch (target) {
			case 'all':
				$list_works.append(lists).removeClass('hide');
				break;

			case 'app':
				$list_works.append(lists);
				$('.work_stamp').remove();
				$('.work_skin').remove();
				$list_works.removeClass('hide');
				break;

			case 'stamp':
				$list_works.append(lists);
				$('.work_app').remove();
				$('.work_skin').remove();
				$list_works.removeClass('hide');
				break;

			case 'skin':
				$list_works.append(lists);
				$('.work_app').remove();
				$('.work_stamp').remove();
				$list_works.removeClass('hide');
				break;
		}
	};
})();