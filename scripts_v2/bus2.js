$(document).ready(function() {
	
	console.log("busApi loaded")
	
	/* Update 2025 
	
		- to v2 
		- no more Bus 1
		- also remove 101, 104 (doesnt work and far anyways..)
	
	*/
	
	/* Define :: URL for Citibus API */
	// const URLCONSTx = "https://rt.data.gov.hk/v1/transport/citybus-nwfb/";
	const URLCONST = "https://rt.data.gov.hk/v2/transport/citybus/";
	
	/* Define :: List of Requests preparation (3 items)*/
	let nbz =[
				{
					busout:[],
					busmat:[
							["CTB","10",'001065','to_Central_at_Sohohouse'],
							["CTB","5B",'001065','to_Central_at_Sohohouse'],
							["CTB","101",'001065','to_Central_at_Sohohouse'],
							["CTB","104",'001065','to_Central_at_Sohohouse'],
							["CTB","26",'002759','to_Central_at_Sohohouse']
					]
				},
				{
					busout:[],
					busmat:[
							["CTB","10",'001061','to_Central_at_Yata'],
							["CTB","5B",'001061','to_Central_at_Yata'],
							["CTB","101",'001192','to_Central_at_Yata'], 
							["CTB","104",'001192','to_Central_at_Yata'],
					]
				},{
					busout:[],
					busmat:[
							["CTB","10",'001134','to_HKU'],
							["CTB","5B",'001066','to_HKU'],
							["CTB","101",'001134','to_HKU'],
							["CTB","104",'001134','to_HKU'],
							["CTB","113",'001066','to_HKU'],
							["CTB","905",'001066','to_HKU'],
					]
				},
			]
	
	
	/* Script 1 :: check stop name */
	nbz.forEach((nbs)=>{
		
		let buses = [];
		
		nbs.busmat.forEach((ele)=>{

			let flickerAPI = URLCONST + "eta/" + ele[0] + "/" + ele[2] +"/" + ele[1];
			$.getJSON(flickerAPI, {
				format: "json"
			}).done(function(data){
				/* [0,1] specified to look at earliest 2 buses */
				if (data.data.length == 0 ){
					console.log('Returns null for this bus/route/stop:',ele[1], ele[3])
					console.log(data.data)
					console.log('Returns null for this bus/route/stop (End of line)',)
				}
				
				[0,1].forEach((idx)=>{
					
					let pushStr = '';
					let busStr  = ' (Bus: ' + ele[1] + ')';
					let busErr  = 'E';
					
					let dataTimeStr = data.data[idx].eta?.substring(11,16);
					let dataKmb = data.data[idx]?.rmk_en;
					
					if (dataTimeStr == undefined) {
						pushStr = busErr + busStr;
					} else if (dataTimeStr.length > 2 ) {
						pushStr = dataTimeStr + busStr;
						busErr = '';
					}
					
					/* error code display */
					if (busErr == 'E'){ 
						if(dataKmb == undefined){
							pushStr += 'ud' + busStr
						} else if (dataKmb.length > 1) {
							pushStr += [dataKmb.substring(0,3).toLowerCase(),ele[1].toString()].join('.')
						} else {
							pushStr += 'el' + busStr
						}
					}
					nbs.busout.push(pushStr);
					
				})
				
				/*
				console.log("Bus",ele[1],"ETAcurr", data.data[0].eta.substring(11,16));
				console.log("Bus",ele[1],"ETAnext", data.data[1].eta.substring(11,16));
				console.log(nbs.busout)
				*/
				
				/* sort by text */
				nbs.busout.sort()
				
				$('#bus_time_to_central_at_home').text(nbz[0].busout.join(" || "));
				$('#bus_time_to_central_at_yata').text(nbz[1].busout.join(" || "));
				$('#bus_time_to_hku').text(nbz[2].busout.join(" || "));
			})
		})
	})
	
	/* Script 2 :: check stop name */
	let api2 = URLCONST + "stop/001135";
    $.getJSON(api2, {
						format: "json"
					}).done(function(data){console.log(data)})
					
	// 001127 (sheung wan civic centre) , 001134
	/* Script 3 :: Display all 104 STOPS 
	
	let api3 = URLCONST + "route-stop/CTB/104/inbound";
    $.getJSON(api3, {
						format: "json"
					}).done(function(data){console.log(data)})
	*/
})

/*
BUS STOPS
001134 = queens terrace (outside konfusion)
001135 = Suderland street (outside soho-house)
001065 = Suderland street DVR (to Central)
001066 = Queen Street DVR (to KT)

route/CTB/10              :: route (NWFB)
route-stop/CTB/10/outbound:: route stops
stop/001065               :: bus stop number
eta/CTB/001065/10         :: eta
002759 = queen street (26)
001065 = suderland street
*/