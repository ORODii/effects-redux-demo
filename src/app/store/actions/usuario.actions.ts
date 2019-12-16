import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[USUARIO] Cargar Usuario';
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] Cargar Usuario SUCCESS';
export const CARGAR_USUARIO_FAIL = '[USUARIO] Cargar Usuario FAIL';

export const cargarUsuario = createAction(
    CARGAR_USUARIO,
    props<{id: number}>()
);

export const cargarUsuarioSuccess = createAction(
    CARGAR_USUARIO_SUCCESS,
    props<{usuario: Usuario}>()
);

export const cargarUsuarioFail = createAction(
    CARGAR_USUARIO_FAIL,
    props<{payload: any}>()
);
