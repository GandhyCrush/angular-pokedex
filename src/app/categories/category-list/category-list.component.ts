import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categoryList: any[];

  constructor(private categoriesService: CategoryService) {}

  subscriberCategoryList: Subscription;

  ngOnInit(): void {
    //console.log(this.categoriesService.getPokemonTypes());
    //this.categoryList = this.categoriesService.getPokemonTypes();
    this.subscriberCategoryList = this.categoriesService
      .getPokemonTypes()
      .subscribe({
        next: (data) => {
          console.log(JSON.stringify(data));
          this.categoryList = data.results;
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscriberCategoryList) {
      this.subscriberCategoryList.unsubscribe();
    }
  }
}
