const allowedMoves = {
  'up': ['left', 'right', 'up'],
  'right': ['up', 'down', 'right'],
  'down': ['left', 'right', 'down'],
  'left': ['up', 'down', 'left'],
};

export function isAllowedDirection(prev, next) {
  const allowedDirections = allowedMoves[prev];
  if (!allowedDirections) {
    throw new Error(`Wrong direction, IS_ALLOWED_DIRECTION: ${prev}`);
  }

  return allowedDirections.includes(next);
}
