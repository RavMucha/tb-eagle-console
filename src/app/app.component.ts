import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tb-eagle-console-ui';
  userIsAdmin$: Observable<User>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }
}
