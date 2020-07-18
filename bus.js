$(document).ready(function() {
	console.log("busApi loaded")
	const url0 = "https://rt.data.gov.hk//v1/transport/citybus-nwfb/";
	
	let nbz =[ {
	busout: [],
	busmat:[
	["CTB","10",'001065'],["CTB","1",'001065'],["CTB","5B",'001065'],["NWFB","101",'001065'],["NWFB","104",'001065'],["NWFB","26",'002759'],
	]
	},{
	busout: [],
	busmat: [
	["CTB","10",'001135'],["CTB","1",'001066'],["CTB","5B",'001066'],["NWFB","101",'001135'],["NWFB","104",'001135'],["NWFB","113",'001066'],
	["NWFB","905",'001066'],
	]
	},{
	busout: [],
	busmat: [
	["CTB","10",'001061'],["CTB","1",'001061'],["CTB","5B",'001061'],["NWFB","101",'001192'],["NWFB","104",'001192'],
	]
	}]
	
	
	nbz.forEach((nbs)=>{
		
		let buses = [];
		nbs.busmat.forEach((ele)=>{

			
			let flickerAPI = url0 + "eta/"+ele[0]+"/" + ele[2] +"/" + ele[1];
			$.getJSON( flickerAPI, {
				format: "json"
			}).done(function( data ) {
				[0,1].forEach((idx)=>{
					let timeStr = data.data[idx].eta.substring(11,16);
					
					if (timeStr.length > 2 ){
						nbs.busout.push(timeStr + " (Bus: " + ele[1] + ")");
					}
				})
				//console.log("Bus",ele[1], "ETAcurr", data.data[0].eta.substring(11,16));
				//console.log("Bus",ele[1], "ETAnext", data.data[1].eta.substring(11,16));
				
				nbs.busout.sort()
				//console.log(nbs.busout)
				
				$('#bus').text(nbz[0].busout.join(" || "));
				$('#bus_syp').text(nbz[2].busout.join(" || "));
				$('#bus_to_kt').text(nbz[1].busout.join(" || "));
			})
		})
	})
	
	let api2 = url0 + "stop/001192";
			$.getJSON( api2, {
			format: "json"
		}).done(function( data ) {console.log(data)})

	


})
/*

BUS STOPS
001135 = Suderland street QRW (to KT)
001065 = Suderland street DVR (to Central)
001066 = Queen Street DVR (to KT)

route/CTB/10              :: route (NWFB)
route-stop/CTB/10/outbound:: route stops
stop/001065               :: bus stop number
eta/CTB/001065/10         :: eta
002759 = queen street (26)
001065 = suderland street
*/