import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input()
  public photoUrl: string;

  @Input()
  public name: any;

  public showInitials = false;
  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  @Input() list: any;
  ngOnInit() {
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();

      const randomIndex = Math.floor(
        Math.random() * Math.floor(this.colors?.length)
      );
      this.circleColor = this.colors[randomIndex];
      console.log(this.circleColor);
    }
  }

  private createInititals(): void {
    let initials = '';

    for (let i = 0; i < this.name?.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials?.length == 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }
}
