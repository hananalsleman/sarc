export const initState = {

    users : [
        {id:'1',username:'hanan',password:'123',section:1},
        {id:'2',username:'salem',password:'111',section:2}
    ],

    isLogin : false,
    // Clinics
    patients :[
        {id:20,firstName:'علي',lastName:'سليمان',fatherName:'فيصل',motherName:'سهام',age:'65',gender:'0',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:123},
        {id:19,firstName:'امل',lastName:'سليمان',fatherName:'فيصل',motherName:'ندى',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:18,firstName:'وليام',lastName:'نادر',fatherName:'عماد',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:17,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:16,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:15,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:14,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:13,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:12,firstName:'مريم',lastName:'فادي',fatherName:'علي',motherName:'ديانا',age:'4',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:11,firstName:'نور',lastName:'علي',fatherName:'احمد',motherName:'مريانا',age:'10',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:10,firstName:'محمد',lastName:'سليم',fatherName:'علي',motherName:'نبيلة',age:'3',gender:'0',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'0',phone:'5482455',nationalNumber:''},
        {id:9,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:8,firstName:'مريم',lastName:'فادي',fatherName:'علي',motherName:'ديانا',age:'4',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:7,firstName:'نور',lastName:'علي',fatherName:'احمد',motherName:'مريانا',age:'20',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:6,firstName:'محمد',lastName:'سليم',fatherName:'علي',motherName:'نبيلة',age:'15',gender:'0',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'0',phone:'5482455',nationalNumber:''},
        {id:5,firstName:'سوزان',lastName:'خالد',fatherName:'ايهم',motherName:'نيرمين',age:'65',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'2',phone:'5482455',nationalNumber:''},
        {id:4,firstName:'مريم',lastName:'فادي',fatherName:'علي',motherName:'ديانا',age:'4',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:3,firstName:'نور',lastName:'علي',fatherName:'احمد',motherName:'مريانا',age:'20',gender:'1',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'1',phone:'5482455',nationalNumber:''},
        {id:2,firstName:'محمد',lastName:'سليم',fatherName:'علي',motherName:'نبيلة',age:'15',gender:'0',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'0',phone:'5482455',nationalNumber:''},
        {id:1,firstName:'محمد',lastName:'علي',fatherName:'احمد',motherName:'نهى',age:'45',gender:'0',birthdate:'2013-01-08',birthplace:'انشاءات',registerdate:'2013-01-08',nationality:'0',phone:'5482455',nationalNumber:''},
      ],
    gender : ["ذكر" , "أنثى"],
    nationality : ["سوري" , "فلسطيني","لبناني"],


    examination : [
        
        {examination_id:26,visit_id:19,doctor_id:5,prescrition_id:117,note:''},
        {examination_id:25,visit_id:18,doctor_id:5,prescrition_id:117,note:''},
        {examination_id:24,visit_id:19,doctor_id:5,prescrition_id:117,note:''},
        {examination_id:23,visit_id:11,doctor_id:4,prescrition_id:117,note:''},
        {examination_id:22,visit_id:17,doctor_id:6,prescrition_id:117,note:''},
        {examination_id:21,visit_id:16,doctor_id:3,prescrition_id:117,note:''},
        {examination_id:20,visit_id:15,doctor_id:7,prescrition_id:117,note:''},
        {examination_id:19,visit_id:3,doctor_id:8,prescrition_id:117,note:''},
        {examination_id:18,visit_id:14,doctor_id:2,prescrition_id:117,note:''},
        {examination_id:17,visit_id:15,doctor_id:1,prescrition_id:117,note:''},
        {examination_id:16,visit_id:12,doctor_id:1,prescrition_id:117,note:''},
        {examination_id:15,visit_id:14,doctor_id:3,prescrition_id:116,note:''},
        {examination_id:14,visit_id:13,doctor_id:2,prescrition_id:115,note:''},
        {examination_id:13,visit_id:9,doctor_id:2,prescrition_id:110,note:''},
        {examination_id:12,visit_id:8,doctor_id:2,prescrition_id:111,note:''},
        {examination_id:11,visit_id:6,doctor_id:2,prescrition_id:112,note:''},
        {examination_id:10,visit_id:5,doctor_id:2,prescrition_id:118,note:''},
        {examination_id:9,visit_id:7,doctor_id:2,prescrition_id:555,note:''},
        {examination_id:8,visit_id:7,doctor_id:2,prescrition_id:5878,note:''},
        {examination_id:7,visit_id:4,doctor_id:2,prescrition_id:12,note:''},
        {examination_id:6,visit_id:12,doctor_id:2,prescrition_id:6545,note:'df'},
        {examination_id:5,visit_id:1,doctor_id:2,prescrition_id:5687,note:'df'},
        {examination_id:4,visit_id:10,doctor_id:2,prescrition_id:65,note:'zxc'},
        {examination_id:3,visit_id:3,doctor_id:3,prescrition_id:5,note:'zx'},
        {examination_id:2,visit_id:2,doctor_id:1,prescrition_id:10,note:'zxc'},
        {examination_id:1,visit_id:4,doctor_id:2,prescrition_id:57,note:''},
    ],
    visits : [
        {visit_id : 1,person_id:1,visit_date:'2013-01-08'},
        {visit_id : 2,person_id:2,visit_date:'2015-01-08'},
        {visit_id : 3,person_id:4,visit_date:'2017-01-08'},
        {visit_id : 4,person_id:11,visit_date:'2017-01-08'},
        {visit_id : 5,person_id:3,visit_date:'2015-01-08'},
        {visit_id : 6,person_id:12,visit_date:'2017-01-08'},
        {visit_id : 7,person_id:13,visit_date:'2017-01-08'},
        {visit_id : 8,person_id:10,visit_date:'2015-01-08'},
        {visit_id : 9,person_id:11,visit_date:'2017-01-08'},
        {visit_id : 10,person_id:5,visit_date:'2017-01-08'},
        {visit_id : 11,person_id:6,visit_date:'2015-01-08'},
        {visit_id : 12,person_id:7,visit_date:'2017-01-08'},
        {visit_id : 13,person_id:8,visit_date:'2017-01-08'},        
        {visit_id : 14,person_id:9,visit_date:'2017-01-08'},        
        {visit_id : 15,person_id:3,visit_date:'2017-01-08'},        
        {visit_id : 16,person_id:4,visit_date:'2019-01-08'},        
        {visit_id : 17,person_id:7,visit_date:'2016-01-08'},        
        {visit_id : 18,person_id:14,visit_date:'2020-01-08'},        
        {visit_id : 19,person_id:15,visit_date:'2020-01-08'},        
        {visit_id : 20,person_id:20,visit_date:'2020-01-08'},
    ],
    diagnose : [
        {examination_id:1,disease_id:1,notes:'adhgjsdfhg'},
        {examination_id:2,disease_id:2,notes:'ghdfh'},
        {examination_id:3,disease_id:3,notes:''},
        {examination_id:4,disease_id:1,notes:'adhgjsdfhg'}
    ],
    doctors : [
        {doctor_id:1,name:'نور العثمان',clinic_id:1},
        {doctor_id:2,name:'مصطفى الهادي',clinic_id:2},
        {doctor_id:3,name:'مصطفى سعيد',clinic_id:3},
        {doctor_id:4,name:'سمر نوار',clinic_id:4},
        {doctor_id:5,name:'راما ديب',clinic_id:5},
        {doctor_id:6,name:'لؤي علي',clinic_id:6},
        {doctor_id:7,name:'ابراهيم محمد',clinic_id:6},
        {doctor_id:8,name:'عزيز مدين',clinic_id:7},
        {doctor_id:9,name:'نهى الاحمد',clinic_id:8},
    ],
    clinics : [
        {clinic_id:1,clinic_name:'داخلية'},
        {clinic_id:2,clinic_name:'اطفال'},
        {clinic_id:3,clinic_name:'عينية'},
        {clinic_id:4,clinic_name:'نسائية'},
        {clinic_id:5,clinic_name:'اسنان'},
        {clinic_id:6,clinic_name:'قلبية'},
        {clinic_id:7,clinic_name:'جلدية'},
        {clinic_id:8,clinic_name:'عظمية'},
    ],
    diseases : [
        {disease_id:1,disease_code:10,disease_name:"التهاب رئة"},
        {disease_id:2,disease_code:10,disease_name:"شقيقة"},
        {disease_id:3,disease_code:10,disease_name:"التهاب بلعوم"},
    ],
    //pharmacy

    medicine_form : ['سيرسير','حبة','سائل'] ,
    medicines : [
        {medicine_id:14,medicine_name:'cetamol',code:'333',medicine_calibre:'40',active_material:'cetamol',medicine_form:1},
        {medicine_id:13,medicine_name:'Lamivudine',code:'122',medicine_calibre:'50',active_material:'Lamivudine',medicine_form:1},
        {medicine_id:12,medicine_name:'Labetalol',code:'126',medicine_calibre:'20',active_material:'Labetalol',medicine_form:1},
        {medicine_id:11,medicine_name:'Efavirenz',code:'785',medicine_calibre:'40',active_material:'Efavirenz',medicine_form:2},
        {medicine_id:10,medicine_name:'Cefaclor',code:'147',medicine_calibre:'40',active_material:'Cefaclor',medicine_form:1},
        {medicine_id:9,medicine_name:'Alendronate',code:'963',medicine_calibre:'30',active_material:'Alendronate',medicine_form:1},
        {medicine_id:8,medicine_name:'Amifostine',code:'758',medicine_calibre:'250',active_material:'Amifostine',medicine_form:2},
        {medicine_id:7,medicine_name:'Doxycycline',code:'639',medicine_calibre:'20',active_material:'Doxycycline',medicine_form:1},
        {medicine_id:6,medicine_name:'Aspirin',code:'987',medicine_calibre:'20',active_material:'Aspirin',medicine_form:1},
        {medicine_id:5,medicine_name:'cetamol',code:'522',medicine_calibre:'30',active_material:'cetamol',medicine_form:1},
        {medicine_id:4,medicine_name:'panadol',code:'400',medicine_calibre:'40',active_material:'cetamol',medicine_form:1},
        {medicine_id:3,medicine_name:'gentamicine',code:'565',medicine_calibre:'40',active_material:'gentamicine',medicine_form:0},
        {medicine_id:2,medicine_name:'phentoein',code:'522',medicine_calibre:'20',active_material:'phentoein',medicine_form:1},
        {medicine_id:1,medicine_name:'haircare',code:'111',medicine_calibre:'500',active_material:'haircare',medicine_form:0},
    ],
    shipment : [
        {shipment_id:10,shipment_date:'2020-8-2',shipment_source_id:2},
        {shipment_id:9,shipment_date:'2020-7-6',shipment_source_id:2},
        {shipment_id:8,shipment_date:'2020-7-2',shipment_source_id:2},
        {shipment_id:7,shipment_date:'2020-5-2',shipment_source_id:2},
        {shipment_id:6,shipment_date:'2020-3-7',shipment_source_id:2},
        {shipment_id:5,shipment_date:'2020-2-10',shipment_source_id:2},
        {shipment_id:4,shipment_date:'2020-1-3',shipment_source_id:2},
        {shipment_id:3,shipment_date:'2019-11-2',shipment_source_id:2},
        {shipment_id:2,shipment_date:'2019-9-2',shipment_source_id:2},
        {shipment_id:1,shipment_date:'2019-2-2',shipment_source_id:2},
    ],
    pharmacy_stock : [
        {shipment_id:10,medicine_id:4,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:9,medicine_id:4,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:8,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:7,medicine_id:5,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:6,medicine_id:3,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:6,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:5,medicine_id:3,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:4,medicine_id:2,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:4,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:4,medicine_id:3,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:3,medicine_id:2,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:3,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:0},
        {shipment_id:2,medicine_id:2,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:0},
        {shipment_id:2,medicine_id:3,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:0},
        {shipment_id:2,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:1,medicine_id:3,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
        {shipment_id:1,medicine_id:1,production_date:'2020-01-08',expiration_date:'2020-01-08',quantity:12,current_quantity:5},
    ],
    medicine_out : [
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:1,shipment_id:1,quantity:15,movement_id:1},
        {medicine_id:2,shipment_id:1,quantity:15,movement_id:2},
        {medicine_id:3,shipment_id:1,quantity:15,movement_id:2},
        {medicine_id:1,shipment_id:2,quantity:15,movement_id:2},
        {medicine_id:1,shipment_id:3,quantity:15,movement_id:3}
    ],
    pharmacy_movement_out : [
        {movement_id:7,movement_type:1,movement_date:'2020-01-08',notes:'',prescrition_id:117},
        {movement_id:6,movement_type:1,movement_date:'2019-01-08',notes:'',prescrition_id:116},
        {movement_id:5,movement_type:1,movement_date:'2019-01-08',notes:'',prescrition_id:110},
        {movement_id:4,movement_type:1,movement_date:'2018-01-08',notes:'',prescrition_id:112},
        {movement_id:3,movement_type:1,movement_date:'2018-01-08',notes:'',prescrition_id:111},
        {movement_id:2,movement_type:2,movement_date:'2020-01-08',notes:'',prescrition_id:''},
        {movement_id:1,movement_type:1,movement_date:'2020-01-08',notes:'',prescrition_id:12},
    ],
    movement_out_types : ['تلف','وصفة','استرجاع' ]
}

const reducer = (state = initState, action) => {

    switch(action.type ){
        case 'ADDPATIENT' : {
            var today = new Date();
            if(action.data.birthdate !== ''){
                var age = parseInt(today.getFullYear())-parseInt(action.data.birthdate.slice(0,4));
                action.data = {
                    ...action.data,
                    age
                }}
            state.patients.unshift(action.data);
            var newVisit = {visit_id : state.visits.length+1 ,person_id:action.data.id,visit_date:action.data.registerdate};
            state.visits.push(newVisit);
            return {
                ...state,
                patients : state.patients
            }
        }
        case 'EDITPATIENT' : {
            var today = new Date();
            var index = state.patients.findIndex(x => x.id === action.data.id);
            if(action.data.birthdate !== state.patients[index].birthdate){
                var age = parseInt(today.getFullYear())-parseInt(action.data.birthdate.slice(0,4));
                action.data = {
                    ...action.data,
                    age
                }}
            state.patients[index] = action.data;
            return {
                ...state,
                patients : state.patients,
            }
        }
        case 'DELETEPATIENT' : {
            return {
                ...state,
                patients : state.patients.filter(item => item.id !== action.data),
            }
        }

        case 'ADDEXAM' : {
            var visitInd = state.visits.findIndex(x => (x.person_id === parseInt(action.data.newExam.patientId) && x.visit_date === action.data.newExam.examdate));
            if(visitInd === -1)  {
                var newVisit = {visit_id : state.visits.length+1 ,person_id:parseInt(action.data.newExam.patientId),visit_date:action.data.newExam.examdate};
                state.visits.push(newVisit);
                visitInd = state.visits.length-1;
            }
            var newExam = {examination_id:state.examination.length+1,visit_id: state.visits[visitInd].visit_id,doctor_id:action.data.newExam.doctor_id,prescrition_id:action.data.newExam.prescrition_id};
            state.examination.unshift(newExam);
            action.data.diseases.map( disease_id => {
                state.diagnose.unshift({examination_id:newExam.examination_id,disease_id:disease_id,note:''});
            });
            
            return {
                ...state,
                examination : state.examination
            }
        }
        case 'EDITEXAM' : {
            var exam = {
                examination_id:action.data.exam.examination_id,
                visit_id:action.data.exam.visit_id,
                note:action.data.exam.note,
                doctor_id:action.data.exam.doctor_id,
                prescrition_id:action.data.exam.prescrition_id};
            var index = state.examination.findIndex( x => x.id === exam.id);
            state.examination[index] = exam;
            action.data.diseases.map( disease_id => {
                let index = state.diagnose.findIndex( x => x.examination_id === exam.id && x.disease_id === disease_id );
                if(index==-1){
                    state.diagnose.unshift({examination_id:exam.id,disease_id:disease_id,note:''})
                }
            });
            return {
                ...state,
                examination : state.examination,
                diagnose : state.diagnose
            }
        }
        case 'DELETEEXAM' : {
            return {
                ...state,
                examination : state.examination.filter(item => item.examination_id !== parseInt(action.data)),
            }
        }

        case 'ADDMEDICINE' : {
            action.data = {
                ...action.data ,
                medicine_id : state.medicines.length+1
            } 
            state.medicines.unshift(action.data);
            return {
                ...state,
                medicines : state.medicines
            }
        } 
        case 'DELETEMEDICINE' : {
            return {
                ...state,
                medicines : state.medicines.filter(item => item.medicine_id !== action.data),
            }
        }
        case 'EDITMEDICINE' : {
            var index = state.medicines.findIndex(x => x.id === action.data.id);
            state.medicines[index] = action.data;
            return {
                ...state,
                medicines : state.medicines,
            }
        }
        case 'ADDSHIPMENT' : {
            action.data.newShipment = {
                ...action.data.newShipment ,
                shipment_id : state.shipment.length+1
            } 
            action.data.medicines.map ( (medicine,index) => {
                action.data.medicines[index] =  {
                    ...action.data.medicines[index],
                    shipment_id : state.shipment.length+1,
                    current_quantity : action.data.medicines[index].quantity
                };
            });
            action.data.medicines.map ( medicine => {
                state.pharmacy_stock.unshift(medicine);
            });
            state.shipment.unshift(action.data.newShipment);
            return {
                ...state,
                shipment : state.shipment,
            }
        }
        case 'DELSHIPPEDMEDICINE' : {
            return {
                ...state,
                pharmacy_stock : state.pharmacy_stock.filter(item => item.medicine_id !== action.data.medicine_id && item.shipment_id !== action.data.shipment_id),
            }
        }
        case 'EDITSHIPPEDMEDICINE' : {
            action.data = {
                ...action.data,
                medicine_id : parseInt(action.data.medicine_id),
                shipment_id : parseInt(action.data.shipment_id),
                quantity : parseInt(action.data.quantity)
            }
            var index = state.pharmacy_stock.findIndex(x => x.medicine_id === action.data.medicine_id && x.shipment_id === action.data.shipment_id);
            state.pharmacy_stock[index] = action.data;
            return {
                ...state,
                pharmacy_stock : state.pharmacy_stock,
            }
        }
        
        case 'ADDOUTMOVEMENT' : {
            action.data.newMove = {
                ...action.data.newMove ,
                movement_id : state.pharmacy_movement_out.length+1
            } 
            action.data.medicines.map ( (medicine,index) => {
                action.data.medicines[index] =  {
                    ...action.data.medicines[index],
                    movement_id : state.pharmacy_movement_out.length+1,
                    movement_type : parseInt(action.data.medicines[index].movement_type)
                };
                var ind = state.pharmacy_stock.findIndex( medicine => medicine.medicine_id === action.data.medicines[index].medicine_id && 
                    medicine.shipment_id === action.data.medicines[index].shipment_id );
                state.pharmacy_stock[ind] = {
                    ...state.pharmacy_stock[ind],
                    current_quantity : (state.pharmacy_stock[index].current_quantity)-(action.data.medicines[index].quantity)
                }
            });
            action.data.medicines.map ( medicine => {
                state.medicine_out.unshift(medicine);
            });
            
            state.pharmacy_movement_out.unshift(action.data.newMove);
            return {
                ...state,
                pharmacy_movement_out : state.pharmacy_movement_out,
            }
        }
        case 'DELETEOUTMOVEMENT' : {
            return {
                ...state,
                pharmacy_movement_out : state.pharmacy_movement_out.filter(item => item.movement_id !== action.data.movement_id),
            }
        }
        case 'EDITOUTMOVEMENT' : {
            var index = state.pharmacy_movement_out.findIndex(x => x.movement_id === action.data.move.movement_id);
            state.pharmacy_movement_out[index] = action.data.move;
            action.data.medicines.map( medicine => {
                
                var med = {
                    ...medicine,
                    movement_id : action.data.move.movement_id
                }
                var ind = state.medicine_out.findIndex ( out => out.medicine_id === medicine.medicine_id && out.movement_id === medicine.movement_id );
                if(ind !== -1) state.medicine_out[ind] = med;
                else state.medicine_out.unshift(med);
            } )
            return {
                ...state,
                pharmacy_stock : state.pharmacy_stock,
            }
        }
    }
    return {...state};
}

export default reducer;