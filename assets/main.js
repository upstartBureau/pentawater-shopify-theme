
(function () {
  'use strict'
  // best place to keep finished script (closure)
})()

console.log('js works')

var $ = jQuery
var Hamburger = document.querySelector('.hamburger-menu')
var Bar = document.querySelector('.bar')
var DropIn = document.querySelector('.dropin')
var LoadMoreLink = document.getElementById('load-stories')

$('.carousel').slick({
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false
})

$('.about-text').readmore({
  speed: 500,
  collapsedHeight: 43,
  moreLink: '<a href="#">more</a>',
  lessLink: '<a href="#">less</a>'
})

Hamburger.addEventListener('click', function () {
  console.log('click')
  Bar.classList.toggle('animate')
  DropIn.classList.toggle('animate-menu')
})

if (LoadMoreLink) {
  LoadMoreLink.addEventListener('click', function () {
    console.log('click')
  })
}
