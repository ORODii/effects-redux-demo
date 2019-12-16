import { createReducer, on, Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import * as actions from '../actions';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(
    initialState,
    on(actions.cargarUsuario, state => {
        return {
            ...state,
            loading: true,
            error: null
        }
    }),
    on(actions.cargarUsuarioSuccess, (state, { usuario }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            user: { ... usuario }
        }
    }),
    on(actions.cargarUsuarioFail, (state, { payload }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: {
                status: payload.status,
                message: payload.message,
                url: payload.url,
            }
        }
    })
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}