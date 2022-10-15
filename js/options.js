
const options = [

];

// Initialize the form with the user's option settings
chrome.storage.sync.get('options', (data) => {
  Object.assign(options, data.options);
  addItem();
    
});

function addItem() {
  var content = document.getElementById("content");
  var ls = "Dictionary";
  options.reverse().forEach((item)=>{
      ls+="<li>"+
      item.word + " : "+ item.meaning
      +"</li>"
    });
    content.innerHTML = ls;
}

// Immediately persist options changes
optionsForm.mbutton.addEventListener('click', (event) => {
  // options.debug = event.target.checked;
  
  var word = document.getElementById("word").value;
  var meaning = document.getElementById("meaning").value;
  var error = document.getElementById("error");
  if(word == ""){
    error.innerHTML = "please enter word";
    return;
  }
  if(meaning == ""){
    error.innerHTML = "please enter meaning";
    return;
  }
  error.innerHTML ="";
  options.push({
    "word":word,
    "meaning":meaning
  })

  addItem();
  chrome.storage.sync.set({options});
});




 