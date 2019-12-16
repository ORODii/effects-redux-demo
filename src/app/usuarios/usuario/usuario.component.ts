import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {
  private usuarioSuscription: Subscription = new Subscription()

  public usuario: Usuario;
  public loading: boolean;
  public error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        const id = params['id'];
        this.store.dispatch(cargarUsuario({ id: id }));
      })
    ;

    this.usuarioSuscription = this.store.select('usuario')
      .subscribe(data => {
        this.usuario = data.user;
        this.loading = data.loading;
        this.error = data.error;
      });
    ;
  }

  ngOnDestroy() {
    this.usuarioSuscription.unsubscribe();
  }
}
