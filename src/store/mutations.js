import Vue from 'vue'
export const leftAdd = (state,b) => {
  if(b) state.left+b;
  state.left++
}
export const showLeft = state => {
  // console.info(state.left);
}
export const getBaseWidth = state => {
  // console.info(state.baseWidth);
  // return 10;
}
export const getPiecesPosition=(state,pieces)=>{
  // console.info(pieces.piecesWidth,pieces.piecesArr);
  let tmp=state.piecesPosition.left+Number(pieces.piecesWidth.replace('px',''));

  if(tmp>state.maxLeft){
    // 换行
    state.piecesPosition.left=state.piecesPosition.initLeft;
    // 更新高度
    state.piecesPosition.top+=(state.maxHeight+1)*state.baseWidth;
  }
  // 更新最高值
  if(pieces.piecesArr.length>state.maxHeight){
    state.maxHeight=pieces.piecesArr.length;
  }
}
export const setPiecesPosition=(state,pieces)=>{
  // console.info(pieces.piecesWidth,pieces.piecesArr);
  let tmp=state.piecesPosition.left+Number(pieces.piecesWidth.replace('px',''));

  if(tmp>state.maxLeft){
    // 换行
    state.piecesPosition.left=state.piecesPosition.initLeft;
    // 更新高度
    state.maxHeight=pieces.piecesArr.length;
    state.piecesPosition.top+=(state.maxHeight+1)*state.baseWidth;
  }else {
    state.piecesPosition.left=tmp+40;
  }
  // 更新最高值
  if(pieces.piecesArr.length>state.maxHeight){
    state.maxHeight=pieces.piecesArr.length;
  }
}
