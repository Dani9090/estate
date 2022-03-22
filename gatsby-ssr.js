import React from 'react';
import MainTemplate  from './src/templates/MainTemplate';

export function wrapPageElement({ element, props }) {
    return <MainTemplate {...props}>{element}</MainTemplate>;
}
