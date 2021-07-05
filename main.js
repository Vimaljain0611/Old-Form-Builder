class Main{
    
    constructor(formId,storageId)
    {
        this.formId = formId;
        this.storageId = storageId;
        
        //classes
        this.form = new Form (this.formId);
        this.storage = new Storage(this.storageId);

        //creating Table
        this.table = this.formView.appendChild(this.form.createTable());

        //appending Thead
        this.table.appendChild(this.form.createThead());

        // appending Tbody
        this.tbody = this.table.appendChild(this.form.createTbody());

    }
    //getting div id
    formView = document.getElementById('createForm');
   
    appendInTbody(Label,Type){
        this.tbody.appendChild(this.form.createTr(Label,Type));
    }

}

const create = new Main("dynamicForm","formData");

create.appendInTbody('id1','text');
create.appendInTbody('id2','color');