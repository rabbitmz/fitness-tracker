import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {


  @Output() closesidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
     this.authSubscription = this.authService.authChange.subscribe( auth => {
        this.isAuth = auth;
      });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onClose() {

    this.closesidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }
}
