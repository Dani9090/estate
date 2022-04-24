import React from 'react';
const { MainTemplate } = require("./src/templates/MainTemplate")

export function wrapPageElement({ element, props }) {
    return <MainTemplate {...props}>{element}</MainTemplate>;
}
