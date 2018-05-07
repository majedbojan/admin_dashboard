export function selectBook(book) {
  // console.log('A book has been selected is', book);
  return {
    type: 'SELECTED_BOOK',
    payload: book
  }
}
