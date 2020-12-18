import { ICoordinate, ISnake } from '../interfaces';
import { TDirection } from '../types';

export const nextSnakeHead = (snake: ISnake, direction: TDirection): ICoordinate => {
	switch (direction) {
		case 'up':
			return {
				row: snake.head.row - 1,
				col: snake.head.col,
			};
		case 'left':
			return {
				row: snake.head.row,
				col: snake.head.col - 1,
			};
		case 'down':
			return {
				row: snake.head.row + 1,
				col: snake.head.col,
			};
		case 'right':
			return {
				row: snake.head.row,
				col: snake.head.col + 1,
			};
		default:
			return {
				row: 0,
				col: 0,
			};
	}
};

export const areMatchingCoordinates = (c1: ICoordinate, c2: ICoordinate) => {
	if (c1.row !== c2.row) return false;
	if (c1.col !== c2.col) return false;
	return true;
};