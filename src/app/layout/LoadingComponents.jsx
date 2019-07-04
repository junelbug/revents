import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react';

const LoadingComponents = ({inverted = true}) => {
    return (
        <Dimmer inverted={inverted} active ={true}>
            <Loader content='Loading ...'/>
        </Dimmer>
    )
}

export default LoadingComponents
