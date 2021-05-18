if(window.innerWidth <= 745){
    document.getElementById('slidebar').classList.add('slidebar-hidden')
}

Array.from(document.getElementsByClassName('parent-dropdown')).forEach(element =>{
    element.click()
})

function showOptions() {
    
    let dropDownElm = event.currentTarget
    let dropDownIcon = dropDownElm.querySelector('.dropdown-icon')
    if(dropDownElm.parentElement.style.height == '50px'){
        dropDownElm.parentElement.style.height = (dropDownElm.childElementCount-1) * 40 + 50 + 'px'
        dropDownIcon.style.transform = 'rotateZ(270deg)'
        let dropDownItems = Array.from(dropDownElm.parentElement.children)

        for (let i = 0; i < dropDownItems.length; i++) {
            if(i==0){
                continue
            }
            const element = dropDownItems[i];
            element.style.opacity = '1'
            element.style.transform = 'scale(1)'
            
        }


    }
    else{
        dropDownIcon.style.transform = 'rotateZ(360deg)'

        dropDownElm.parentElement.style.height = '50px'

        let dropDownItems = Array.from(dropDownElm.parentElement.children)

        for (let i = 0; i < dropDownItems.length; i++) {
            if(i==0){
                continue
            }
            const element = dropDownItems[i];
            element.style.opacity = '0'
            element.style.transform = 'scale(0)'


            
        }
    }
    
}


let messageDropDownIcon = document.getElementById('message-icon')
let messageDropDownIconDiv = document.getElementById('message-icon-dropdown')
let notificationDropDownIcon = document.getElementById('notification-icon')
let notificationDropDownIconDiv = document.getElementById('notification-icon-dropdown')
let otherArr = Array.from(document.getElementsByClassName('message-dropdown-cont'))
messageDropDownIcon.addEventListener('click', ()=>{
    if(messageDropDownIconDiv.classList.contains('show-dropdown')){
        messageDropDownIconDiv.classList.remove('show-dropdown')
        messageDropDownIconDiv.classList.add('hide-dropdown')
    }
    else{
        
        messageDropDownIconDiv.classList.add('show-dropdown')
        messageDropDownIconDiv.classList.remove('hide-dropdown')

    }
    notificationDropDownIconDiv.classList.remove('show-dropdown')
    notificationDropDownIconDiv.classList.add('hide-dropdown')
        

})

notificationDropDownIcon.addEventListener('click', ()=>{
    if(notificationDropDownIconDiv.classList.contains('show-dropdown')){
        notificationDropDownIconDiv.classList.remove('show-dropdown')
        notificationDropDownIconDiv.classList.add('hide-dropdown')
    }
    else{
        notificationDropDownIconDiv.classList.add('show-dropdown')
        notificationDropDownIconDiv.classList.remove('hide-dropdown')
    }
    messageDropDownIconDiv.classList.remove('show-dropdown')
    messageDropDownIconDiv.classList.add('hide-dropdown')
        
})



/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
let goFullScreenIcon = document.getElementById('go-full-screen-icon')
let fullScreen = false
goFullScreenIcon.addEventListener('click', ()=>{
    if(!fullScreen){
        openFullscreen()
        goFullScreenIcon.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`
    }
    else{
        closeFullscreen()
        goFullScreenIcon.innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`

    }
})
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    fullScreen = true
} else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    fullScreen = true
} else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    fullScreen = true
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    fullScreen = false
    
} else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    fullScreen = false
} else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    fullScreen = false
  }
}



let slideBar = document.getElementById('slidebar')
let slideBarIcon = document.getElementById('slidebar-icon')

slideBarIcon.addEventListener('click', ()=>{
    slideBar.classList.toggle('slidebar-hidden')
    document.getElementById('content-wraper').classList.toggle('content-wraper-full-width')
})
