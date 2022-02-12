document.getElementById('file-input').addEventListener('change', readSingleFile, false);
function readSingleFile(e) {
    console.log("in read file");
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        console.log(typeof contents);
        const myContent = JSON.parse(contents);
        console.log(myContent);
        displayContents(myContent);
    };
    reader.readAsText(file);
}

function displayContents(json) {
    console.log("in displaycontents");
    var element = document.getElementById('file-content');
    let myStr = "";
    json.events.forEach(function(item){
        myStr += item.segs[0].utf8 + "\n\n";
    });


    element.textContent = myStr;
}
