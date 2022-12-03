document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector(`form`)
  form.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    form.reset()
  })
});
function buildToDO (todo){
   let p= document.createElement(`p`)
   let btn=document.createElement(`button`)
   btn.addEventListener(`click`,handleDelete)
   btn.textContent=`x`
   p.textContent=`${todo}`
   p.appendChild(btn)
   console.log(p)
   document.querySelector(`#todo_container`).appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}