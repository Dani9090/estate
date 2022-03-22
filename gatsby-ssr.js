
import React from 'react';
import Layout from './src/templates/MainTemplate';


export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}

