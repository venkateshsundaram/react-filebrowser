var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

export var applyModifiers = function applyModifiers(props, el) {
    return Object.keys(props).filter(function (prop) {
        return prop[0] == '_';
    }).map(function (modifier) {
        return (css(_templateObject, el) + modifier).substr(1);
    }).join(' ');
};

export var deleteByVal = function deleteByVal(item, val) {
    for (var key in item) {
        if (item[key] == val) delete item[key];
    }
    return item;
};