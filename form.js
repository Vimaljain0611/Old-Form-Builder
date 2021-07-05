var dropDownOptions = [  
{innerHTML : 'Text' , value : 'text'},
{innerHTML : 'Number' , value : 'number'},
{innerHTML : 'Date' , value : 'date'},
{innerHTML : 'Range' , value : 'range'},
{innerHTML : 'Email' , value : 'email'},
{innerHTML : 'Color' , value : 'color'}
];
class Form{
    constructor(formId){
        this.formId = formId;
    }

    //create Table
    createTable()
    {
        let table = document.createElement('table');
            table.className = "table table-responsive-sm";
            table.id= this.formId;
           
        return table;            
    }

    //create thead
    createThead()
    {
            let thead= document.createElement('thead');
            let row = document.createElement('tr');
                row.name ="trRow";
                row.className = "form-row";
                
                let labelTh = document.createElement('th');
                let label = this.createEle('input','text');
                    label.className="dyn-label"
                    label.placeholder = "Enter Label / Id";
                labelTh.appendChild(label);    
                row.appendChild(labelTh);
                
                let dropDownTh = document.createElement('th');
                let dropDown = document.createElement('select');
                    dropDown.className="input-id";
                    dropDownOptions.forEach((opt, index) =>{
                        let optNode = document.createElement("option");
                            optNode.value = opt.value;
                            optNode.innerHTML = opt.innerHTML;
                        return dropDown.appendChild(optNode);
                    });
                dropDownTh.appendChild(dropDown);
                row.appendChild(dropDownTh);

                let addBtnTd = document.createElement('td');   
                let addFunction= function()  { console.log(row.childNodes ); }   
                addBtnTd.appendChild(this.createButton("Add",addFunction)); 
                row.appendChild(addBtnTd);
            
                let refreshBtnTd = document.createElement('td'); 
                let refreshFunction= function() {  console.log(this);}   
                refreshBtnTd.appendChild(this.createButton("Refresh",refreshFunction)); 
                row.appendChild(refreshBtnTd);

            thead.appendChild(row);      
            return thead;       
    }
    // create tbody
    createTbody()
    {
        let tbody = document.createElement('tbody');
        return tbody;            
    }

    //creating Tr
    createTr(label,type)
    {
        let row = document.createElement('tr'); 
            
            let labelTd = document.createElement('td');
                labelTd.appendChild(this.createEle('label','',label));
            row.appendChild(labelTd);

            let inputTd = document.createElement('td');    
                inputTd.appendChild(this.createEle('input',type));
            row.appendChild(inputTd);

            let saveBtnTd = document.createElement('td');   
                let saveFunction= function() { console.log(this.label);}    
                saveBtnTd.appendChild(this.createButton("Save",saveFunction)); 
            row.appendChild(saveBtnTd);
            
            let removeBtnTd = document.createElement('td'); 
                let removeFunction= function() { console.log(this.label);}   
            removeBtnTd.appendChild(this.createButton("Remove",removeFunction)); 
            row.appendChild(removeBtnTd);

        return row; 
    }

    //create elements
    createEle(Elem,type,text)
    {
        let input = document.createElement(Elem);
            input.type = type;
            input.textContent = text;
        return input;
    }

    //create buttons
    createButton(label,btnFunction)
    {
        let btn = document.createElement('button');
            btn.textContent =label;
            btn.onclick= btnFunction; 
        return btn;
    }
}