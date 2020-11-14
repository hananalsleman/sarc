
import React, { Fragment } from 'react';
import './style.css';
const Table = (props) => {
    return (
        <Fragment>
            <table style={{display:'none'}} id="tables" class="table">  

                <thead>  
                    <tr><th colSpan="16">عدد المستفيدين</th> </tr>
                    <tr>  
                        <th>الفئات العمرية</th>  
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
                  
                    <tr >  
                        <th> المسجلين الجدد</th>  
                        <td >{props.getCounts_AgeGender_NewPatients()[0][0]}</td> 
                        <td >{props.getCounts_AgeGender_NewPatients()[1][0]}</td>
                        <td >{props.getCounts_AgeGender_NewPatients()[1][0]+props.getCounts_AgeGender_NewPatients()[0][0]}</td> 
                        
                        <td >{props.getCounts_AgeGender_NewPatients()[0][1]}</td> 
                        <td >{props.getCounts_AgeGender_NewPatients()[1][1]}</td>
                        <td >{props.getCounts_AgeGender_NewPatients()[1][1]+props.getCounts_AgeGender_NewPatients()[0][1]}</td> 

                        <td >{props.getCounts_AgeGender_NewPatients()[0][2]}</td> 
                        <td >{props.getCounts_AgeGender_NewPatients()[1][2]}</td>
                        <td >{props.getCounts_AgeGender_NewPatients()[1][2]+props.getCounts_AgeGender_NewPatients()[0][2]}</td> 

                        <td >{props.getCounts_AgeGender_NewPatients()[0][3]}</td> 
                        <td >{props.getCounts_AgeGender_NewPatients()[1][3]}</td>
                        <td >{props.getCounts_AgeGender_NewPatients()[1][3]+props.getCounts_AgeGender_NewPatients()[0][3]}</td> 

                        <td >{props.getCount_Gender_NewPatients()[0]}</td> 
                        <td >{props.getCount_Gender_NewPatients()[1]}</td>  
                        <td >{props.getCount_Gender_NewPatients()[1] + props.getCount_Gender_NewPatients()[0]}</td>  
                    </tr>  
                    <tr >  
                        <th> المستفيدين</th>  
                        <td >{props.getCounts_AgeGender_Patients()[0][0]}</td> 
                        <td >{props.getCounts_AgeGender_Patients()[1][0]}</td>                     
                        <td >{props.getCounts_AgeGender_Patients()[0][0] + props.getCounts_AgeGender_Patients()[1][0]}</td> 
                        
                        <td >{props.getCounts_AgeGender_Patients()[0][1]}</td> 
                        <td >{props.getCounts_AgeGender_Patients()[1][1]}</td>                     
                        <td >{props.getCounts_AgeGender_Patients()[0][1] + props.getCounts_AgeGender_Patients()[1][1]}</td> 
                        
                        <td >{props.getCounts_AgeGender_Patients()[0][2]}</td> 
                        <td >{props.getCounts_AgeGender_Patients()[1][2]}</td>                     
                        <td >{props.getCounts_AgeGender_Patients()[0][2] + props.getCounts_AgeGender_Patients()[1][2]}</td> 
                        
                        <td >{props.getCounts_AgeGender_Patients()[0][3]}</td> 
                        <td >{props.getCounts_AgeGender_Patients()[1][3]}</td>                     
                        <td >{props.getCounts_AgeGender_Patients()[0][3] + props.getCounts_AgeGender_Patients()[1][3]}</td> 
                        
                        <td >{props.getCount_Gender_Patients()[0]}</td> 
                        <td >{props.getCount_Gender_Patients()[1]}</td>                     
                        <td >{props.getCount_Gender_Patients()[0] + props.getCount_Gender_Patients()[1]}</td> 
                    </tr>  
                    <tr >  
                        <th> الزيارات</th>  
                        <td >{props.getCounts_ِAgeGender_Visits()[0][0]}</td> 
                        <td >{props.getCounts_ِAgeGender_Visits()[1][0]}</td>                     
                        <td >{props.getCounts_ِAgeGender_Visits()[0][0] + props.getCounts_ِAgeGender_Visits()[1][0]}</td> 
                        
                        <td >{props.getCounts_ِAgeGender_Visits()[0][1]}</td> 
                        <td >{props.getCounts_ِAgeGender_Visits()[1][1]}</td>                     
                        <td >{props.getCounts_ِAgeGender_Visits()[0][1] + props.getCounts_ِAgeGender_Visits()[1][1]}</td> 
                        
                        <td >{props.getCounts_ِAgeGender_Visits()[0][2]}</td> 
                        <td >{props.getCounts_ِAgeGender_Visits()[1][2]}</td>                     
                        <td >{props.getCounts_ِAgeGender_Visits()[0][2] + props.getCounts_ِAgeGender_Visits()[1][2]}</td> 
                        
                        <td >{props.getCounts_ِAgeGender_Visits()[0][3]}</td> 
                        <td >{props.getCounts_ِAgeGender_Visits()[1][3]}</td>                     
                        <td >{props.getCounts_ِAgeGender_Visits()[0][3] + props.getCounts_ِAgeGender_Visits()[1][3]}</td> 
                        
                        <td >{props.getCount_Gender_Visits()[0]}</td> 
                        <td >{props.getCount_Gender_Visits()[1]}</td>                     
                        <td >{props.getCount_Gender_Visits()[0] + props.getCount_Gender_Visits()[1]}</td> 
                
                    </tr>  
                      
                <tr ></tr> 
                <tr ></tr> 
                <tr ></tr> 
                </tbody>  
                <thead>  
                    <tr><th colSpan="17"> العيادات</th> </tr>
                    <tr>  
                        <th rowSpan="3"> العيادات</th>  
                        <th colSpan="8"> عيادة الاسنان</th>
                        <th colSpan="8"> عيادة داخلية</th>
                    </tr> 
                    <tr>    
                        <th colSpan="2">تحت سن 5 سنوات</th>  
                        <th colSpan="2">بين 5 و 17</th>  
                        <th colSpan="2">بين 18 و 59</th>  
                        <th colSpan="2">فوق 60</th>   
                        
                        
                        <th colSpan="2">تحت سن 5 سنوات</th>  
                        <th colSpan="2">بين 5 و 17</th>  
                        <th colSpan="2">بين 18 و 59</th>  
                        <th colSpan="2">فوق 60</th>   
                    </tr> 
                    <tr>   
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        
                        <th>ذكور</th>  
                        <th>إناث</th>

                        <th>ذكور</th>  
                        <th>إناث</th> 

                        <th>ذكور</th>  
                        <th>إناث</th>    
                
                        <th>ذكور</th>  
                        <th>إناث</th>  
                
                        <th>ذكور</th>  
                        <th>إناث</th>   
                            
                        <th>ذكور</th>  
                        <th>إناث</th>  
                    </tr>  
                </thead> 
                
                <tbody>    
                    
                    <tr >  
                        <th> المستفيدين </th>  
                        <td >{props.getCount_genderClinicAge_Patients()[0][0][4]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][0][4]}</td>
                        
                        <td >{props.getCount_genderClinicAge_Patients()[0][1][4]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][1][4]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][2][4]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][2][4]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][3][4]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][3][4]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][0][0]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][0][0]}</td>
                        
                        <td >{props.getCount_genderClinicAge_Patients()[0][1][0]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][1][0]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][2][0]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][2][0]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][3][0]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][3][0]}</td>
                
                    </tr> 
                      
                <tr ></tr>   
                <tr ></tr> 
                <tr ></tr> 
                <tr ></tr> 
                </tbody>  
                

                <thead>  
                    <tr><th colSpan="17"> العيادات</th> </tr>
                    <tr>  
                        <th rowSpan="3"> العيادات</th>  
                        <th colSpan="8"> عيادة نسائية</th>
                        <th colSpan="8"> عيادة قلبية</th>
                    </tr> 
                    <tr>    
                        <th colSpan="2">تحت سن 5 سنوات</th>  
                        <th colSpan="2">بين 5 و 17</th>  
                        <th colSpan="2">بين 18 و 59</th>  
                        <th colSpan="2">فوق 60</th>   
                        
                        
                        <th colSpan="2">تحت سن 5 سنوات</th>  
                        <th colSpan="2">بين 5 و 17</th>  
                        <th colSpan="2">بين 18 و 59</th>  
                        <th colSpan="2">فوق 60</th>   
                    </tr> 
                    <tr>   
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        
                        <th>ذكور</th>  
                        <th>إناث</th>  
                        
                        <th>ذكور</th>  
                        <th>إناث</th>

                        <th>ذكور</th>  
                        <th>إناث</th> 

                        <th>ذكور</th>  
                        <th>إناث</th>    
                
                        <th>ذكور</th>  
                        <th>إناث</th>  
                
                        <th>ذكور</th>  
                        <th>إناث</th>   
                            
                        <th>ذكور</th>  
                        <th>إناث</th>  
                    </tr>  
                </thead> 
                
                <tbody>      
                    <tr >  
                        <th> المستفيدين </th>  
                        <td >{props.getCount_genderClinicAge_Patients()[0][0][3]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][0][3]}</td>
                        
                        <td >{props.getCount_genderClinicAge_Patients()[0][1][3]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][1][3]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][2][3]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][2][3]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][3][3]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][3][3]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][0][5]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][0][5]}</td>
                        
                        <td >{props.getCount_genderClinicAge_Patients()[0][1][5]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][1][5]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][2][5]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][2][5]}</td>
                
                        <td >{props.getCount_genderClinicAge_Patients()[0][3][5]}</td> 
                        <td >{props.getCount_genderClinicAge_Patients()[1][3][5]}</td>
                
                    </tr> 
                      
                <tr ></tr>   
                <tr ></tr>   
                <tr ></tr> 
                </tbody>  
                
            
            </table>
        </Fragment>
        
    )
}
export default Table;