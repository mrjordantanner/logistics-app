import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit {
  
  user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // For now, just get the current User from local storage
    var userString = localStorage.getItem("user");
    if (userString) {
      var user: User = JSON.parse(userString);
      this.user = user;
      // this.userService.getUserById(user.id).subscribe({
      //   next: (user) => {
      //     this.user = user;
      //   },
      //   error: (err) => {
      //     console.error('Error fetching user:', err);
      //   }
      // });
    }

  }
}
