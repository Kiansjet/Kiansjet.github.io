// Designed for ./Portfolio.html
// Handles card expansion on the Portfolio page.

let fullImageViewModal = $('#fullImageViewModal')

$(document).ready(function () {
	$('#fullImageViewModal').on('hidden.bs.modal',function() {
		$('#fullImageViewModal .modal-body').empty()
	})

	$('.card').click(function() {
		let card = $(this)
		let lowQualitySrc = card.data('fulllowqualitysrc')
		let highQualitySrc = card.data('fullhighqualitysrc')
	
		$('#fullImageViewModal .spinner-border').css('display','inline-block')
		$('#fullImageViewModal h5').text(card.data('title'))
		let imageData = util.createDynamicallyLoadingImage($('#fullImageViewModal .modal-body')[0],lowQualitySrc,highQualitySrc)
		$(imageData.element).attr('style','border-bottom-left-radius: .2rem; border-bottom-right-radius: .2rem;')
		$(imageData.element).addClass('w-100')
		
		imageData.completionDeferred.then(function() {
			$('#fullImageViewModal .spinner-border').css('display','none')
		})
	})

	$('#zinecard').click(function() {
		window.open('https://drive.google.com/file/d/1RwYM7Zu_eqv6xZRZh-JbEiqFYB94dPWy/preview','_blank')
	})
})
