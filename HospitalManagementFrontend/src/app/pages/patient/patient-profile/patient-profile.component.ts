import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { PatientInfoService } from 'src/app/services/patient-info.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit { 
  public patient:any;
  
  constructor(private patientService:PatientInfoService,private http:HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getPatients(username:string){
  
    this.patientService.getPatients(username).subscribe(
      (resp)=>{
        this.patient=resp;
      },
      (error:any)=>{
        console.log(error);
      }
    );

  }
   
 

}
