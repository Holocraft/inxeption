import React from 'react';

export default function Section(props) {
  return (
    <div className={props.name}>
      <div className={`${props.name}-ctn`}>
        <div className={`${props.name}-title`}>{props.title}</div>
        {props.subtitle && (
          <div className={`${props.name}-subtitle`}>{props.subtitle}</div>
        )}
        <div>{props.content}</div>
      </div>
    </div>
  );
}
