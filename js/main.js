const   navMenu = document.getElementById("nav-menu")  /*Variable constante, nombre de la constante,objeto global que representa el documento HTML cargado en la ventana actual del navegador, usca y devuelve una referencia al primer elemento que tenga el ID especificado*/ 
const   navToggle = document.getElementById("nav-toggle")
const   navClose = document.getElementById("nav-close")

/*Menu Show*/
if(navToggle){
    navToggle.addEventListener('click', () =>{ /*"addEventListener", es  un método que escucha un evento específico en el elemento, La función de flecha () => { ... } define la acción que se llevará a cabo cuando se produzca el evento de clic en navToggle. */
        navMenu.classList.add("show-menu")
    })
}
/*----------------------------------*/

/*Menu Hidden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}
/*----------------------------------*/

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll(".nav-link") /*"querySelectorAll",  es un método del objeto document que busca todos los elementos en el documento que coinciden con el selector CSS especificado*/

const linkAction = () =>{ /* puede ser utilizada para manejar acciones específicas cuando se hace clic en los enlaces de navegación u otros elementos dentro de tu página web.*/
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
/*----------------------------------*/

/*SWIPER*/
let swiperProjects = new Swiper(".projects-container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
       
      },
  });
/*----------------------------------*/

/*Emal JS*/
const   contactForm = document.getElementById("contact-form"),
        contactName = document.getElementById("contact-name"),
        contactEmail = document.getElementById("contact-mail"),
        contactProject = document.getElementById("contact-project"),
        contactMessage = document.getElementById("contact-message")

const   sendEmail = (e) =>{
        e.preventDefault()

        //Comprueba si se rellenaron el formulario
        if(contactName.value === '' || contactEmail.value === '' || contactProject.value ===''){
            //Añade y quita el color
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')
            //Muestra el mensaje
            contactMessage.textContent = "Rellena todos los campos"
        }else{
            //serviceI - templateID - #form -publicKey
            emailjs.sendForm('service_ez2e4rs','template_olzly0g','contact-form', 'LZCmwLR5TgPxc6nKR')
                .then(()=>{
                    //Enseña en mensaje y añade el color
                    contactMessage.classList.add("color-blue")
                    contactMessage.textContent = 'Mensaje enviado'

                    //Quita el mensaje
                    setTimeout(() =>{
                        contactMessage.textContent=''
                    }, 5000)
                },(error) =>{
                    alert("OOPS, SALIO ALGO MAL", error)
                })
            //Limpiar el form
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
        }
}
contactForm.addEventListener("submit", sendEmail)
/*----------------------------------*/

/*Scroll sections*/
const   sections = document.querySelectorAll('section[id]')
const   scrollActive = () =>{
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId +']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add("active-link")
            }else{
                sectionsClass.classList.remove("active-link")
            }
        })
}
window.addEventListener('scroll', scrollActive)
/*----------------------------------*/

/*Scroll up*/
const   scrollUp = () =>{
    const   scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*----------------------------------*/

/*Change background header*/
const   scrollHeader = () =>{
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("bg-header")
                        :header.classList.remove("bg-header")
}
window.addEventListener("scroll", scrollHeader)
/*----------------------------------*/