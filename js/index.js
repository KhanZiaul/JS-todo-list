let i = 0;

document.getElementById('add').addEventListener('click',function(){

    i++;

    const parent = document.getElementById('t-body');

    const text = document.getElementById('textarea').value;

    const newTr = document.createElement('tr');
    
    newTr.innerHTML= `
    <tr>
     <td>${i}</td>
     <td>${text}</td>
     <td class="flex gap-5">
     <button class="bg-sky-600 text-white block px-7 py-2 rounded-xl hover:bg-sky-900 rem">Delet</button>
     <button class="bg-sky-600 text-white block px-7 py-2 rounded-xl hover:bg-sky-900 done">Done</button>
     </td>
     <td class='hidden'> <i class="fa-solid fa-check-double"> </i> </td>
  </tr> 
    `;

    parent.appendChild(newTr);
    
    document.getElementById('textarea').value = "";

    const deleteBtn = document.querySelectorAll('.rem');

    for(const value of deleteBtn){

        value.addEventListener('click',function(e){

            e.target.parentNode.parentNode.remove();
        });
    }
    
    const done = document.querySelectorAll('.done');

    for(const value of done){

        value.addEventListener('click',function(e){

        e.target.parentNode.parentNode.children[3].classList.remove('hidden')
            
        });
    }
});