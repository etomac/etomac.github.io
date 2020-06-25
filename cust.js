



function custAdd(inSeed, extension){
  
  let datas = dn4.concat(sen1) ;
  
  console.log(datas)
  let jdx = parseInt((inSeed*datas.length));
  
  let outtext = ''
  
  if (extension) {
    
    outtext = datas[jdx].jpn + "   " + datas[jdx].def
    
  } else {
    
    outtext = datas[jdx].jpn 
    
  }
  
  return outtext ;
}
