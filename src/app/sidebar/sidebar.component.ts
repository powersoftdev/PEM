import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignationService } from '../Services/designation.service';
import { LanguageService } from '../Services/language.service';
import { TitleService } from '../Services/title.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public searchTerm: string = '';
  constructor( private router: Router, private DService:DesignationService, private TService:TitleService, private LService:LanguageService) { }

  ngOnInit(): void {
  }
//For Logout
  onLogout()
  {
    localStorage.removeItem('token');
    // localStorage.removeItem('userName');
       this.router.navigate(['']);
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.DService.search.next(this.searchTerm);
    this.TService.search.next(this.searchTerm);
    this.LService.search.next(this.searchTerm);
  }

}
