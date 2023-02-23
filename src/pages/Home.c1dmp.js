// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';

$w.onReady(function () {

	const msgContainer = $w("#chatContainer");
	const msgBox = $w("#msgBox")

	msgBox.onClick((e) => {
		wixData.get("FAQ", e.context.itemId).then((item) => {
			msgContainer.setAttribute("in-msg", item.title)
			msgContainer.setAttribute("out-msg", item.answere)
		})
	})



	// Call functions on page elements, e.g.:


	// Click "Run", or Preview your site, to execute your code

});