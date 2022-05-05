import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.css'],
})
export class AdminDataEditItemComponent implements OnInit {
  public products: any[] = [];
  public product: any = {} as any;
  public item: any = {} as any;
  public itemId: string | null = null;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) // private http: HttpClient,
  // private router: Router
  {}

  ngOnInit(): void {
        this.userService.getAllData().subscribe(
          (data) => {
            this.products = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );

        this.activatedRoute.paramMap.subscribe((param) => {
          this.itemId = param.get('itemId');
        });

        if (this.itemId) {
          // this.userService.getItem(this.itemId).subscribe(
          //   (data) => {
          //    // this.item = data;
          //     console.log("My data", this.itemId);
          //   },
          //   (error) => {
          //     console.log(error);
          //   }
          // );

          console.log("My data");
        }
  }

  url: any = 'url';

  seletImage(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.url = reader.result;
    };
  }

  // updateSubmit(){
  //   this.userService.updateItem(this.product, this.product.id)
  //   .subscribe(data => {
  //   console.log(data);
  //   // this.router.navigate(['/']).then(() => {});
  //   //this.refreshProduct();
  //   }, error => { console.log(error);})
  //   //console.log(this.product);
  // }
}
