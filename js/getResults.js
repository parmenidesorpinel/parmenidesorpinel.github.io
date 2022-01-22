async function getResults() {
    const response = await axios.get(
      `https://docs.google.com/spreadsheets/d/13FvUoWdDIS1XT2XxjfaE6g05W8OUeTfqDSjra_RZMIs/gviz/tq?tqx=out:json`
    );
    return response;
   }

getResults().then((dta) => {
    let json = dta?.data.replace(/\/\O_o\\//g,'')
    json = json.replace(/google.visualization.Query.setResponse\(/g,'')
    json = json.replace(/\)\;/g,'')
    setResult(JSON.parse(json).table.rows)
  }).catch( (err) => {
    console.log("-----err", err);
  });

