const menuItems = document.querySelectorAll(".menu-item");




const changeActiveitem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove("active");
    })
}

menuItems.forEach(item=>{
   item.addEventListener('click',()=>{
    changeActiveitem();
    item.classList.add('active');
    if(item.id!='noti'){
        document.querySelector('.notification-popup').
        style.display = "none";
    }else{
        document.querySelector('.notification-popup').
        style.display = "block";
        document.querySelector(".notification-count").
        style.display ="none";
    }
   })
    
})
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
})

// const message = document.querySelectorAll(".message");
// const messageSearch = document.querySelector('#messages-search');

// const searchMessage = ()=>{
//     messageSearch.value 
//     console.log(val); 
// }

// messageSearch.addEventListener('keyup',searchMessage);

/*************************theme Customization************************************ */

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customization-theme");
const openModal =()=>{
    themeModal.style.display ="grid";
}
const closeModal = (e) => {

    if(e.target.classList.contains('customization-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener("click",closeModal);
theme.addEventListener("click",openModal);


/*************************Font Size************************* */

const fontSizes = document.querySelectorAll(".choose-size span");
var root  = document.querySelector(":root");

const removeSizeSelector = ()=>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size=>{
 
    size.addEventListener("click",()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains("font-size-1")){
            fontSize="10px";
            root.style.setProperty("----sticky-top-left","5.4rem");
            root.style.setProperty("----sticky-top-right","5.4rem");
        }
        else if(size.classList.contains("font-size-2")){
            fontSize ="13px";
            root.style.setProperty("----sticky-top-left","5.4rem");
            root.style.setProperty("----sticky-top-right","-7rem");

        }
        else if(size.classList.contains("font-size-3")){
            fontSize ="16px";
            root.style.setProperty("----sticky-top-left","-2rem");
            root.style.setProperty("----sticky-top-right","-17rem");

        }
        else if(size.classList.contains("font-size-4")){
            fontSize ="19px";
            root.style.setProperty("----sticky-top-left","-5rem");
            root.style.setProperty("----sticky-top-right","-25rem");

        }
        else if(size.classList.contains("font-size-5")){
            fontSize ="22px";
            root.style.setProperty("----sticky-top-left","-12rem");
            root.style.setProperty("----sticky-top-right","-35rem");

        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// *******************************Colors****************************************/

const colorpallete = document.querySelectorAll(".choose-color span")

colorpallete.forEach(color=>{
    let  primaryHue;
    color.addEventListener("click",()=>{
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }
        else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }
        else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }
        else if(color.classList.contains("color-4")){
            primaryHue = 152;
        }
        else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
          
        root.style.setProperty("--primary-hue",primaryHue);
        
    })
})


// ****************************Background*************************************/

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg =()=>{
    root.style.setProperty("--light-color-lightness",lightColorLightness)
    root.style.setProperty("--white-color-lightness",whiteColorLightness)
    root.style.setProperty("--dark-color-lightness",darkColorLightness)
}
Bg1.addEventListener("click",()=>{
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";
    Bg1.classList.add("active");

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg2.addEventListener("click",()=>{
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";
     
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})
Bg3.addEventListener("click",()=>{
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";
     
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})









