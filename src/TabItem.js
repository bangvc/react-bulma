import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  active: PropTypes.bool
};

const defaultProps = {
  tag: 'li'
};

const defaultClass = '';

const TabItem = (props) => {
  const {
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    active ? 'is-active' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      <a>
        {props.children}
      </a>
    </Tag>
  );
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

export default TabItem;
