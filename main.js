class Main {
  formId;
  storageId;
  formClass;
  storageClass;
  formRow;
  childRow;
  label;
  constructor(formId, storageId) {
    this.createForm(formId, storageId);
  }
  createForm(formId,storageId) {
    this.formId = formId;
    this.storageId=storageId;
    this.formView = document.getElementById("formDiv");
    this.formClass = new Form(this.formId);
    this.storageClass = new Storage(this.storageId);

    //creating Table
    this.formRow = this.formView.appendChild(this.formClass.getFormRow(this));
  }
  
  addRow(form)
  {
    this.appendRow(form.elements[0].value , form.elements[1].value , this);
  }
  
  appendRow(Label, Type) {
    this.formRow.appendChild(this.formClass.createRow(Label, Type));
  }

  insertData()
  {
    
  }
}

const mainClass = new Main("dynamicForm", "formData");
