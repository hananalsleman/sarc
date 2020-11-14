import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import 'chart.piecelabel.js';


let Charts = (props) => {


  const optionsBar_AgeGender_Prescrition = {
    title: {
      display: true,
      text: 'المجموع للوصفات الطبية المخرجة'
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
          beginAtZero: true
        }
      }]
    }
  }
  const dataBar_AgeGender_Prescrition = {
    labels: ["تحت 5 سنوات ", "بين 5 و 17 سنة", "بين 18 و 59 سنة", "فوق 60 سنة"],
    datasets: [
      // These two will be in the same stack.
      {
        label: 'ذكور',
        backgroundColor: "#ddd",
        data: props.getCounts_AgeGender_OutMovement()[0]
      },

      {
        label: 'اناث',
        backgroundColor: "#ffb9bc",
        data: props.getCounts_AgeGender_OutMovement()[1]
      }
    ]
  }
  const optionsPie_Prescrition = {
    title: {
      display: true,
      text: 'المجموع العام ',
      fontSize: 15
    },

    pieceLabel: {
      render: 'value',
      color: '#fff'
    },
    legend: {
      display: true,
      position: "right",
      fullWidth: true,
    },
  }
  const dataPie_Prescrition = {
    labels: ["ذكور", "اناث"],
    datasets: [
      {
        label: 'المجموع',
        borderColor: 'rgba(12,12,12,0)',
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
        data: [props.getCounts_Gender_OutMovement()[0],
        props.getCounts_Gender_OutMovement()[1]
        ]
      }
    ]
  }
  const optionsBar_Type_OutMovement = {
    title: {
      display: true,
      text: 'عمليات إخراج الادوية حسب النوع'
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
          beginAtZero: true
        }
      }]
    }
  }
  const dataBar_Type_OutMovement = {
    labels: ["تلف", "وصفة", "استرجاع"],
    datasets: [
      // These two will be in the same stack.
      {
        label: 'عمليات اخراج ادوية',
        backgroundColor: "#ddd",
        data: props.getCount_Type_OutMovement()
      }
    ]
  }
  return (
    <div className="charts">
      <div className="charts-category">

        <div className="chart chart-pie col-12 col-md-3 mt-1" >
          <Pie data={dataPie_Prescrition} options={optionsPie_Prescrition} />
        </div>

        <div className="chart chart-bar col-12 col-md-5 mt-1">
          <Bar data={dataBar_AgeGender_Prescrition} options={optionsBar_AgeGender_Prescrition} type="bar" />
        </div>

        <div className="chart chart-bar col-12 col-md-4 mt-1">
          <Bar data={dataBar_Type_OutMovement} options={optionsBar_Type_OutMovement} type="bar" />
        </div>

      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    patients: state.patients,
    gender: state.gender,
    nationality: state.nationality,
    examination: state.examination,
    visits: state.visits,
    diagnose: state.diagnose,
    doctors: state.doctors,
    clinics: state.clinics
  }
}


export default connect(mapStateToProps, null)(Charts);