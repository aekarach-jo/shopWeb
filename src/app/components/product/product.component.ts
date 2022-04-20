import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  formProduct : any
  constructor(public route: Router, public callapi: ApiService, public fb: FormBuilder) {
    this.formProduct = fb.group({
      productId : [null],
      shopId : [null],
      productName : [null],
      unitPrice : [null],
      unitOfMeasure : [null],
      prooductCategory : [null],
      prooductImage : [null],
      prooductDescription : [null],
      status : [null],
    })
  }

  createShop() {
    console.log(this.formProduct.value);
    this.formProduct.value.status = "Open"
    this.callapi.createShop(this.formProduct.value).subscribe(data => {
      console.log(data);
      Swal.fire({
        position: "center",
        icon: 'success',
        title: "สำเร็จ",
        showConfirmButton: false,
        timer: 1000
      })

    })
  }
  ngOnInit(): void {
  }

}
