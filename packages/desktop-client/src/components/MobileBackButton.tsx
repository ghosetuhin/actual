import React from 'react';

import useNavigate from '../hooks/useNavigate';
import CheveronLeft from '../icons/v1/CheveronLeft';
import { type CSSProperties, styles, theme } from '../style';

import Button from './common/Button';
import Text from './common/Text';

type MobileBackButtonProps = {
  style?: CSSProperties;
};

export default function MobileBackButton({ style }: MobileBackButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      type="bare"
      style={{
        color: theme.mobileHeaderText,
        justifyContent: 'center',
        margin: 10,
        paddingLeft: 5,
        paddingRight: 3,
        ...style,
      }}
      hoveredStyle={{
        color: theme.mobileHeaderText,
        background: theme.mobileHeaderTextHover,
      }}
      onPointerUp={() => navigate(-1)}
    >
      <CheveronLeft
        style={{ width: 30, height: 30, margin: -10, marginLeft: -5 }}
      />
      <Text
        style={{
          ...styles.text,
          fontWeight: 500,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        Back
      </Text>
    </Button>
  );
}
