console.log('hi this is me!');

const navigation = document.querySelector('.sidebar');

document.querySelector('#menu-btn').onclick = function(e){
    console.log(e);
    navigation.classList.toggle('active');
}

const menu = document.querySelector('#menu-btn');
document.addEventListener('click', function(e){
    if (!menu.contains(e.target) && !navigation.contains(e.target)) {
        navigation.classList.remove('active');
        console.log(this.e);
    }
})