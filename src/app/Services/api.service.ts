import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { product } from '../Models/product';
import { shop } from '../Models/shop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  public getAllShop() {
    return this.http.get<shop>(`${environment.apiUrl}Shop/GetAllShop`)
  }
  public getShopById(shopid: string) {
    return this.http.get<shop>(`${environment.apiUrl}shop/GetShopById/${shopid}`)
  }
  public createShop(shop: shop) {
    return this.http.post<shop>(`${environment.apiUrl}Shop/CreateShop`, shop)
  }
  public editShop(shopid: string, shop: shop) {
    return this.http.put<shop>(`${environment.apiUrl}Shop/EditShop/${shopid}`, shop)
  }
  public deleteShop(shopId: string) {
    return this.http.get<shop>(`${environment.apiUrl}Shop/DeleteShop/${shopId}`)
  }

  public getAllProduct() {
    return this.http.get<product>(`${environment.apiUrl}Product/GetAllProduct`)
  }
  public getProductById(productid: string) {
    return this.http.get<product>(`${environment.apiUrl}product/GetProductById/${productid}`)
  }
  public createProduct(product: product) {
    return this.http.post<product>(`${environment.apiUrl}Product/CreateProduct`, product)
  }
  public editProduct(productid: string, product: product) {
    return this.http.put<product>(`${environment.apiUrl}Product/EditProduct/${productid}`, product)
  }
  public deleteProduct(productId: string) {
    return this.http.get<product>(`${environment.apiUrl}Product/DeleteProduct/${productId}`)
  }
}
