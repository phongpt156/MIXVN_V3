import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';

import { SetService } from 'app/main-app/main-app-shared/services/set/set.service';
import { UserService } from 'app/main-app/main-app-shared/services/user/user.service';

@Component({
  selector: 'mix-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnChanges {
  @Input() userId: number;

  type: any = {
    like: 1,
    follow: 2,
    mix: 3
  }
  currentType: number;
  sets: any[] = [];

  constructor(
    private setService: SetService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentType = this.type.like;
    
    switch (this.currentType) {
      case this.type.like: {
      
      }
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
    if (simpleChanges.userId.currentValue) {
      this.getSetsUserLike();
    }
  }

  getSetsUserLike() {
    this.userService.getSetsUserLike(this.userId)
    .subscribe(res => {
      this.sets = res.data;
    });
  }
}
