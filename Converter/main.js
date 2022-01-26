document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let ft = e.target.value;
    document.getElementById("mtrOutput").innerHTML = ft * 0.3048;
})

document.getElementById("kphInput").addEventListener("input", e => {
    let kph = e.target.value;
    document.getElementById("mpsOutput").innerHTML = kph * (5/18);
})

document.getElementById("celciousInput").addEventListener("input", e => {
    let celcious = e.target.value;
    document.getElementById("FahrenheitOutput").innerHTML = (celcious * 1.8) + 32;
})