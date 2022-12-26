// create input 9x
for (let i = 1; i <= 9; i++) {
	document.querySelector(".matrixs").innerHTML += '<input type="number" onkeypress="if(this.value.length >= 2){return false;}"/>';
}

// select button
const btn = document.querySelector("button");

// event click
btn.addEventListener("click", () => {
    alert("Cara penyelesaian ke-2 masih belum akurat coy, jadi cek ulang")
	// select input
	const x = document.querySelectorAll("input");

	const a = x[0].value,
		b = x[1].value,
		c = x[2].value,
		d = x[3].value,
		e = x[4].value,
		f = x[5].value,
		g = x[6].value,
		h = x[7].value;
	i = x[8].value;
	// matrixs determine
	function determine() {
		const result = [
			[a, b, c],
			[d, e, f],
			[g, h, i]
		];
		return math.det(result);
	}

	// show result
	let ln = "<br><br>"
	// 1st way
	document.querySelector("#result").innerHTML = `
              detA = (${a}.${e}.${i}) + (${b}.${f}.${g}) + 
                     (${c}.${d}.${h}) - (${b}.${d}.${i}) - 
                     (${a}.${f}.${h}) - (${c}.${e}.${g}) 
                     ${ln}
              detA = (${a*e*i}) + (${b*f*g}) + (${c*d*h}) - 
                      (${b*d*i}) - (${a*f*h}) - (${c*e*g})
                      ${ln}
              detA = ${determine()} 
                      ${ln}`;
         
	// 2nd way
        /*
	document.querySelector("#way2").innerHTML = `
	
              det A = ${a}((${e}.${i})-(${f}.${h}))  -  ${b}((${d}.${i}) - (${f}.${g}))  +  ${c}((${d}.${h}) - (${e}.${g})) <br><br>
              det A = ${a}(${e*i} - ${f*h}) + ${b >= 0 ? b : Math.abs(b)}(${d*i} - ${f*g}) + ${c}(${d*h} - ${e*g}) <br><br>
              det A = ${a}(${e*i-f*h}) + ${b >= 0 ? b : Math.abs(b)}(${d*i-f*g}) + ${c}(${d*h-e*g}) <br><br>
              det A = ${a*(e*i-f*h)} + ${b >= 0 ? b : Math.abs(b)*(i*d-g*f)} + ${c*(d*h-e*g)} <br><br>
              det A = ${determine()}`;
        */
   document.querySelector("#det").innerHTML = `Jadi hasil dari determinan matriks A adalah  ${determine()}`;
});
