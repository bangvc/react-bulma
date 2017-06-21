import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  textCenter: PropTypes.bool,
  fluid: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'container';

const Container = (props) => {
  const {
    className,
    cssModule,
    textCenter,
    fluid,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    textCenter ? 'has-text-centered' : '',
    fluid ? 'is-fluid' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
