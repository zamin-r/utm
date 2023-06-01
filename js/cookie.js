function getURL (){
    let connector,
        url = document.getElementById('url-input').value
    if ( url.includes('?') ) {
        connector = '&'
    } else {
        connector = '?'
    }
    return  url + connector

}

function getSelectionValue() {
    const mediumSelection = document.querySelector('input[name="medium_select"]:checked').value
    const sourceSelection = document.querySelector('input[name="source_select"]:checked').value
    return document.getElementById("result").innerHTML= "&utm_medium="+mediumSelection + "&utm_source="+sourceSelection
}

function getCampaign() {
    let utmCampaign = document.getElementById('campaign').value
    if (utmCampaign != '') {
        return '&utm_campaign=' + utmCampaign.split(' ').join('%20') // the %20 has to do with some sort of browser encoding feature for URL's. Basically, certain ASCII characters are replaced with a %20.

    } else {
        return ''
    }
}

function finishedUTM() {
    const finished = "https://" + getURL() + getSelectionValue() + getCampaign()
    return document.getElementById("result").innerHTML= finished
}

