'use strict'

// FastClick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body)
  }, false)
}
