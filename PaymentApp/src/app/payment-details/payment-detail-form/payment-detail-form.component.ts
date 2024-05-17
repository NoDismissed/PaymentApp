import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      (err: any) => {
        this.toastr.error('An error has occurred while submitting', 'Payment Detail Register');
        console.log(err)
      }
    );
  }

  updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.toastr.success('Updated successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      (err: any) => {
        this.toastr.error('An error has occurred while updating', 'Payment Detail Register');
        console.log(err)
      }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
