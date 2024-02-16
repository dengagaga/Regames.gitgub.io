const headerNavLink = document.querySelector('.header-nav-link-ss')
const header = document.querySelector('.header')
const listCompany = document.querySelector('.list-company')
const headerBurgerBtn = document.querySelector('.header_burger-btn')
const headerNavDropdown = document.querySelector('.header-nav-dropdown')
const headerNavDropdownMobil = document.querySelector('.header-nav-dropdown-mobil')
const additionallyAllItem = document.querySelectorAll('.additionally_all-item')
const additionallyAllItemMobil = document.querySelectorAll('.additionally_all-item-mobil')
const title2 = document.querySelector('.title-2')
headerNavLink.addEventListener('click', () => {
    headerNavDropdown.classList.toggle('none')
    headerNavLink.classList.toggle('header-nav-link-ss--active')
})
additionallyAllItem.forEach(item => {
    item.addEventListener('click', () => {
        additionallyAllItem.forEach(items => {
            items.classList.remove('additionally_all-item--active')
        })
        item.classList.toggle('additionally_all-item--active')
    })
})
additionallyAllItemMobil.forEach(item => {
    item.addEventListener('click', () => {
        additionallyAllItemMobil.forEach(items => {
            items.classList.remove('additionally_all-item-mobil--active')
        })
        item.classList.toggle('additionally_all-item-mobil--active')
    })
})
// const modal = document.querySelector('.modal')
// // const modalClose  = document.querySelector('.modal-close ')
// const slideClick = document.querySelectorAll('.slide-click')
// slideClick.forEach(slide => {
//     slide.addEventListener('click', () => {
//         modal.classList.add('open')
//         document.body.classList.add('body-scroll')
//     })
// })

// modalClose.addEventListener('click', () => {
//     modal.classList.remove('open')
//     document.body.classList.remove('body-scroll')
// })
// headerBurgerBtn.addEventListener('click', () => {
//     header.classList.toggle('open')
//   })
//   listCompany.addEventListener('click', () => {
//     listCompany.classList.toggle('list--active')
//     headerNavDropdownMobil.classList.toggle('none-ac')
//   })