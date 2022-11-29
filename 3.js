var tex_1 = document.querySelector('.tex-1')
var btn = document.querySelector('.btn')
var tex_2 = document.querySelector('.tex-2')
var btn_1 = document.querySelector('.btn-1')

btn.onclick = function(e) {
    if (e.target.classList.contains('a')) {
        tex_1.classList.toggle('tex-1')

    }
}
btn_1.onclick = function(e) {
    if (e.target.classList.contains('a-1')) {
        tex_2.classList.toggle('tex-2')

    }
}