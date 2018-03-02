export function setBusy(busy) {
  return {
    type : 'SET_BUSY',
    data : { 
      busy
    }
  }
}