import React,{Component} from 'react';
import {connect} from 'react-redux';

import AddMedicine from '../AddMedicine/index'
import DeleteMedicine from '../DeleteMedicine';
import EditMedicine from '../EditMedicine';
import PreviewMedicine from '../PreviewMedicine';

class Medecines extends Component {

    state = {
        isDisplaySearch : 'none',
        fixedTopHeight : '7em',
        medicines : this.props.medicines,
        medicine : {medicine_id:1,medicine_name:'',code:'',medicine_calibre:'',active_material:'',medicine_form:0},
        initialMedicine : {medicine_id:1,medicine_name:'',code:'',medicine_calibre:'',active_material:'',medicine_form:0},

        search : {medicine_id:1,medicine_name:'',code:'',medicine_calibre:'',active_material:'',medicine_form:0},
    }

   
    toggleDisplayWin = (m) => {
        this.setState({
            ...this.state,
            medicine : m
        });
    }

    delMedicine = () => {
        this.props.deleteMedicine( this.state.medicine.medicine_id);
        this.setState({
            isDisplayedDelete : this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            medicine : {}
        });
    }
    addMedicine = (newMedicine) => {
        this.props.addMedicine(newMedicine);
        this.setState({
            ...this.state,
            isDisplayedAdd : this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
            medicine : {}
        });
    }
    editMedicine = (m) => {
        this.props.editMedicine(m);
        this.setState({
            isDisplayedEdit : this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            medicine:{}
        })
    }
    search = (e) =>{
        
        this.setState({
            ...this.state,
            search :{
                ...this.state.search,
                [e.target.name] : e.target.value
            },
        },
         () => this.setState({medicines : this.props.medicines.filter(item => ((item.medicine_name).indexOf(this.state.search.name) !== -1) && item.code.indexOf(this.state.search.code) !== -1)})
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.medicines !== nextProps.medicines) {
            this.setState({
                medicines: nextProps.medicines,
            });
        }
    }

    render(){
        var medicines = this.state.medicines;
        return (
            <div className="medicines tab-body">
                <AddMedicine   addMedicine={this.addMedicine} />
                <DeleteMedicine  medicine={this.state.medicine} delMedicine={this.delMedicine}/>
                <EditMedicine  medicine={this.state.medicine} editMedicine={this.editMedicine} />
                <PreviewMedicine  medicine={this.state.medicine}/>

                <div className="fixed-tp col-12 col-lg-10">
                    <div className="titlebar-content mt-2 mt-lg-0 row p-3 mx-auto">
                        <div className="titlebar p-0 row col-12 my-auto  mx-auto">
                            <div className="track pull-right col-4 col-md-2 order-1 order-md-1" id="pointer">
                            أدوية
                            </div>
                            <div className="pull-left p-0 col-6 col-md-4 order-2 order-md-3">
                                <button className="btn pl-3 pr-3 add" data-toggle="modal" data-target="#addMedicineWin">إضافة دواء</button>
                                <button className="btn search" data-toggle="collapse" href="#collapseFormSearch" role="button" aria-expanded="false" aria-controls="collapseFormSearch" ><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="collapse" id="collapseFormSearch">
                            <div className="card card-body">
                                Anim pa life accusamus terry ric labore wes apiente ea proident.
                             </div>
                        </div>
                    </div>

                </div>


                <div className="pl-3 pr-3 pt-2">
                    <table className="table table-bordered table-info">
                        <thead className="first-line">
                            <tr>
                                <th scope="col">اسم الدواء</th>
                                <th scope="col">الكود</th>
                                <th scope="col" className="dis-none">العيار</th>
                                <th scope="col" className="dis-none">الشكل</th>
                                <th scope="col" className="dis-none">المادة الفعالة</th>
                                <th scope="col" > -- </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 medicines.map( medicine => 
                                    <tr className="line" key={medicine.medicine_id} >
                                        <td scope="col" >{medicine.medicine_name}</td>
                                        <td scope="col" >{medicine.code}</td>
                                        <td scope="col" className="dis-none">{medicine.medicine_calibre}</td>
                                        <td scope="col" className="dis-none">{this.props.medicine_form[medicine.medicine_form]}</td>
                                        <td scope="col" className="dis-none">{medicine.active_material}</td>
                                        <td scope="col" >
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#editMedicineWin"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#deleteMedicineWin"><i className="fa fa-remove"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#previewMedicineWin"><i className="fa fa-eye"></i></button>
                                        </td>
                                    </tr >
                                )
                            }
                        </tbody>
                    </table>
                </div>
               

            </div>
        )
} 
}

function mapStateToProps (state) {
    return {
        medicines : state.medicines,
        medicine_form : state.medicine_form
    }
}

function mapDispatchToProps (dispatch){
    return {
        addMedicine : (newMedicine) => dispatch({data:newMedicine,type:'ADDMEDICINE'}),
        editMedicine : (medicine) => dispatch({data:medicine,type:'EDITMEDICINE'}),
        deleteMedicine : (mId) => dispatch({data:mId,type:'DELETEMEDICINE'})
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(Medecines);