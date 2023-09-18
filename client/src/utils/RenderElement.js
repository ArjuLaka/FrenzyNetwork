/*eslint-disable*/
const sas = "<b>halo nama saya arju";
const bold = /\([bold)]*\)|\[[bold\]]*\]|\<[bold>]*\>/g;
const italic = /\([italic)]*\)|\[[italic\]]*\]|\<[italic>]*\>/g;
const underline = /\([underline)]*\)|\[[underline\]]*\]|\<[underline>]*\>/g;
const del = /\([del)]*\)|\[[del\]]*\]|\<[del>]*\>/g;
const mark = /\([mark)]*\)|\[[mark\]]*\]|\<[mark>]*\>/g;
const img = /\([img)]*\)|\[[img\]]*\]|\<[img>]*\>/g;

function renderArticle(testText) {
  if (bold.test(testText) == true) {
   var resultText = testText.replace(bold, "");
   return (<b>{resultText}</b>)
  } else if (italic.test(testText) == true) {
   var resultText = testText.replace(italic, "");
   return (<i>{resultText}</i>)
  } else if (underline.test(testText) == true) {
    var resultText = testText.replace(underline, "");
    return (<u>{resultText}</u>)
  } else if (del.test(testText) == true) {
    var resultText = testText.replace(del, "");
    return (<del>{resultText}</del>)
  } else if (mark.test(testText) == true) {
    var resultText = testText.replace(mark, "");
    return (<mark>{resultText}</mark>)
  } else if (img.test(testText) == true) {
    var resultText = testText.replace(img, "");
    return (<img src={{resultText}} />)
  }  else {
   return (<p>{testText}</p>)
  }
}

export default renderArticle;