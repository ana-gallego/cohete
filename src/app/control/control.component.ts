import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})


export class ControlComponent implements OnInit {
  url = this.router.url;
  planeta;
  planetas;
  dataPlaneta;
  grados;
  imagen;
  constructor(private controlService: ControlService, private router: Router, private ar: ActivatedRoute) {

  }

  ngOnInit() {
    //obtener la ruta desde donde acceden
    if (this.url != '/control') {
      this.ar.queryParams.subscribe(params => {
        this.planeta = this.ar.snapshot.paramMap.get("nombre");
        //obtener json del back
        this.controlService.getPlaneta(this.planeta).subscribe(data => {
          data = data as object[];
          this.getInfoPlaneta(data);
        });
      })
    }
  }

  getInfoPlaneta(data) {
    //asignar valores
    this.planetas = data["images"];
    this.dataPlaneta = this.planetas[this.planeta];
    this.grados = this.dataPlaneta["degrees"];
    this.imagen = this.dataPlaneta["img"];
    //cambio de background dependiendo del planeta que se elija
    document.body.style.backgroundImage = "url('" + this.imagen + "')";
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundPosition = "50% 0%";
  }
}

