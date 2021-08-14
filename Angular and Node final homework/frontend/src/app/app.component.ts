import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  redirectFromLoginToHome() {
    this.router.navigateByUrl('/login', { skipLocationChange: false }).then(() => {
        this.router.navigate(['/']);
    });
  }
  
  redirectFromLoginToCurrent() {
    const currentUrl = this.router.url
    this.router.navigateByUrl('/login', { skipLocationChange: false }).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
