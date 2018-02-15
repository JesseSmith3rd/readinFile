document.getElementsById("openFile").addEventListener('change', function() {
  var fr = new FileReader();
  fr.onload = function() {
      document.getElementsById("fileContents").textContent = this.result;
  }
  fr.readAsText(this.files[0]);
})
