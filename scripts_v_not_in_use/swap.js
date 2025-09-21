function intp(xn, yn, xint){
	if(xn.length != yn.length){
		console.log('intp length mismatch');
		return 0.0005
	} else if (xint - xn[0] <= parseFloat(0.0)) {
		return yn[0]
	} else if (xint  - xn[xn.length - 1] >= parseFloat(0.0)) {
		return yn[xn.length - 1]
} else {
		for(i = 0; i<xn.length; i++){
			if (xn[i] >= xint) {
				return yn[i-1] + (yn[i] - yn[i-1])/(xn[i] - xn[i-1])*(xint - xn[i-1])
			}
		}
	}
}

function qct(swstring, template){
	
	template.id = swstring
	let inStr = swstring.split('.');
	
	// dates
	let anntenor = parseInt(inStr[0].substring(0,inStr[0].length - 1))
	let ed = moment().add(anntenor, 'years').format('YYYY-MM-DD')
	let sd = moment().format('YYYY-MM-DD')
	template.leg1.sd = sd
	template.leg2.sd = sd
	template.leg1.ed = ed
	template.leg2.ed = ed
	
	// notional
	let noty = parseFloat(inStr[1].substring(0,inStr[1].length - 1)) * 1000000.0
	template.leg1.notional = noty
	template.leg2.notional = noty

	// cpn
	// 300 = 3%
	template.leg1.cpnInfo.cpn =  parseFloat(inStr[2]) * 0.0001
	
	// payrcv
	let payrcv = inStr[3] 
	if (payrcv == 'r'){
		template.leg1.side = 'R'
		template.leg2.side = 'P'
	} else if (payrcv == 'p'){
		template.leg1.side = 'P'
		template.leg2.side = 'R'
	} 
	
	return template
	
}

/*
	
	Discount Function f(t) -> 0.99999
	Aug. Discount Faction f(t, 5) -> 4.9999
	Cashflow tables [t, nb]n
	
	raw curves....
	
	
*/


///////////////////////////////////////////////////////////////////
let swtemp = {
	id: 'template',
	leg1: {
		notional:100000000,
		ccy:'USD',
		sd:'2013-05-31',
		ed:'2033-05-31',
		side:'P',
		cpnStyle: 'fixed',
		cpnInfo: {
			cpn: 0.04,
			freq: 2
		}
	},
	leg2: {
		notional:100000000,
		ccy:'USD',
		sd:'2013-05-31',
		ed:'2033-05-31',
		side:'R',
		cpnStyle: 'float',
		cpnInfo: {
			cpnindex: '3M',
			spread: 0.00
		}
	}
}


let cvtemp = {
	ccy:"USD",
	index:"3M",
	quote:"par",
	
}

let swStrings = [
'5y.300m.300.r',
'10y.205m.210.r',
'13y.89m.205.p',
'7y.375m.355.r',
'8y.250m.10.p',
]
/*
swStrings.forEach((ele)=>{
	console.log(qct(ele, swtemp))
})
*/