import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, destroyPlatform, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from 'src/app/Model/designation';
import { DesignationService } from 'src/app/Services/designation.service';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError, VirtualTimeScheduler } from 'rxjs';
import{sweetAlertCls} from '../../Commons/sweetAlert'

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeupdatebtn') closeupdatebtn: any;
  @ViewChild('closedeletebtn') closedeletebtn: any;
  DesignationForm: FormGroup;
  editData: any;
 
  desobj: Designation = new Designation();

  DesignationId: any;


  designationData: Array<any> = [];

  API_URL: string = environment.API_URL;
  token: string = environment.loginToken;
  // childModal: any;

  constructor(private service: DesignationService, private formBuilder: FormBuilder, private http: HttpClient, private SwtAlt: sweetAlertCls ) {
    //Designation Form
    this.DesignationForm = this.formBuilder.group({
      companyId: new FormControl('', [Validators.required]),
      divisionId: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      designationId: new FormControl('', [Validators.required]),
      designDescription: new FormControl('', [Validators.required]),
      lockedBy: new FormControl('', [Validators.required]),
      lockTs: new FormControl('', [Validators.required]),
      branchCode: new FormControl('', [Validators.required])

    });
  }

  ngOnInit(): void {

    this.getAll();

  }



  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  private closeUpdateModal(): void {
    this.closeupdatebtn.nativeElement.click();
  }
  private closeDeleteModal(): void {
    this.closedeletebtn.nativeElement.click();
  }



  //Get Al Designation 
  getAll() {
    this.designationData = [];
    this.service.getAll().subscribe(res => {
      if (res.data != null) {
        this.designationData.push(res.data);
        console.log(this.designationData);
      }
    }

    );
  }

  //Add Designation
  Add() {
    debugger;
    this.desobj.designationId = this.DesignationForm.value.designationId;
    this.desobj.designDescription = this.DesignationForm.value.designDescription;

    this.service.addAndEdit(this.desobj).subscribe(res => {

      console.log("Success", this.desobj);
      console.log("Response", res);
      debugger;
      if (res.status == "Success") {
        this.SwtAlt.SwalAlertMessage(true, "success", "Your Data Inserted Succusfully.", true, false);
        this.getAll();
        this.closeModal();
      }
      else
        this.SwtAlt.SwalAlertMessage(false, "error", " Somethings wents wrong Please try again.", true, false);


    }, err => {
      console.log(err);
    });

    this.DesignationForm.reset();

  }


  //#region Edit button pancel click  method
  editDesignation(desModel: Designation) {
    console.log(desModel);

    this.editData = desModel;

    this.DesignationForm.controls['designationId'].setValue(desModel.designationId);
    this.DesignationForm.controls['designDescription'].setValue(desModel.designDescription);

    this.DesignationForm.controls['companyId'].setValue(desModel.companyId);
    this.DesignationForm.controls['divisionId'].setValue(desModel.divisionId);
    this.DesignationForm.controls['departmentId'].setValue(desModel.departmentId);
    this.DesignationForm.controls['lockedBy'].setValue(desModel.lockedBy);
    this.DesignationForm.controls['lockTs'].setValue(desModel.lockTs);
    this.DesignationForm.controls['branchCode'].setValue(desModel.branchCode);
    // this.editData = desModel;
  }

  //#endregion


  //#region  For Update Or Edit Designation

  Update() {
    debugger;
    this.desobj.companyId = this.DesignationForm.value.companyId;
    this.desobj.divisionId = this.DesignationForm.value.divisionId;
    this.desobj.departmentId = this.DesignationForm.value.departmentId;

    this.desobj.designationId = this.DesignationForm.value.designationId;
    this.desobj.designDescription = this.DesignationForm.value.designDescription;

    this.desobj.lockedBy = this.DesignationForm.value.lockedBy;
    this.desobj.lockTs = this.DesignationForm.value.lockTs;
    this.desobj.branchCode = this.DesignationForm.value.branchCode;

    this.service.addAndEdit(this.desobj).subscribe(res => {

      console.log("Success", this.desobj);

      if (res.status == "Success") {
        this.SwtAlt.SwalAlertMessage(true, "Success", "Your Data Updated Successfully.",true,false);
        this.getAll();
      }
      else
        this.SwtAlt.SwalAlertMessage(false, "error", "Somethings wents wrong. Please try again.", true, false);

      this.closeUpdateModal();
    });

    this.DesignationForm.reset();


  }
  //#endregion

  //#region For Delete Designation

  Delete(designationId: string) {

    this.service.delete(designationId).subscribe(res => {
      if (res.status == "Success") {
        this.SwtAlt.SwalAlertMessage(true, "Success", "Your Data Has Been Successfully Deleted.", true, true);
        this.getAll();
      }
      else
        this.SwtAlt.SwalAlertMessage(false, "error", " You Can not Delete this Data. DesignationId Is Missing.", true, false);

      this.closeDeleteModal()

    });
  }
  //#endregion
  
}
