export const leftAdd = (state,b) => {
  if(b) state.left+b;
  state.left++
}
export const showLeft = state => {
  console.info(state.left);
}
