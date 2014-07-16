var caniuse = require('caniuse-db/data.json'),
	lookupAgent = require('./agent');

"use strict";

var versions = {}

module.exports = function getCanIUseData(feature) {

	if (!caniuse.data[feature]) {
		throw Error("No caniuse data for feature: " + feature);
	}

	var featuredata = caniuse.data[feature].stats;

	var versions = {};

	for (var browser in featuredata) {
		var normalBrowserName = lookupAgent(browser);
		versions[normalBrowserName] = [];
		var browserstats = featuredata[browser];
		for (var version in browserstats) {
			for (var value in browserstats[version]) {

				var polyfillableId = "p";
				if (browserstats[version][value] === polyfillableId) {

					// The semver comparison library fails when specifying
					// ranges without spaces between the semver components:
					// i.e. 10.0-12.19 will not work whereas 10.0 - 12.19 will
					// This converts the former to the latter:
					var browserVersion = version.replace('-', ' - ');

					versions[normalBrowserName].push(browserVersion);
				}
			}
		}
	}

	return versions;
}
