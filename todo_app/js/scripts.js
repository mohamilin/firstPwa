// buat function sebagai listener yang akan menjalankan 
// kode di dalamnya jika DOM sudah di-load
document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("form")
    submitForm.addEventListener("submit", function(e) {
        e.preventDefault();
        addTodo()
    })
    console.log('submit', submitForm)
})