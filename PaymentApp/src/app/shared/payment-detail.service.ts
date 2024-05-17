import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:21512/api/paymentdetail';
  formData:PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deletePaymentDetail(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL).toPromise()
    .then((res: any) => this.list = res as PaymentDetail[]);
  }
}
