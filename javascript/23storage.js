localstorage
// save with respect to browser
// need to remove manully
localStorage.getItem('keycode')
'1234'
localStorage.removeItem('keycode')
undefined
localStorage.getItem('keycode')
null
localStorage.setItem('keycode','1234')


sessionStorage
//save wrt to website
// deleted as soon as tab close
sessionStorage.getItem('test')
null
sessionStorage.setItem('test','123')

sessionStorage.removeItem('test')