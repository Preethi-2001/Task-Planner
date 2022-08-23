import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  title = 'tasklist';
  public Text: string='';
  public text : string = '';
  public items = [];
  public index: number=0;
  

constructor() {}

ngOnInit(): void {} 

public addItem(this: any) {
  if(this.Text==''){}
  else{
  this.items.push(this.Text);  
  this.Text='';  
}
}
public del(index:number){
  this.items.splice(index,1);
}
}