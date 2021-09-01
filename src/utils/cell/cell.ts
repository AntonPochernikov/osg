export type CoordinatesType = [number, number];

export type CellType = {
  coordinates: CoordinatesType,
  state: string,
  color: string,
  content: any,
  isCell: true,
};

export const isCell = (cell: any): cell is CellType => (
  typeof cell === 'object' && cell !== null && cell.isCell
);

export const checkCell = (cell: any) => {
  if (!isCell(cell)) {
    const value = typeof cell === 'object' ? JSON.stringify(cell, null, 2) : String(cell);
    throw new Error(`Argument must be cell, but it was '${value}'`);
  }
};

export const checkCells = (...cells: any[]) => cells.forEach((c) => {
  checkCell(c);
});

export const getCoordinates = (cell: CellType) => {
  checkCell(cell);
  return cell.coordinates;
};

export const getCol = (cell: CellType) => getCoordinates(cell)[0];

export const getRow = (cell: CellType) => getCoordinates(cell)[1];

export const getId = (cell: CellType) => {
  checkCell(cell);
  return getRow(cell) * 10 + getCol(cell);
};

export const getState = (cell: CellType) => {
  checkCell(cell);
  return cell.state;
};

export const getColor = (cell: CellType) => {
  checkCell(cell);
  return cell.color;
};

export const getContent = (cell: CellType) => {
  checkCell(cell);
  return cell.content;
};

export const makeCell = (coordinates: CoordinatesType, {
  state = 'empty',
  color = 'black',
  content = null,
}: {
  state?: string,
  color?: string,
  content?: any,
} = {}): CellType => {
  const [col, row] = coordinates;

  return {
    coordinates: [col, row],
    state,
    color,
    content,
    isCell: true,
  };
};
