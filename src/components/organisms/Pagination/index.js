import React from 'react';
import propTypes from 'prop-types';
import { Button, ButtonGroup } from '@blueprintjs/core';

const Pagination = ({ current, total, onClick }) => (
  <ButtonGroup>
    {current > 1 && (
      <>
        <Button icon="double-chevron-left" onClick={() => onClick(1)} />
        <Button icon="chevron-left" onClick={() => onClick(current - 1)} />
      </>
    )}
    <Button tagName="span" text={`${current} of ${total}`} />
    {current < total && (
      <>
        <Button icon="chevron-right" onClick={() => onClick(current + 1)} />
        <Button icon="double-chevron-right" onClick={() => onClick(total)} />
      </>
    )}
  </ButtonGroup>
);

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  current: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Pagination;
