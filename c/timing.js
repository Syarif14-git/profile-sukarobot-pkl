// setTimeout

const tombol = document.querySelector('button');

const tampilPesan = setTimeout(function(){
    console.log('hello world');
}, 3000);

tombol.addEventListener('click',function(){
    clearTimeout(tampilPesan);
})
