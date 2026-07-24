import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl:'./product.html',
  styleUrl: './product.css',
})
export class Product {

  searchText: string = '';
  selectedCategory: string='';
  showDeleteModal = false;
  showEditModal = false;
  selectedId:number = 0;
  editData : any={};

  product=[
    {
      productid:1,
      productname:"Nick",
      price: 120,
      quantity: 260,
      description:"List product Of Nick",
      created_date: new Date("2026-06-05"),
      categoryname:"Nick",
      image:"https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png"
    },
    {
      productid:2,
      productname:"Nick Sport",
      price: 250,
      quantity:110,
      description:"List product Nick Sport",
      created_date: new Date("2026-06-30"),
      categoryname:"Nick Sport",
      image:"https://png.pngtree.com/png-clipart/20240612/original/pngtree-men-sneakers-shoes-unisex-running-spoort-png-image_15315121.png"
    },
    {
      productid:3,
      productname:" Nick Colorful  ",
      price:120,
      quantity:50,
      description:"List product Nick Colorful",
      created_date: new Date("2026-07-12"),
      categoryname:"Nick Colorful",
      image:"https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png"
    },
    {
      productid:4,
      productname:"Nick Runner",
      price: 100,
      quantity:90,
      description:"List Product Nick Runner",
      created_date: new Date("2026-07-20"),
      categoryname:"Nick Runner",
      image:"https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
    },
    {
      productid:5,
      productname:" Nick",
      price: 129,
      quantity:109,
      description:"List product Nick",
      created_date: new Date("2026-08-10"),
      categoryname:"Nick",
      image:"https://static.vecteezy.com/system/resources/thumbnails/058/272/032/small/sleek-and-minimalist-running-shoe-with-transparent-design-free-png.png"
    },
    {
      productid:6,
      productname:"Adidas",
      price: 355,
      quantity: 70,
      description:"List product Adidas",
      created_date: new Date ("2026-07-15"),
      categoryname: "Adidas",
      image:"https://static.vecteezy.com/system/resources/thumbnails/057/174/450/small/isolated-red-running-sneakers-mockup-showcasing-lightweight-design-perfect-for-athletes-and-casual-runners-red-running-sneakers-mockup-file-of-isolated-object-with-shadow-on-transparent-background-free-png.png"
    },
     {
      productid:7,
      productname:"Nick",
      price: 340,
      quantity: 400,
      description:"List product Nick",
      created_date: new Date ("2026-09-12"),
      categoryname: "Nick",
      image:"https://static.vecteezy.com/system/resources/thumbnails/049/668/138/small/nike-air-max-exceed-running-shoes-orange-and-blue-comfortable-and-stylish-with-a-transparent-background-png.png"
    },
     {
      productid:8,
      productname:"Puma ",
      price: 120,
      quantity: 85,
      description:"List product Puma",
      created_date: new Date ("2026-06-12"),
      categoryname: "Puma",
      image:"https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-blue-sport-shoes-png-image_10187592.png"
    },
     {
      productid:9,
      productname:"Adidas ",
      price: 170,
      quantity: 145,
      description:"List product Adidas ",
      created_date: new Date ("2026-08-12"),
      categoryname: "Adidas",
      image:"https://www.freeiconspng.com/thumbs/shoes-png/nike-women-running-shoes-png-image-6.png"
    },
     {
      productid:10,
      productname:" Adidas ",
      price: 110,
      quantity: 108,
      description:"List product Adidas",
      created_date: new Date ("2026-09-15"),
      categoryname: "Adidas",
      image:"https://www.freeiconspng.com/thumbs/shoes-png/running-shoes-png-blue-photo-21.png"
    }

  ];

  get filterProduct(){
      return this.product.filter(p=>{
        const matchSearch=
              p.productname.toLowerCase().
              includes(this.searchText.toLowerCase()) ||
              p.productid.toString().includes(this.searchText);
        const matchCategory=
              this.selectedCategory=='' ||
              p.categoryname== this.selectedCategory;
      return matchSearch && matchCategory;
      });
  }
    deleteProduct(id: number){
       this.selectedId=id;
       this.showDeleteModal=true;
      }

      confrimDelete(){
        this.product = this.product.filter(
         (p)=>p.productid!==this.selectedId
        );
        this.showDeleteModal = false;
        alert("Product Delte successfully!");
      }

      cancelDelete(){
        this.showDeleteModal = false;
      }


      editProduct (product:any){
        this.editData={...product,
          created_date: new Date(product.created_date).toISOString().split('T')[0]
        };
 
        this.showEditModal=true;
      }


      updateProduct(){
        const index = this.product.findIndex(
          (p)=>p.productid === this.editData.productid
        );
        if(index !=-1){
            this.product[index]= this.editData;
          
          alert ("Product updated successfully");
          this.showEditModal=false;
          }
      }
    }


