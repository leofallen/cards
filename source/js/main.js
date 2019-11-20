const menuList = document.querySelector('.menu');
const multuplayer = 'menu_list-item menu_list-item--mutiplayer';
const onePlayer = 'menu_list-item menu_list-item--oneplayer';
const rules = 'menu_list-item menu_list-item--rules';
const menuItemList = menuList.querySelectorAll('.menu_list-item');


menuItemList.forEach(function(it) {
  it.addEventListener('click', function() {

    if (it.className === multuplayer) {
      console.log(it.className);
    } else if (it.clasName = onePlayer) {
      console.log(it.className);
    } else if (it.className === rules) {
      console.log(it.className);
    }

  })
})
