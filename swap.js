
function df(zc, anntenor){

	return 1/(1 + zc * anntenor);

}


function intp(xarr, yarr, xint){
	if(xarr.length != yarr.length){
		console.log('intp length mismatch');
		return 0.0005
	} else if (xint - xarr[0] <= parseFloat(0.0)) {
		return yarr[0]
	} else if (xint  - xarr[xarr.length - 1] >= parseFloat(0.0)) {
		return yarr[xarr.length - 1]
	} else {
		for(i = 0; i<xarr.length; i++){
			if (xarr[i] >= xint) {
				return yarr[i-1] + (yarr[i] - yarr[i-1])/(xarr[i] - xarr[i-1])*(xint - xarr[i-1])
			}
		}
	}
}


function crvCreate(crvInfo){
	
	let stdTenors = ['1D','1M','3M','6M','1Y','2Y','3Y','5Y','7Y','10Y','12Y','15Y','20Y','30Y'];
	
	let crvObj = new Object();
	
	let firstpt = crvInfo.rates['3M'];
	
    // standard curve stripper
	// DF1 * c / 2 + DF2 * c /2 + .. + DF_N * (1 + c /2) = 1.

	
	
	return crvObj
	
}

let sampleInfo = {
	ccy: "USD",
	index: "OIS",
	rates: {
		'3M':0.02,
		'1Y':0.021,
		'5Y':0.025,
		'20Y':0.03,
	}
	
}
