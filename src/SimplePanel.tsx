import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
import "./style.css"

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  let activites: HTMLElement[] = []
  for (let i = 1; i < 15; i++) {
    activites.push(
      <div className="card">
        <p className="card-title">Activity n°{i}</p>
        <p>Just an activity</p>
      </div>
    )
  }
  return (
    <div className="test-plugin">
        <div className="card-list">
          {activites}
        </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
