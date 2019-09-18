const form_container = document.querySelector('#form_container');
const preview_section = document.querySelector("#preview_section");
// const titleSection = document.querySelector('#formTitle');
const name_btn = document.querySelector("#name_btn");
const email_btn = document.querySelector("#email_btn");
const address_btn = document.querySelector("#address_btn");
const phone_btn = document.querySelector("#phone_btn");
const website_btn = document.querySelector("#website_btn");
const paragraph_btn = document.querySelector("#paragraph_btn");
const section_btn = document.querySelector("#section_btn");
const date_btn = document.querySelector("#date_btn");
const form = document.createElement('form');
const title_btn = document.querySelector('#title_btn');
const form_placeholder = document.querySelector('#formPlaceholder');
// Form Elements

name_btn.addEventListener('click', nameInput);
email_btn.addEventListener('click', emailInput);
address_btn.addEventListener('click', address);
phone_btn.addEventListener('click', phoneNumber);
website_btn.addEventListener('click', website);
paragraph_btn.addEventListener('click', createTextArea);
section_btn.addEventListener('click', CreateSectionTitle);
date_btn.addEventListener('click', dateInput);
title_btn.addEventListener('click', createFormTitle);


// HTML Form Tag
function createForm(){
    form.setAttribute('name', 'myForm');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', " ");
    preview_section.appendChild(form);
    
}
createForm();

// Create Name Element
function nameInput(){

    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');
    // const span = document.createElement('span');
    // span.setAttribute('class', 'input-group-addon');
    // span.setAttribute('id', 'delete_section');
    // span.innerText = "delete";

    const label = document.createElement('label');
    label.setAttribute('for', 'nameInput');
    label.innerText="Name";

    const input = document.createElement('input');
    input.setAttribute('type', 'name');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'nameInput');

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    formGroup.setAttribute('id', 'nameElement')

    form.appendChild(formGroup);
    formGroup.appendChild(label);
    formGroup.appendChild(div);
    // div.appendChild(span);
    div.appendChild(input);

    // span.addEventListener('click', ()=>{
    //     const nameElement = document.querySelector('#nameElement');
    //     form.removeChild(nameElement);

    // });

    form_placeholder.style.display = "none";
}

// Create Email Element
function emailInput(){
    const label = document.createElement('label');
    label.setAttribute('for', 'email');
    label.innerText="Email Address";

    const input = document.createElement('input');
    input.setAttribute('type', 'email');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'email');

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    formGroup.setAttribute('id', 'emailElement')


    form.appendChild(formGroup);

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form_placeholder.style.display = "none";
}

// Create Address Element
function address(){
    const label = document.createElement('label');
    label.setAttribute('for', 'adress');
    label.innerText="Address";

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'address');

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    formGroup.setAttribute('id', 'addressElement')
    form.appendChild(formGroup);

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form_placeholder.style.display = "none";
}

// Create Phone Number Element
function phoneNumber(){
    const label = document.createElement('label');
    label.setAttribute('for', 'phone_number');
    label.innerText="Phone Number";

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'phone_number');

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    formGroup.setAttribute('id', 'phoneElement')
    form.appendChild(formGroup);

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form_placeholder.style.display = "none";
}

// Create Web address Element
function website(){
    const label = document.createElement('label');
    label.setAttribute('for', 'website');
    label.innerText="Website";

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'website');

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    formGroup.setAttribute('id', 'websiteElement')
    form.appendChild(formGroup);

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form_placeholder.style.display = "none";
}

// Create Text Area Element
function createTextArea(){
    const label = document.createElement('label');
    label.setAttribute('for', 'subject');
    label.innerText="Subject";

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'subject_input');

    const textArea = document.createElement('textarea');
    textArea.setAttribute('type', 'text');
    textArea.setAttribute('class', 'form-control');
    textArea.setAttribute('id', 'website');
    textArea.setAttribute('rows', "5");

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    formGroup.setAttribute('id', 'textAreaElement')
    form.appendChild(formGroup);
    
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    formGroup.appendChild(textArea);

    form_placeholder.style.display = "none";
}

// Create Section Title Element
function CreateSectionTitle(){
    const sectionTitle = document.createElement('label');
    sectionTitle.setAttribute('for', 'section_Title');
    sectionTitle.setAttribute('class', 'section_title');
    sectionTitle.setAttribute('contenteditable', 'true');
    sectionTitle.innerText="Untitled";

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    formGroup.setAttribute('id', 'sectionTitleElement')
    form.appendChild(formGroup);

    formGroup.appendChild(sectionTitle);

    form_placeholder.style.display = "none";
}

// Create Date Element
function dateInput(){
    const label = document.createElement('label');
    label.setAttribute('for', 'date');
    label.innerText="Date";

    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'dateInput');
    input.setAttribute('value', '2017-06-01')

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    formGroup.setAttribute('id', 'dateElement')
    form.appendChild(formGroup);

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form_placeholder.style.display = "none";
}


function createFormTitle(){
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row form_title');
    rowDiv.setAttribute('id', 'formTitleMain');
    const colMdDiv = document.createElement('div');
    colMdDiv.setAttribute('class', 'col-md-12');
    colMdDiv.setAttribute('id', 'formTitle');

    const h1 = document.createElement('h1');
    h1.setAttribute('contenteditable', 'true');
    h1.innerText="Form Title";
    colMdDiv.appendChild(h1);
    rowDiv.appendChild(colMdDiv);
    preview_section.insertBefore(rowDiv, form);

    rowDiv.style.background = "#f1f2f6";
    form_placeholder.style.display = "none";

    
}

function launchModal(){
    const modalMainDiv = document.createElement('div');
    modalMainDiv.setAttribute('class', 'modal');
    modalMainDiv.setAttribute('id', 'mainModal');

    const modalContentDiv = document.createElement('div');
    modalContentDiv.setAttribute('class', 'modal-content');

    const span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.innerHTML = '&times;';

    modalContentDiv.appendChild(span);
    modalContentDiv.appendChild(preview_section);
    modalMainDiv.appendChild(modalContentDiv);
    form_container.appendChild(modalMainDiv);

    span.addEventListener('click', () =>{
        modalMainDiv.style.display = "none";
        form_container.appendChild(preview_section);
    });

    window.onclick = function(event) {
        if (event.target == modalMainDiv) {
          modalMainDiv.style.display = "none";
          form_container.appendChild(preview_section);
        };
      }
};

const formPreviewBtn = document.querySelector('#formPreview');
formPreviewBtn.addEventListener('click', launchModal);


// function clearForm(){
//     const formGroupAll = document.getElementsByClassName('form-group');
//     const formTitleAll = document.getElementById('#formTitleMain');
//     form.removeChild(formGroupAll);
//     preview_section.removeChild(formTitleAll);

// }

// const clearFormBtn = document.querySelector('#clearForm');
// clearFormBtn.addEventListener('click', clearForm);