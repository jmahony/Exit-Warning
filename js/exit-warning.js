var $j = jQuery.noConflict(); // Safely use jQuery

$j(document).ready(function() {
	
	var currentDomain = document.domain;
	
	attachAlert();
	
	// New links could have been added by ajax request, re attach alerts.
	$j(document).ajaxComplete(attachAlert);

	function attachAlert() {
		// Iterate through all link tags
		$j('a, A').each(function() {
			// If the link is pointing to a domain other than currentDomain
			if (extractDomain(this.href) != currentDomain) {
				// This may not be the first time this function is called,
				// so unbind any previous binds to avoid more than 1 alert being display
				$j(this).unbind('click', exitAlert);
				$j(this).bind('click', exitAlert);
			}
		});
	}
	
	function exitAlert() {
		alert('You are now departing from the regulatory site of Opus Gold. Opus Gold is not responsible for the accuracy of the information contained within the linked site.');
	}

	function extractDomain(url) {
		var isMailTo = true,
			isTel    = true,
			domain;

		// Check the url is linking to a mailto
		if (url.search('mailto:') < 0) isMailTo = false;

		// For iPad / iPhones, check Safari hasn't inserted
		// links for telephone numbers
		if (url.search('tel:') < 0) isTel = false;

		if (!isMailTo &&
			!isTel) {
			domain = url.match(/:\/\/(.[^\/]+)/)[1];
			return domain;
		}
		return false;
	}

});