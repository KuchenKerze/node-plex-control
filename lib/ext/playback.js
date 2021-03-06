module.exports = {
	name: "playback",
	initialize: function(helper) {
		function navigate(action) {
			return function (callback) {
				helper.performOnClient("/playback/" + action, callback);
			};
		}

		return {
			play: navigate("play"),
			pause: navigate("pause"),
			stop: navigate("stop"),
			rewind: navigate("rewind"),
			fastForward: navigate("fastForward"),
			stepForward: navigate("stepForward"),
			bigStepForward: navigate("bigStepForward"),
			stepBack: navigate("stepBack"),
			bigStepBack: navigate("bigStepBack"),
			skipNext: navigate("skipNext"),
			skipPrevious: navigate("skipPrevious")
		};
	}
} 
