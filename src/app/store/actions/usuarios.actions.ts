import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[USUARIOS] Cargar Usuarios';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIOS] Cargar Usuarios SUCCESS';
export const CARGAR_USUARIOS_FAIL = '[USUARIOS] Cargar Usuarios';

export const cargarUsuarios = createAction(CARGAR_USUARIOS);

export const cargarUsuariosSuccess = createAction(
    CARGAR_USUARIOS_SUCCESS,
    props<{usuarios: Usuario[]}>()
);

export const cargarUsuariosFail = createAction(
    CARGAR_USUARIOS_FAIL,
    props<{payload: any}>()
);
