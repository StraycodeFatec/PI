import { Component, Input, OnInit, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MaterialModule } from '../material.module';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AutorizacaoService } from '../_service/service.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav

  constructor(
    public autorizaService: AutorizacaoService
  ) {};

  ngOnInit(): void {

  }

  public openSideNav() {
    this.sidenav.toggle();
  }
}
