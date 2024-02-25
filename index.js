// code your solution here
const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
    //...
  ];
  
  function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    
    // Check if a win was found, and return the year, otherwise return undefined using (trinary condition)
    return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(record));
  