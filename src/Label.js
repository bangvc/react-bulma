import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  type: PropTypes.string
};

const defaultProps = {
  tag: 'label'
};

const defaultClass = 'label';

const Label = (props) => {
  const {
    className,
    cssModule,
    size,
    type,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    size ? `is-${size}` : '',
    type ? `${type}` : defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
