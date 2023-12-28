let monthName = prompt("Ayin adini daxil edin:")

switch (monthName) {
    case "Yanvar":
        console.log(`${monthName} >> Ilin 1-ci ayidir, qis fesli `)
        break;
    case "Fevral":
        console.log(`${monthName} >> Ilin 2-ci ayidir, qis fesli`)
        break;
    case "Mart":
        console.log(`${monthName} >> Ilin 3-cu ayidir, yaz fesli `)
        break;
    case "Aprel":
        console.log(`${monthName} >> Ilin 4-cu ayidir, yaz fesli`)
        break;
    case "May":
        console.log(`${monthName} >> Ilin 5-ci ayidir, yaz fesli `)
        break;
    case "Iyun":
        console.log(`${monthName} >> Ilin 6-ci ayidir, yay fesli`)
        break;
    case "Iyul":
        console.log(`${monthName} >> Ilin 7-ci ayidir, yay fesli `)
        break;
    case "Avqust":
        console.log(`${monthName} >> Ilin 8-ci ayidir, yay fesli`)
    break;
    case "Sentyabr":
        console.log(`${monthName} >> Ilin 9-cu ayidir, payiz fesli `)
        break;
    case "Oktyabr":
        console.log(`${monthName} >> Ilin 10-cu ayidir, payiz fesli`)
        break;
    case "Noyabr":
        console.log(`${monthName} >> Ilin 11-ci ayidir, payiz fesli `)
        break;
    case "Dekabr":
        console.log(`${monthName} >> Ilin 12-ci ayidir, qis fesli`)
        break;
    default:
        console.log(`${monthName} >> Bele ay yoxdu!!!`)
        break;
}


