import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  textCenter: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'content';

const Content = (props) => {
  const {
    className,
    cssModule,
    size,
    textCenter,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    textCenter ? 'has-text-centered' : '',
    size ? `is-${size}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
