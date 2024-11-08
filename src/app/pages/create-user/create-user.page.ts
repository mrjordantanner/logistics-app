import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrl: './create-user.page.scss',
})
export class CreateUserPage {
  createUserForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      const user: Partial<User> = this.createUserForm.value;

      this.userService.createUser(user).subscribe({
        next: (newUser) => console.log('User created:', newUser),
        error: (error) => console.error('Error creating user:', error)
      });
    }
  }
}
