import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, destroyPlatform, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from 'src/app/Model/designation';
import { DesignationService } from 'src/app/Services/DesignationS/designation.service';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, Subject, throwError, VirtualTimeScheduler } from 'rxjs';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';
import { SwalService } from 'src/app/Services/AleartPopUpService/swal.service';
@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeupdatebtn') closeupdatebtn: any;
  @ViewChild('closedeletebtn') closedeletebtn: any;
  public searchFilter: any = '';
  public nameSearch: string = '';
  // searchedKeyword: string;
  searchKey: string = "";

  DesignationForm: FormGroup;
  editData: any;
  delData: any;
  desobj: Designation = new Designation();

  // designationData: Array<any> = [];
  designationData: any;
  
  dataTable: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  // count: number = 0;
  // tablesize: number = 15;
  // tablesizes: any = [10, 20, 50, 100, 150, 200, 250]
  // public page: number = 1;

  constructor(private service: DesignationService, private formBuilder: FormBuilder, private swalService: SwalService) {
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
    this.dataTable = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.getAll();

  }
 
  //#region Close Modal PopUp
  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  private closeUpdateModal(): void {
    this.closeupdatebtn.nativeElement.click();
  }
  private closeDeleteModal(): void {
    this.closedeletebtn.nativeElement.click();
  }
  //#endregion

  //#region Get All Designation

  getAll() {
    this.designationData = [];
    this.service.getAll().subscribe(res => {
      if (res.data != null) {
        this.designationData = res.data;
        
      }
      this.dtTrigger.next('');
    }
    );
  }
  //#endregion
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  //#region Add button  click  method
  Add() {
    this.desobj.designationId = this.DesignationForm.value.designationId;
    this.desobj.designDescription = this.DesignationForm.value.designDescription;
    this.service.addAndEdit(this.desobj).subscribe(res => {
      if (res.status == "Success") {
        this.swalService.SwalAlertMessage(true, "success", "Your Data Inserted Succusfully.", true, false);
        this.getAll();
        this.closeModal();
      }
      else
        this.swalService.SwalAlertMessage(false, "error", " Somethings wents wrong Please try again.", true, false);
    }, err => {
      console.log(err);
    });

    this.DesignationForm.reset();

  }
  //#endregion

  //#region Edit button pancel click  method
  editDesignation(desModel: Designation) {
    this.editData = desModel;

    this.DesignationForm.controls['designationId'].setValue(desModel.designationId);
    this.DesignationForm.controls['designDescription'].setValue(desModel.designDescription);

    this.DesignationForm.controls['companyId'].setValue(desModel.companyId);
    this.DesignationForm.controls['divisionId'].setValue(desModel.divisionId);
    this.DesignationForm.controls['departmentId'].setValue(desModel.departmentId);
    this.DesignationForm.controls['lockedBy'].setValue(desModel.lockedBy);
    this.DesignationForm.controls['lockTs'].setValue(desModel.lockTs);
    this.DesignationForm.controls['branchCode'].setValue(desModel.branchCode);

  }

  //#endregion


  //#region  For Update Or Edit Designation

  Update() {

    this.desobj.companyId = this.DesignationForm.value.companyId;
    this.desobj.divisionId = this.DesignationForm.value.divisionId;
    this.desobj.departmentId = this.DesignationForm.value.departmentId;
    this.desobj.designationId = this.DesignationForm.value.designationId;
    this.desobj.designDescription = this.DesignationForm.value.designDescription;
    this.desobj.lockedBy = this.DesignationForm.value.lockedBy;
    this.desobj.lockTs = this.DesignationForm.value.lockTs;
    this.desobj.branchCode = this.DesignationForm.value.branchCode;

    this.service.addAndEdit(this.desobj).subscribe(res => {

      if (res.status == "Success") {
        this.swalService.SwalAlertMessage(true, "Success", "Your Data Updated Successfully.", true, false);
        this.getAll();
      }
      else
        this.swalService.SwalAlertMessage(false, "error", "Somethings wents wrong. Please try again.", true, false);

      this.closeUpdateModal();
    });

    this.DesignationForm.reset();


  }
  //#endregion

  //#region For Delete Designation

    public DesId: any
    deleteData(desModel: string) {

      this.DesId = desModel

    }


  Delete(designationId: string) {
    this.service.delete(this.DesId).subscribe(res => {
      if (res.status == "Success") {
        this.swalService.SwalAlertMessage(true, "Success", "Your Data is Deleted Successfully. ", true, false);
        this.getAll();
      }
      else
        this.swalService.SwalAlertMessage(false, "error", " You Can not Delete this Record. DesignationId Is Missing.", true, false);
      this.closeDeleteModal()
    });
  }

  //#endregion

}
