import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddShipment from '../AddShipment';
import DeleteShippedMed from '../DeleteShippedMed';
import EditShippedMed from '../EditShippedMed';
import PreviewShippedMed from '../PreviewShippedMed';

class Stock extends Component {

    state = {
        isDisplaySearch: 'none',
        fixedTopHeight: '7em',
        medicines: this.props.medicines,
        medicine: {},
        shipment: {},
        search: { id: 1, name: '', code: '', company: '', quantity: '', calibre: '', active_material: '', form: '' },
    }

    toggleDisplayWin = (m) => {
        this.setState({
            ...this.state,
            medicine: m
        });
    }
    toggleDisplaySearch = () => {
        this.setState({
            ...this.state,
            isDisplaySearch: this.state.isDisplaySearch === 'block' ? 'none' : 'block',
            fixedTopHeight: this.state.isDisplaySearch === 'block' ? '7em' : '10.5em'
        });
    }

    delShippedMed = () => {
        this.props.delShippedMed(this.state.medicine);
        this.setState({
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            medicine: {}
        });
    }

    addShipment = (newShipment, medicines) => {
        this.props.addShipment(newShipment, medicines);
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
        });
    }

    editShippedMed = (m) => {
        this.props.editShippedMed(m);
        this.setState({
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            medicine: {}
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
            () => this.setState({ medicines: this.props.medicines.filter(item => ((item.medicine_name).indexOf(this.state.search.name) !== -1) && item.code.indexOf(this.state.search.code) !== -1) })
        );
    }

    getMedicine = (id) => {
        var index = this.props.medicines.findIndex(medicine => medicine.medicine_id === id);
        return this.props.medicines[index];
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.medicines !== nextProps.medicines) {
            this.setState({
                medicines: nextProps.medicines,
            });
        }
    }

    render() {
        return (
            <div className="stock tab-body">

                <AddShipment addShipment={this.addShipment} />
                <DeleteShippedMed medicine={this.state.medicine} delShippedMed={this.delShippedMed} />
                <EditShippedMed medicine={this.state.medicine} editShippedMed={this.editShippedMed} />
                <PreviewShippedMed  medicine={this.state.medicine} />

                <div className="fixed-tp col-12 col-lg-10">
                    <div className="titlebar-content mt-2 mt-lg-0 row p-3 mx-auto">
                        <div className="titlebar p-0 row col-12 my-auto  mx-auto">
                            <div className="track pull-right col-4 col-md-2 order-1 order-md-1" id="pointer">
                                المستودع
                            </div>
                            <div className="pull-left p-0 col-6 col-md-4 order-2 order-md-3">
                                <button className="btn pl-3 pr-3 add" data-toggle="modal" data-target="#addShipmentWin">شحن ادوية</button>
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
                                <th scope="col" className="dis-none">رقم عملية الشحن</th>
                                <th scope="col" className="dis-none">تاريخ الانتاج</th>
                                <th scope="col" className="dis-none"> تاريخ انتهاء الصلاحية </th>
                                <th scope="col" className="dis-none">الكمية المتوفرة</th>
                                <th scope="col" className="dis-none"> الكمية المشحونة</th>
                                <th scope="col" > -- </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.stock.map((medicine, index) =>
                                    <tr className="line" key={index} >
                                        <td scope="col" >{(this.getMedicine(medicine.medicine_id)).medicine_name}</td>
                                        <td scope="col" >{(this.getMedicine(medicine.medicine_id)).code}</td>
                                        <td scope="col" className="dis-none">{medicine.shipment_id}</td>
                                        <td scope="col" className="dis-none">{medicine.production_date}</td>
                                        <td scope="col" className="dis-none">{medicine.expiration_date}</td>
                                        <td scope="col" className="dis-none">{medicine.current_quantity}</td>
                                        <td scope="col" className="dis-none">{medicine.quantity}</td>
                                        <td scope="col" >
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#editShipmentMedWin"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#deleteShipmentMedWin"><i className="fa fa-remove"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(medicine)} className="action" data-toggle="modal" data-target="#previewShipmentMedWin"><i className="fa fa-eye"></i></button>
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
        stock: state.pharmacy_stock
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addShipment: (newShipment, medicines) => dispatch({ data: { newShipment, medicines }, type: 'ADDSHIPMENT' }),
        delShippedMed: (medicine) => dispatch({ data: medicine, type: 'DELSHIPPEDMEDICINE' }),
        editShippedMed: (medicine) => dispatch({ data: medicine, type: 'EDITSHIPPEDMEDICINE' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Stock);