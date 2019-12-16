import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, mergeMap } from 'rxjs/operators';

import { CARGAR_USUARIO, CARGAR_USUARIO_SUCCESS, CARGAR_USUARIO_FAIL } from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) { }

  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(CARGAR_USUARIO),
    mergeMap(action => this.usuariosService.getUserById(action['id'])
      .pipe(
        map(usuario => {
          return {
            type: CARGAR_USUARIO_SUCCESS,
            usuario: usuario
          }
        }),
        catchError((error) => {
          return of({
            type: CARGAR_USUARIO_FAIL,
            payload: error
          })
        })
      )
    ))
  );
}
