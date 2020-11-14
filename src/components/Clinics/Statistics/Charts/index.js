import React from 'react';
import { Bar,Pie,Doughnut } from 'react-chartjs-2';
import {connect} from 'react-redux';
import 'chart.piecelabel.js';
import './style.css';




let Charts = (props) => {


    
  /************ */
  const optionsPie_Patients={
    title:{
      display:true,
      text:'المجموع العام ',
      fontSize:15
    },
    
    pieceLabel: {
      render: 'value',
      color:'#fff'
   },
    legend:{
      display:true,
      position: "right",
      fullWidth: true,
    },
  }
  const dataPie_Patients = {
    labels: ['مستفيدين','مسجلين جدد','زيارات'],
    datasets: [
      {
        label: 'المجموع',
        borderColor:'rgba(12,12,12,0)',
        backgroundColor: [
          '#222',
          '#e61b23',
          '#aaa',
        ],
        hoverBackgroundColor: [
          '#fff',
          '#f7b3b6',
          '#eee'
        ],
        data: [props.getCount_Gender_Patients()[0]+props.getCount_Gender_Patients()[1],
               props.getCount_Gender_NewPatients()[0]+props.getCount_Gender_NewPatients()[1],
               props.getCount_Gender_Visits ()[0]+props.getCount_Gender_Visits ()[1]]
      }
    ]
  }

  /**************** */
  const optionsBar_AgeGender_Patients = {
    title: {
      display: true,
      text: 'توزع المرضى حسب الجنس و الفئات لعمرية',
      fontSize:15
    },
    legend: { display: false },
    scales: {
         xAxes: [{
             stacked: true,
             position: "left"
         }],
         yAxes: [{
             stacked: true,
             position: "right",
             ticks: {
              beginAtZero: true
            }
         }]
     }
 }
 
  const dataBar_AgeGender_Patients = {
  labels: ["تحت 5 سنوات ", "بين 5 و 17 سنة","بين 18 و 59 سنة", "فوق 60 سنة"],
  datasets: [
    // These two will be in the same stack.
    {
      stack: "stack 1",
      label: 'مستفيدين-ذكور',
      backgroundColor:"#ddd",
      data: props.getCounts_AgeGender_Patients()[0]
    },

    {
      stack: "stack 1",
      label: 'مستفيدين-اناث',
      backgroundColor:"#fff",
      data: props.getCounts_AgeGender_Patients()[1]
    },
    {
      stack: "stack 2",
      label: 'مسجلين جدد-ذكور',
      backgroundColor:"#aaa",
      data: props.getCounts_AgeGender_NewPatients()[0]
    },

    {
      stack: "stack 2",
      label: 'مسجلين جدد-اناث',
      backgroundColor:"#999",
      data: props.getCounts_AgeGender_NewPatients()[1]
    },
    {
      stack: "stack 3",
      label: 'زيارات-ذكور',
      backgroundColor:"#555",
      data: props.getCounts_ِAgeGender_Visits()[0]
    },

    {
      stack: "stack 3",
      label: 'زيارات-اناث',
      backgroundColor:"#000",
      data: props.getCounts_ِAgeGender_Visits()[1]
    },
  ]
 }

 /******************* */
  const optionsBar_AgeClinics_PatientsExam = {
    title: {
      display: true,
      text: '  توزع معاينات المرضى حسب العيادات',
      fontSize:15
    },
    legend: { display: false },
    scales: {
        xAxes: [{
            stacked: true,
            position: "left"
        }],
        yAxes: [{
            stacked: true,
            position: "right",
            ticks: {
              beginAtZero: true
            }
        }]
    }
  }
  
  const dataBar_AgeClinics_PatientsExam = {
    labels: ["داخلية", "الاطفال","عينية","نسائية", "اسنان","قلبية","جلدية","عظمية"],
    datasets: [
      // These two will be in the same stack.
      {
        stack: "stack 1",
        label: 'تحت 5 سنوات-ذكور',
        backgroundColor:"#ddd",
        data: props.getCount_genderClinicAge_Patients()[0][0]
      },
  
      {
        stack: "stack 1",
        label: 'تحت 5 سنوات-اناث',
        
        backgroundColor:"#e2e2e2",
        data: props.getCount_genderClinicAge_Patients()[1][0]
      },
      {
        stack: "stack 2",
        label: 'بين 5 و 17 سنة-ذكور',
        backgroundColor:"#aaa",
        data: props.getCount_genderClinicAge_Patients()[0][1]
      },
  
      {
        stack: "stack 2",
        label: 'بين 5 و 17 سنة-اناث',
        backgroundColor:"#999",
        data: props.getCount_genderClinicAge_Patients()[1][1]  
      },
      {
        stack: "stack 3",
        label: 'بين 18 و 59 سنة-ذكور',
        backgroundColor:"#000",
        data: props.getCount_genderClinicAge_Patients()[0][2]
      },
  
      {
        stack: "stack 3",
        label: ' بين 18 و 59 سنة-اناث',
        backgroundColor:"#555",
        data: props.getCount_genderClinicAge_Patients()[1][2]  
      },
      {
        stack: "stack 4",
        label: 'فوق 60 سنة-ذكور',
        backgroundColor:"#000",
        data: props.getCount_genderClinicAge_Patients()[0][3]
      },
  
      {
        stack: "stack 4",
        label: ' قوق 60  سنة-اناث',
        backgroundColor:"#555",
        data: props.getCount_genderClinicAge_Patients()[1][3] 
      },
    ]
  }
/**************** */

  const optionsBar_Gender_Patients = {
    title: {
      display: true,
      text: 'المجموع للاناث و الذكور بكل صنف'
    },
    legend: { display: true },
    scales: {
        xAxes: [{
            stacked: false,
            position: "left"
        }],
        yAxes: [{
            stacked: false,
            position: "right",
            ticks: {
              beginAtZero: true,
              stepSize: 3
            }
        }]
    }
  }

  const dataBar_Gender_Patients = {
    labels: [ "زيارات","مسجلين جدد", "مستفيدين"],
    datasets: [
      {
        label: 'ذكور',
        backgroundColor:"#ddd",
        data: [props.getCount_Gender_Visits()[0], props.getCount_Gender_NewPatients()[0], props.getCount_Gender_Patients()[0]]
      },
  
      {
        label: 'اناث',
        backgroundColor:"#f22",
        data: [props.getCount_Gender_Visits()[1], props.getCount_Gender_NewPatients()[1], props.getCount_Gender_Patients()[1]]   
      },
    
  
    ]
  }

/************ */
  const optionsPie_Clinics_Patients = {
    title:{
      display:true,
      text:'المجموع العام ',
      fontSize:15
    },
    legend:{
      display:true,
      position:'right',
    }
  }
  const dataPie_Clinics_Patients = {
    labels: ["داخلية", "الاطفال","عينية","نسائية", "اسنان","قلبية","جلدية","عظمية"],
    datasets: [
      {
        label: 'المجموع',
        borderColor:'rgba(12,12,12,0)',
        backgroundColor: [
          '#e61b23',
          '#ddd',
          '#222',
          '#',
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
        ],
        data: props.getCount_Clinics_examination()
      }
    ]
  }
  return (
    <div className="charts">
      <div className="charts-category">
        
        <div className="chart col-12 col-md-5 col-lg-3 m-1" >
          <Pie  data={dataPie_Patients} options={optionsPie_Patients} />
        </div>

        <div className="chart col-12 col-md-7 col-lg-4 m-1">
          <Bar  data={dataBar_Gender_Patients} options={optionsBar_Gender_Patients} type="bar"/>
        </div>

        <div className="chart col-12 col-md-12 col-lg-5  m-1">
          <Bar  data={dataBar_AgeGender_Patients} options={optionsBar_AgeGender_Patients} type="bar"/>
        </div>


      </div>

      <div className="charts-category">
        <div className="chart col-12 col-lg-7 m-1">
          <Bar  data={dataBar_AgeClinics_PatientsExam} options={optionsBar_AgeClinics_PatientsExam}  type="bar"/>
        </div>
        <div className="chart col-12 col-lg-5 m-1">
          <Doughnut  data={dataPie_Clinics_Patients} options={optionsPie_Clinics_Patients}/>
        </div>
      </div>

    </div>
  )
}

function mapStateToProps (state) {
  return {
      patients : state.patients,
      gender : state.gender,
      nationality : state.nationality,
      examination : state.examination,
      visits : state.visits,
      diagnose : state.diagnose,
      doctors : state.doctors,
      clinics : state.clinics
  }
}


export default connect(mapStateToProps,null)(Charts);