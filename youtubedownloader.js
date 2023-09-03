window.onload = function(){
    const URLInput = document.getElementById('URL-input')
    const convertButton = document.getElementById('convert-button')
    convertButton.onclick = function(){
        var url = URLInput.value
        console.log("URL: ", url)
        // TODO: Call Python function to download video
    }
}