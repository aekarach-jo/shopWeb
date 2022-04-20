import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { shop } from 'src/app/Models/shop';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  formShop: any
  shopAllData: any
  shopIdData: any
  shopId: any
  constructor(public route: Router, public callapi: ApiService, public fb: FormBuilder) {
    this.formShop = fb.group({
      shopId: [null],
      shopName: [null],
      description: [null],
      category: [null],
      status: [null],
    })
  }

  emptyForm() {
    this.formShop.patchValue({
      shopId: "",
      shopName: "",
      description: "",
      category: "",
      status: "",
    })
  }

  patchValue(receiveShopId: shop) {
    this.formShop.patchValue({
      shopId: receiveShopId.shopId,
      shopName: receiveShopId.shopName,
      description: receiveShopId.description,
      category: receiveShopId.category,
      status: receiveShopId.status,
    })
  }

  getAllShop() {
    this.callapi.getAllShop().subscribe(data => {
      this.shopAllData = data
      console.log(data);
    })
  }

  getShopById(id: string) {
    this.shopId = id
    this.callapi.getShopById(id).subscribe(data => {
      this.shopIdData = data
      this.patchValue(this.shopIdData)
    })
  }

  createShop() {
    console.log(this.formShop.value);
    this.formShop.value.status = "Open"
    this.callapi.createShop(this.formShop.value).subscribe(data => {
      console.log(data);
      Swal.fire({
        position: "center",
        icon: 'success',
        title: "สำเร็จ",
        showConfirmButton: false,
        timer: 1000
      })
      this.emptyForm()
      this.getAllShop()
    })
  }

  editShop() {
    console.log(this.formShop.value.shopId);
    console.log(this.formShop.value);

    this.callapi.editShop(this.formShop.value.shopId, this.formShop.value).subscribe(data => {
      console.log(data);
      Swal.fire({
        position: "center",
        icon: 'success',
        title: "แก้ไขสำเร็จ",
        showConfirmButton: false,
        timer: 1000
      })
      this.emptyForm()
      this.getAllShop()
    })
  }

  deleteShop(shopId: string) {
    Swal.fire({
      position: 'center',
      text: "ยืนยันหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#2aad19',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.isConfirmed) {
        this.callapi.deleteShop(shopId).subscribe(data => {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: 'success',
            title: "ลบแล้ว",
            showConfirmButton: false,
            timer: 1000
          })
          this.getAllShop();
        })
      }
    })

  }

  ngOnInit(): void {
    this.getAllShop()
  }

}
