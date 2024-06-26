import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deletePaymentDetail(id).subscribe(
        (res: any) => {
          this.toastr.success('Deleted successfully', 'Payment Detail Register');
          this.service.refreshList();
        },
        (err: any) => {
          this.toastr.error('An error has occurred while deleting', 'Payment Detail Register');
          console.log(err)
        }
      );
    }
  }
}
