const data_text = document.getElementById('data');
const add = document.getElementById('add');
const item = document.querySelector('.item');
// add.addEventListener('click', () => {
//     alert(data_text.value);
// })
function add_item(){
    if(data_text.value){
        let contener = document.createElement('div');
        contener.classList.add('contener');
        item.appendChild(contener);
        let active = document.createElement('input');
        active.value = data_text.value;
        active.classList.add('do');
        active.setAttribute('type', 'text');
        active.setAttribute('disabled', 'True');
        contener.appendChild(active);
        let edit = document.createElement('button');
        edit.addEventListener('click', ()=> edit_element(active));
        edit.innerHTML = 'EDIT';
        edit.classList.add('edit');
        let remove = document.createElement('button');
        remove.addEventListener('click', () => removeelement(contener));
        remove.innerHTML = 'REMOVE';
        remove.classList.add('remove');
        contener.appendChild(edit);
        contener.appendChild(remove);
        data_text.value = '';
    }
}
function edit_element(active){
    if(active.disabled){
        active.disabled = !active.disabled;
    }
}
function removeelement(contener){
    contener.parentNode.removeChild(contener);
    // contener = document.getElementById(id_element);
    // item.removeChild(contener);
    // number_id--; 
}
// if(number_id>0){
    
//     for(let i=1; i<=number_id; i++){
//         contener = document.getElementById();
//         input = document.querySelector('#'+i+' do');
//         edit = document.querySelector('#'+i+' edit');
//         remove = document.querySelector('#'+i+' remove');
//         remove.addEventListener('click', () => {
//             item.removeChild(contener);
//         })
//     }
// }

add.addEventListener('click', add_item)