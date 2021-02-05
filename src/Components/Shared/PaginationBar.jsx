import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

function PaginationBar({
  readOnly = false,
  current = 1,
  min = 1,
  max = 1,
  onChangePage = () => {},
}) {
  const prev = current - 1;
  const next = current + 1;
  const isFirst = current <= min;
  const isLast = current >= max;

  const handleClick = page => () => onChangePage(page);

  return (
    <Pagination className="pt-2 mb-0 justify-content-center">
      <Pagination.First
        disabled={isFirst || readOnly}
        onClick={handleClick(min)}
      />
      <Pagination.Prev
        disabled={isFirst || readOnly}
        onClick={handleClick(prev)}
      />

      {!isFirst && (
        <Pagination.Item disabled={readOnly} onClick={handleClick(prev)}>
          {prev}
        </Pagination.Item>
      )}

      <Pagination.Item active={true}>{current}</Pagination.Item>

      {!isLast && (
        <Pagination.Item disabled={readOnly} onClick={handleClick(next)}>
          {next}
        </Pagination.Item>
      )}

      <Pagination.Next
        disabled={isLast || readOnly}
        onClick={handleClick(next)}
      />
      <Pagination.Last
        disabled={isLast || readOnly}
        onClick={handleClick(max)}
      />
    </Pagination>
  );
}

export default PaginationBar;
