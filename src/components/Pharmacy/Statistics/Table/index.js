
import React, { Fragment } from 'react';
import './style.css';
const Table = (props) => {
    return (
        <Fragment>
            <table id="tables" class="table d-none">  

                <thead>  
                    <tr><th colSpan="16">عدد المستفيدين</th> </tr>
                    <tr>  
                        <th>الفئات العمرية</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th>
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th> 
                        <th >كانون الاول</th>  
                        <th colSpan="3">تحت سن 5 سنوات</th>  
                        <th colSpan="3">بين 5 و 17</th>  
                        <th colSpan="3">بين 18 و 59</th>  
                        <th colSpan="3">فوق 60</th>   
                        
                        <th rowSpan="2">مجموع الذكور</th>  
                        <th rowSpan="2">مجموع الاناث</th> 
                        <th rowSpan="2">مجموع الكلي</th> 
                    </tr> 
                    <tr>  
                        <th> الجنس</th>  
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        <th>المجموع</th>

                        <th>ذكور</th>  
                        <th>إناث</th>  
                        <th>المجموع</th>

                        <th>ذكور</th>  
                        <th>إناث</th>  
                        <th>المجموع</th> 
                            
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        <th>المجموع</th> 
                    </tr>  
                </thead> 

                <tbody>     
                  
                <tr ></tr> 
                <tr ></tr> 
                </tbody>  
                
            
            </table>
        </Fragment>
        
    )
}
export default Table;