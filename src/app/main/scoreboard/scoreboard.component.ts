import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  providers: [UserService],
  animations:[
    trigger('flyInOut', [
      state('down', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(+100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('flyFromRight', [
      state('right', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(+100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class ScoreboardComponent implements OnInit {

  constructor(private userService:UserService) { }
  users!:User[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
      this.users = this.users.sort((a,b)=>{
        if(a.userExp>b.userExp)
        return -1
        if(a.userExp<b.userExp)
        return 1

        return 0
      })
    })
  }

}
