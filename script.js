const burger = document.querySelector(".burger")
const nav_list = document.querySelector(".nav-list")
const overlay = document.querySelector(".overlay")
burger.addEventListener("click", burgerHandler)

const menu = document.querySelectorAll(".nav-list .nav-list__item")

for (let i of menu) {
  i.addEventListener("click", closeMenu)
}
overlay.addEventListener("click", closeMenu)

function burgerHandler(e) {
  e.preventDefault()
  burger.classList.toggle("burger__lines")
  burger.classList.toggle("burger__cross")
  overlay.classList.toggle("show__overlay")
  nav_list.classList.toggle("nav-list__active")
}

function closeMenu(e) {
  if (window.matchMedia("(max-width: 640px)").matches) {
    burger.classList.toggle("burger__lines")
    burger.classList.toggle("burger__cross")
    overlay.classList.toggle("show__overlay")
    nav_list.classList.toggle("nav-list__active")
  } else {
    // Viewport is greater than 700 pixels wide
  }
}

const service_content__button = document.querySelectorAll(
  ".service-content__button"
)
for (let i of service_content__button) {
  i.addEventListener("click", toggleButtonServices)
}

let btn_set = new Set([])
let pref = "service_"
let total_set = new Set([pref + "gardens", pref + "lawn", pref + "planting"])

function toggleButtonServices(e) {
  let cur_elem = e.target
  let data_class = "service_" + cur_elem.dataset.class
  let service = document.querySelector(".service")
  let button_class = "service-content__button_enabled"

  if (btn_set.has(data_class)) {
    btn_set.delete(data_class)
    cur_elem.classList.remove(button_class)
    service.classList.remove(...Array.from(total_set))
    if (!(btn_set.size === 0)) {
      service.classList.add(
        ...Array.from(total_set).filter((x) => !btn_set.has(x))
      )
    }
  } else if (btn_set.size < 2) {
    btn_set.add(data_class)
    cur_elem.classList.add(button_class)
    service.classList.remove(...Array.from(total_set))
    service.classList.add(
      ...Array.from(total_set).filter((x) => !btn_set.has(x))
    )
  }
}

const price_button = document.querySelectorAll(".prices-top")
for (let i of price_button) {
  i.addEventListener("click", togglePrice)
}

function togglePrice(e) {
  let parent = e.target.closest(".prices-item")

  const price_button = document.querySelectorAll(".prices-item")

  let class_name = "prices-item_opened"

  for (let i of price_button) {
    if (i !== parent) {
      i.classList.remove(class_name)
    }
  }
  parent.classList.toggle(class_name)
}

const city_button = document.querySelectorAll(".city")
for (let i of city_button) {
  i.addEventListener("click", toggleCity)
}

document.addEventListener("click", function (e) {
  let city_wrapper = document.querySelector(".city-wrapper_opened")

  if (city_wrapper) {
    if (city_wrapper.contains(e.target)) {
    } else {
      city_wrapper.classList.remove("city-wrapper_opened")
    }
  }
})

function toggleCity(e) {
  let parent = e.target.closest(".city-wrapper")

  let class_name = "city-wrapper_opened"

  parent.classList.toggle(class_name)
}

function closeCity() {
  let class_name = "city-wrapper_opened"
  let opened = document.querySelectorAll("." + class_name)
  for (let i of opened) {
    i.classList.remove(class_name)
  }
}

const city_item = document.querySelectorAll(".city-dropdown__item")
for (let i of city_item) {
  i.addEventListener("click", showCard)
}

const city_one_button = document.querySelector(".city")
const city_text = city_one_button.querySelector(".city__text")
let city_parent = document.querySelector(".city-wrapper")

function showCard(e) {
  let cur_elem = e.target
  let data_class = "city-card__" + cur_elem.dataset.class
  let card_elem = document.querySelector("." + data_class)

  let class_name = "city-card_visible"

  for (let i of document.querySelectorAll("." + class_name)) {
    i.classList.remove(class_name)
  }
  card_elem.classList.add(class_name)
  closeCity()
  city_text.classList.add("city__text_named")
  city_text.textContent = cur_elem.textContent

  city_parent.classList.add("city_named")

}