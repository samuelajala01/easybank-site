const toggle_open = document.getElementById("toggle_on")
const toggle_span = document.getElementById("toggle_span")
const mobile_show = document.getElementsByClassName("mobile_show_list")[0]
const clickme = document.getElementById("mobile_link")
const section = document.querySelector(".section")

const showMobileNav = () => {
  section.style.opacity = "0.3"
  section.style.backgroundColor = "black"
  mobile_show.style.display = "block"
  toggle_span.innerHTML = `<a href="#" id="toggle_off">X</a>`
  const toggle_close = document.getElementById("toggle_off")
  toggle_close.addEventListener("click", hideMobileNav)
  console.log("Mobile nav showing")
}

const hideMobileNav = () => {
  section.style.opacity = "1"
  section.style.backgroundColor = "white"
  mobile_show.style.display = "none"
  toggle_span.innerHTML = `<a href="#" id="toggle_on">E</a>`
  const toggle_open = document.getElementById("toggle_on")
  toggle_open.addEventListener("click", showMobileNav)
  console.log("Mobile nav hidden")
}

// clickme.onclick = () => {
//   hideMobileNav()
//   console.log("Mobile")
// }

clickme.addEventListener("click", hideMobileNav)

// clickme.forEach((navList) => {
//   navList.onclick = () => {
//     setTimeout(() => {
//       hideMobileNav()
//     }, 0000)
//   }
// })

hideMobileNav()
