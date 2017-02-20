module.exports = function(app) {
	app.filter('rmb', function() {
		return function(amt) {
			if (isNaN(parseInt(amt))) {
				return amt
			} else {
				return amt ? (parseInt(amt / 100) + '.' + parseInt((amt / 10) % 10) +
					parseInt(amt % 10)) : '0';
			}

		}
	});
}
