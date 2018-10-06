import { css } from 'styled-components';

export const applyModifiers = (props, el) => Object.keys(props).filter(prop => prop[0] == '_').map(modifier => (css`${el}` + modifier).substr(1)).join(' ')

export const  deleteByVal = (item, val)  => {
    for (var key in item) {
        if (item[key] == val) delete item[key];
    }
    return item;
}