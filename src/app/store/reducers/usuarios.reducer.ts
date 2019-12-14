import { createReducer, on, Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import * as actions from '../actions';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(
    initialState,
    on(actions.cargarUsuarios, state => {
        return {
            ...state,
            loading: true
        }
    }),
    on(actions.cargarUsuariosSuccess, (state, { usuarios }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            users: [...usuarios]
        }
    }),
    on(actions.cargarUsuariosFail, (state, { payload }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: {...payload }
        }
    })
);

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}