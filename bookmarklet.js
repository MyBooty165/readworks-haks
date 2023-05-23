javascript:(function() {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '0px';
    div.style.left = '0px';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.zIndex = '1000000';
    div.style.backgroundImage = 'url("https://steamuserimages-a.akamaihd.net/ugc/2009206964543793942/1CA1014D0B5A40E51608DE058DE4638FF42EAF9D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")';
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.color = 'darkgreen';
    div.style.fontSize = '5em';
    div.innerText = "Importing Ambasing Virus...";
    document.body.appendChild(div);

    setTimeout(function() {
        div.innerText = "Import Successful!";
    }, 5000);
})();
