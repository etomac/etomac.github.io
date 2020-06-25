



function custAdd(inSeed, extension){
  
  let datas = dn4;
  
  console.log(dn4);
  
  let jdx = parseInt((inSeed*dn4.length));
  
  let outtext = ''
  
  if (extension) {
    
    outtext = datas[jdx].jpn + datas[jdx].def
    
  } else {
    
    outtext = datas[jdx].jpn 
    
  }
  
  return outtext ;
}
