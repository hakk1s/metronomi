$(document).ready(function () {
	
	getTempo();
	
	console.log(getTempo());
	
	var isplaying = false;
	
	console.log(isplaying);
	
	$("#start").click(function () {
		
		if (!isplaying) {
			isplaying = true;
			runLoop = setInterval(function() {
		        console.log("boom");
		        playSound();
		    }, getTempo());
		} else {
			$("#info").html("Metronomi on jo käynnissä");
		}
		
	});
	
	$("#stop").click(function () {
		isplaying = false;
		$("#info").empty();
		clearInterval(runLoop);
	});
	
	function playSound() {
		var sound = $("#sound").val();
		var click = new Audio(sound);
		click.play();
	}
	
	function getTempo() {
		var tempo_int = parseInt($("#tempo").val());
		var tempo_ms = Math.pow(tempo_int / 60, -1) * 1000;
		var tempo_ms_fixed = tempo_ms.toFixed(0);
		$("#showTempo").html(tempo_int+" BPM");
		return tempo_ms_fixed;
	}
	
	$("#tempo").change(function() {
		getTempo();
	});

});