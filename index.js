<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Computing Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<nav>
    <h1>Quantum Computing</h1>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#algorithms">Algorithms</a></li>
        <li><a href="#simulator">Simulator</a></li>
    </ul>
</nav>

<section id="home">
    <h2>Quantum Computing</h2>
    <p>
        Created by Enoch Ajewole and Armaan Singh.
    </p>

    <p>
        Quantum computers use qubits instead of regular bits.
        Unlike classical bits that are either 0 or 1, qubits can
        exist in multiple states at the same time through
        superposition.
    </p>
</section>

<section id="algorithms">
    <h2>The Algorithms</h2>

    <div class="card">
        <h3>Deutsch-Jozsa Algorithm</h3>
        <p>
            This algorithm determines whether a function is
            constant or balanced.
        </p>

        <p>
            For a 10-bit input, a classical computer may need
            513 queries, while a quantum computer only needs 1.
        </p>
    </div>

    <div class="card">
        <h3>Bernstein-Vazirani Algorithm</h3>
        <p>
            This algorithm finds a hidden secret bit string.
        </p>

        <p>
            A classical computer needs one query per bit,
            while a quantum computer can find the entire
            secret string with only one query.
        </p>
    </div>
</section>

<section id="simulator">
    <h2>Our Java Simulator</h2>

    <p>
        We built a quantum computing simulator in Java
        from scratch.
    </p>

    <ul>
        <li>Complex.java - Handles complex numbers</li>
        <li>QuantumState.java - Stores qubit states</li>
        <li>QuantumGate.java - Applies quantum gates</li>
        <li>QuantumMeasurement.java - Simulates measurement</li>
        <li>DeutschJozsa.java - Runs Deutsch-Jozsa</li>
        <li>BernsteinVazirani.java - Runs Bernstein-Vazirani</li>
    </ul>

    <h3>Results</h3>

    <table>
        <tr>
            <th>Algorithm</th>
            <th>Classical Queries</th>
            <th>Quantum Queries</th>
        </tr>
        <tr>
            <td>Deutsch-Jozsa (10 bits)</td>
            <td>513</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Bernstein-Vazirani (10 bits)</td>
            <td>10</td>
            <td>1</td>
        </tr>
    </table>
</section>

<footer>
    <p>AP Computer Science Project - Quantum Computing Simulator</p>
</footer>

</body>
</html>
