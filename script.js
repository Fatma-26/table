function calculate() {
    const rho = parseFloat(document.getElementById("rho").value);
    const mu = parseFloat(document.getElementById("mu").value);
    const tValues = [1, 2,5, 10, 15, 20];

    if (isNaN(rho) || isNaN(mu) || rho <= 0 || rho >= 1 || mu <= 0) {
        alert("Please enter valid values: ρ (0 < ρ < 1) and μ > 0.");
        return;
    }

    // Calculate E(W)
    const ew = rho / (mu * (1 - rho));

    // Calculate P(W > t) for all t values
    const probabilities = tValues.map(t => {
        return rho * Math.exp(-mu * (1 - rho) * t);
    });

    // Display results
    const tableBody = document.getElementById("resultsTable");
    tableBody.innerHTML = `
        <tr>
            <td>${rho}</td>
            <td>${ew .toFixed(5)}</td>
            <td>${probabilities[0] .toFixed(5)}</td>
            <td>${probabilities[1] .toFixed(5)}</td>
            <td>${probabilities[2] .toFixed(5)}</td>
            <td>${probabilities[3] .toFixed(5)}</td>
            <td>${probabilities[4] .toFixed(5)}</td>
            <td>${probabilities[5] .toFixed(5)}</td>
        </tr>
    `;
}