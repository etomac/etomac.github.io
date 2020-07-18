$(document).ready(function() {
	console.log("busApi loaded")
	const url0 = "https://rt.data.gov.hk//v1/transport/citybus-nwfb/";
	
	let nbs = [
	["CTB","10"],["CTB","1"],["CTB","5B"],["NWFB","101"],["NWFB","104"],["NWFB","26"],
	];
	
	let buses = [];
	
	nbs.forEach((ele)=>{
		
		let busstop = '001065';
		
		if (ele[1] == '26') {
			busstop = '002759'
		}
		
		let flickerAPI = url0 + "eta/"+ele[0]+"/" + busstop +"/" + ele[1];
		$.getJSON( flickerAPI, {
			format: "json"
		}).done(function( data ) {
			buses.push(ele[1] + ' :: ' + data.data[0].eta.substring(11,16));
			buses.push(ele[1] + ' :: ' + data.data[1].eta.substring(11,16));
			//let timestep = data.data[0].eta.getHours() + ':' + data.data[0].eta.getMinutes();
			console.log("Bus",ele[1], "ETAcurr", data.data[0].eta.substring(11,16));
			console.log("Bus",ele[1], "ETAnext", data.data[1].eta.substring(11,16));
			
			
			console.log(buses)
			
			$('#bus').text(buses.join(" || "));
		})
	})
	/*
	let api2 = url0 + "stop/002759";
			$.getJSON( api2, {
			format: "json"
		}).done(function( data ) {console.log(data)})
	
	*/
	
	console.log(buses)


})
/*

BUS STOPS

route/CTB/10              :: route (NWFB)
route-stop/CTB/10/outbound:: route stops
stop/001065               :: bus stop number
eta/CTB/001065/10         :: eta
002759 = queen street (26)
001065 = suderland street
*/