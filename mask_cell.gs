//Creates a new tab in the spreadsheet UI to easily access the function
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('My new tab')
    .addItem('Mask selected cells', 'mask_cells')
    .addItem('Reveal selected cells', 'reveal_cells')
    .addToUi();
}

function mask_cells(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = ss.getActiveRange(); //the range selected
  var column = range.getColumn(); //takes the column of the range 
  var linestart = range.getRow(); //takes the first row of the range
  var lineend = range.getLastRow(); //takes the last row of the range
  //optionnal if you want to verify the range
  //Logger.log("col "+column+" - lines "+linestart+" to "+lineend);

  if (linestart == lineend){
    var cell = ss.getActiveCell();
    let colbackgnd = cell.getBackground();
    cell.setFontColor(colbackgnd);
  
  } else {
    
    for (i = linestart ; i < lineend+1 ; i ++){
    let cell = ss.getRange([i],colonne);
    let colbackgnd = cell.getBackground();
    cell.setFontColor(colbackgnd);
    }
  }
}

function reveal_cells(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = ss.getActiveRange();
  var colonne = range.getColumn()
  var linestart = range.getRow();
  var lineend = range.getLastRow();
  //optionnal if you want to verfify the range
  //Logger.log(column+" - "+linestart+" - "+lineend);

  if (linestart == lineend){
    var range = ss.getActiveCell();
    range.setFontColor("#1c4948");
  }
  else{
  for (i = linestart ; i < lineend+1 ; i ++){
    let cell = ss.getRange([i],column);
    cell.setFontColor("#1c4948");
  }
  }
}
