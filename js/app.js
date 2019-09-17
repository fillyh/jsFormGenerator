const preview_section = document.querySelector("#preview_section");

const name_btn = document.querySelector("#name_btn");
const email_btn = document.querySelector("#email_btn");
const address_btn = document.querySelector("#address_btn");
const phone_btn = document.querySelector("#phone_btn");
const website_btn = document.querySelector("#website_btn");
const paragraph_btn = document.querySelector("#paragraph_btn");
const section_btn = document.querySelector("#section_btn");
const date_btn = document.querySelector("#date_btn");
const form = document.createElement('form');
// Form Elements


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
    div.setAttribute('class', 'input-group');
    const span = document.createElement('span');
    span.setAttribute('class', 'input-group-addon');
    span.setAttribute('id', 'delete_section');
    span.innerText = "delete";

 

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
    div.appendChild(span);
    div.appendChild(input);

    span.addEventListener('click', ()=>{
        const nameElement = document.querySelector('#nameElement');
        form.removeChild(nameElement);

    });
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
}

// Create Section Title Element
function CreateSectionTitle(){
    const sectionTitle = document.createElement('label');
    sectionTitle.setAttribute('for', 'section_Title');
    sectionTitle.setAttribute('class', 'text-center section_title');
    sectionTitle.innerText="New Section";

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    formGroup.setAttribute('id', 'sectionTitleElement')
    form.appendChild(formGroup);

    formGroup.appendChild(sectionTitle);
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
}

name_btn.addEventListener('click', nameInput);
email_btn.addEventListener('click', emailInput);
address_btn.addEventListener('click', address);
phone_btn.addEventListener('click', phoneNumber);
website_btn.addEventListener('click', website);
paragraph_btn.addEventListener('click', createTextArea);
section_btn.addEventListener('click', CreateSectionTitle);
date_btn.addEventListener('click', dateInput);

function clearForm(){
const clearBtn= document.createElement('button');
clearBtn.setAttribute('type', 'button');
clearBtn.setAttribute('id', 'clearForm');
clearBtn.setAttribute('class', 'btn btn-default btn-danger');
clearBtn.innerText="Clear Form";
preview_section.appendChild(clearBtn);
}

console.log(preview_section);

