let tableArray = [];

let tableTitlesArray = [];

let objectTable;

const sharedLinkFetch = "https://www.dropbox.com/scl/fi/1e2ytav07ml1riekgs71d/table.json?rlkey=thelsora1zrtsah5qzjyz9fch&st=yhp1wcxc&dl=0";

const directLink = sharedLinkFetch.replace("www.dropbox.com", "dl.dropboxusercontent.com");

fetch(directLink)
    .then(table => table.json())
    .then((table) => {
        for (let i = 0; i < table.table.length; i++) {
            tableTitlesArray.push(table.table[i].name)
            for (element of table.table[i].content) {
                tableArray.push(element[0])
            }
            for (element of table.table[i].content) {
                tableArray.push(element[1])
            }
        }
        console.log(tableTitlesArray)
        console.log(tableArray)

        objectTable = { ...table };

        let numberTitle = 0;

        document.querySelectorAll('.table-element-title-ym').forEach((element) => {

            element.innerHTML = tableTitlesArray[numberTitle];

            numberTitle++;

        });

        let number = 0;

        document.querySelectorAll('.table-data-ym').forEach((element) => {

            element.innerHTML = tableArray[number];

            number++;
            /*
            element.addEventListener('input', (event) => {
                console.log(`Value changed to: ${event.target.value}`);
            });
            */
        });
    });