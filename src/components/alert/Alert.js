import React, { Component } from 'react';

export const Alert = ({error, warning}) => (
    ((error && <div className="alert alert-danger"><strong>Oops!</strong> {error}</div>) ||
     (warning && <div className="alert alert-warning"><strong>Oops!</strong> {warning}</div>))
)

