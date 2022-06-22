let increment = document.getElementById("increment")

let count = 0

function incP() {
    count = count + 1
    increment.innerText = count
}

function incM() {
    count = count - 1
    increment.innerText = count
}

function incT() {
    count = count * 2
    increment.innerText = count
}

function incD() {
    count = count / 2
    increment.innerText = count
}

function incZ() {
    count = count - count
    increment.innerText = count
}
