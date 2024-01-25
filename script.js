//your JS code here. If required.
function delayedHello(){
	 return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Hello, world!');
          }, 1000); // 1 second delay
        });
}
 const outputElement = document.getElementById('output');
delayedHello()
        .then((message) => {
          outputElement.textContent = message;
        })
        .catch((error) => {
          console.error('Promise rejected:', error);
        });