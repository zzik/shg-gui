
const makeRows = () => {
    const textArea = document.querySelector('#maybe')
    let trimmed = textArea.value.trim()
    let display = document.querySelector('#list')
    
    trimmed.replace('  ','')
    trimmed.replace('/\n/g','')
    trimmed.replace('/\t/g','')
    let prepare = trimmed.split(/\r?\n|\r|\n/g)
    let alertContent = prepare.map((el, i) => `<row label="r${i+1}">${el}</row>`)
    

    alertContent.forEach(item => {
        let entry = document.createElement('li')
        entry.appendChild(document.createTextNode(item))
        display.appendChild(entry)
    })
}
const makeCols = () => {
    const textArea = document.querySelector('#maybe')
    let trimmed = textArea.value.trim()
    let display = document.querySelector('#list')
    
    trimmed.replace('  ','')
    trimmed.replace('/\n/g','')
    trimmed.replace('/\t/g','')
    let prepare = trimmed.split(/\r?\n|\r|\n/g)
    let alertContent = prepare.map((el, i) => `<col label="c${i+1}">${el}</col>`)
    
    alert(alertContent.join(''))

    alertContent.forEach(item => {
        let entry = document.createElement('li')
        entry.appendChild(document.createTextNode(item))
        display.appendChild(entry)
    })
}