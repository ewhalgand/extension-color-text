document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("apparence").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: changeColor
            })
        })    
    })
    document.getElementById("font").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: changeFont
            })
        })    
    }) 
})

function changeColor () {
    const titlesElements = document.querySelectorAll("h1")

    titlesElements.forEach(title => {
        title.style.color = "green"
    });
}

function changeFont()  {
    const fontElement = document.querySelector("body")

    fontElement.style.fontFamily = "Comic Sans MS"
}