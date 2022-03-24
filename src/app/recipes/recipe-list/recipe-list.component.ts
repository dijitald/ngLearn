import { Component, OnInit } from '@angular/core';
import  { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("pasta", "yummy", "https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/italian_cuisine_1-1080x985.jpg"),
    new Recipe ("cake", "gimme more", "https://th.bing.com/th/id/R.20a16590e4ecbbbdc811b7b41e10b75c?rik=4JgTJXx18%2bfvuA&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f110000%2fvelka%2fbirthday-cake-14229611534jv.jpg&ehk=ibyzYtz%2fy0nKAc4hfvzFCefoxClE1%2fcP44nel%2fHIIKo%3d&risl=&pid=ImgRaw&r=0"),
    new Recipe ("fish", "delicious", "https://th.bing.com/th/id/OIP.Xn3FkMp1r__88bl56Z2xagHaEL?pid=ImgDet&rs=1")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
