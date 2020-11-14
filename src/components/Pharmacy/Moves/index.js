import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddOutMovement from '../AddOutMovement';
import DeleteOutMovement from '../DeleteOutMovement';
import EditOutMovement from '../EditOutMovement';
import PreviewOutMovement from '../PreviewOutMovement';

class Moves extends Component {

    state = {
        isDisplayedAdd: 'none',
        isDisplayedPrev: 'none',
        isDisplayedEdit: 'none',
        isDisplayedDelete: 'none',
        isDisplaySearch: 'none',
        fixedTopHeight: '7em',
        move: {},
        search: { name: '', motherName: '', age: '', gender: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
    }

    toggleDisplayAdd = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
        });
    }
    toggleDisplayPrev = (m) => {
        this.setState({
            ...this.state,
            isDisplayedPrev: this.state.isDisplayedPrev === 'block' ? 'none' : 'block',
            move: m
        });
    }
    toggleDisplayEdit = (m) => {
        this.setState({
            ...this.state,
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            move: m
        });
    }
    toggleDisplayDelete = (m) => {
        this.setState({
            ...this.state,
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            move: m
        });
    }
    toggleDisplaySearch = () => {
        this.setState({
            ...this.state,
            isDisplaySearch: this.state.isDisplaySearch === 'block' ? 'none' : 'block',
            fixedTopHeight: this.state.isDisplaySearch === 'block' ? '7em' : '10.5em'
        });
    }

    delMove = () => {
        this.props.deleteMove(this.state.move);
        this.setState({
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            move: {}
        });
    }

    addMove = (newMove, medicines) => {
        this.props.addMove(newMove, medicines);
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
        });
    }

    editMove = (move, medicines) => {
        this.props.editMove(move, medicines);
        this.setState({
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            move: {}
        })
    }

    search = (e) => {

        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value
            },
        },
            () => this.setState({ patients: this.props.patients.filter(item => ((item.firstName + ' ' + item.fatherName + ' ' + item.lastName).indexOf(this.state.search.name) !== -1) && item.motherName.indexOf(this.state.search.motherName) !== -1) })
        );
    }
    getCountOutMedicines = (id) => {
        return (this.props.medicine_out.filter(medicine => medicine.movement_id == id)).length;
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.patients !== nextProps.patients) {
            this.setState({
                patients: nextProps.patients,
            });
        }
    }

    render() {
        var patients = this.state.patients;
        return (
            <div className="moves tab-body">
                <AddOutMovement toggleDisplay={this.toggleDisplayAdd} display={this.state.isDisplayedAdd} addMove={this.addMove} />
                <DeleteOutMovement toggleDisplay={this.toggleDisplayDelete} display={this.state.isDisplayedDelete} move={this.state.move} delMove={this.delMove} />
                <EditOutMovement toggleDisplay={this.toggleDisplayEdit} display={this.state.isDisplayedEdit} move={this.state.move} editMove={this.editMove} />
                <PreviewOutMovement toggleDisplay={this.toggleDisplayPrev} display={this.state.isDisplayedPrev} move={this.state.move} />

                <div className="fixed-tp col-12 col-lg-10">
                    <div className="titlebar-content mt-2 mt-lg-0 row p-3 mx-auto">
                        <div className="titlebar p-0 row col-12 my-auto  mx-auto">
                            <div className="track pull-right col-4 col-md-2 order-1 order-md-1" id="pointer">
                                عمليات
                            </div>
                            <div className="pull-left p-0 col-6 col-md-4 order-2 order-md-3">
                                <button className="btn pl-3 pr-3 add" data-toggle="modal" data-target="#addPatientWin">إضافة عملية</button>
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
                                <th scope="col">الرقم</th>
                                <th scope="col">النوع</th>
                                <th scope="col" className="dis-none">التاريخ</th>
                                <th scope="col" className="dis-none">رقم الوصفة </th>
                                <th scope="col" className="dis-none">عدد الادوية المخرجة</th>
                                <th scope="col" > -- </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.pharmacy_movement_out.map(move =>
                                    <tr className="line" key={move.movement_id} >
                                        <td scope="col">{move.movement_id}</td>
                                        <td scope="col">{this.props.movement_out_types[move.movement_type]}</td>
                                        <td scope="col" className="dis-none">{move.movement_date}</td>
                                        <td scope="col" className="dis-none">{move.prescrition_id}</td>
                                        <td scope="col" className="dis-none">{this.getCountOutMedicines(move.movement_id)}</td>
                                        <td scope="col" >
                                            <button onClick={() => this.toggleDisplayEdit(move)} className="action"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.toggleDisplayDelete(move)} className="action" data-toggle="modal" data-target="#deletePatientWin"><i className="fa fa-remove"></i></button>
                                            <button onClick={() => this.toggleDisplayPrev(move)} className="action"><i className="fa fa-eye"></i></button>
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

function mapStateToProps(state) {
    return {
        medicines: state.medicines,
        stock: state.pharmacy_stock,
        pharmacy_movement_out: state.pharmacy_movement_out,
        medicine_out: state.medicine_out,
        movement_out_types: state.movement_out_types
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMove: (newMove, medicines) => dispatch({ data: { newMove, medicines }, type: 'ADDOUTMOVEMENT' }),
        editMove: (move, medicines) => dispatch({ data: { move, medicines }, type: 'EDITOUTMOVEMENT' }),
        deleteMove: (move) => dispatch({ data: move, type: 'DELETEOUTMOVEMENT' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Moves);