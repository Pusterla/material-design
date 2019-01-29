import * as React from 'react';
import LinkComponent from '@material-ui/core/Link';
import { Color } from './types';

export interface LinkProps {
    /** @name Block */
    block?: boolean;

    /** @name Color */
    color: Color;

    /** @name Underline @default Hover */
    underline?: LinkUnderline;
}

export enum LinkUnderline {
    None = 'none',
    Hover = 'hover',
    Always = 'always'
}

/**
 * @name Link
 */
export const Link: React.SFC<LinkProps> = props => {
    return (
        <LinkComponent {...props}>
            {props.children}
        </LinkComponent>
    )
}
