export function stop(){
    fetch('http://192.168.1.153:1300', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  },
  body: 'stop'
})
.then(response => {
  // ici, vous pouvez traiter la réponse du serveur
  //console.log(response);
})
.catch(error => {
  // ici, vous pouvez gérer les erreurs
  //console.error(error);
});

}
