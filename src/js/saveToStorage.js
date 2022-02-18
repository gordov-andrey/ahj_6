export default function saveToStorage() {
  const taskBoardElement = document.body.querySelector('.board-wrapper');
  const taskBoardHtml = taskBoardElement.innerHTML;
  localStorage.setItem('list', JSON.stringify(taskBoardHtml));
}
