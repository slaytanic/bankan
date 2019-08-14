import axios from 'axios';

export function getBoard(boardId) {
  return axios.get(`/boards/${id}`);
}
