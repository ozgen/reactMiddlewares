/**
 * Created by Ozgen on 9/6/16.
 */

import {
FETCH_USERS
} from '../actions/types';

export  default function (state = [], action) {

    switch (action.type){

        case FETCH_USERS:
            return [...state, ...action.payload.data];
    }
    
    return state;

}