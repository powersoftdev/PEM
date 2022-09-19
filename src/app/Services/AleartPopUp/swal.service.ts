import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  public SwalAlertMessage(successOrFail: boolean, _icon: any, _message: string,  showConfirmButton: boolean, showcancelButton: boolean) {

    Swal.fire({
      position: 'center',
      icon: _icon,
      title: _message,
      showConfirmButton: showConfirmButton,
      showCancelButton: showcancelButton ? true : false,
      // confirmButtonText: "Delete It",
      // confirmButtonColor: "#ff0055",
      // cancelButtonColor: "#999999",
      // reverseButtons: true,
      // focusConfirm: false,
      // focusCancel: true
    });
  }
}
