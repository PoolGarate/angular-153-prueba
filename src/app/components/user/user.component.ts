import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { User } from '../../interfaces/user.model';
import { UserService } from '../../services/user.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;
  private allUsers: User[];
  filter = new FormControl('');


  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(private router: Router,
              private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
        this.allUsers = users;
        // this.allUsersx = [];
        this.users = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => this.search(text))
        );

        // this.allUsersx=users;
        this.collectionSize = this.allUsers.length;

        

    });
  }

  // get users() {
  //   return this.allUsers
  //       .map((user, i) => ({ idx: i + 1, ...user}))
  //       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
  // }


  onRemoveUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(res => {
        this.allUsers.splice(this.allUsers.indexOf(user), 1);
        this.users = of(this.allUsers);
    });
  }

  onUpdateUser(user: User) {
      this.router.navigate(['/users/', user.id]);
  }

  search(text: string) {
      const term = text.toLowerCase();

      return this.allUsers.filter(user => {
          return user.name.toLowerCase().includes(term)
              || user.lastname.toLowerCase().includes(term)
              || user.email.toLowerCase().includes(term);
      });
  }

}
