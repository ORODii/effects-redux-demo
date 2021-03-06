import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CARGAR_USUARIOS, CARGAR_USUARIOS_SUCCESS, CARGAR_USUARIOS_FAIL } from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) { }

  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(CARGAR_USUARIOS),
    mergeMap(() => this.usuariosService.getUsers()
      .pipe(
        map(usuarios => {
          return {
            type: CARGAR_USUARIOS_SUCCESS,
            usuarios: usuarios
          }
        }),
        catchError((error) => {
          return of({
            type: CARGAR_USUARIOS_FAIL,
            payload: error
          })
        })
      )
    ))
  );
}
