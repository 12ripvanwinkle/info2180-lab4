document.getElementById('search').addEventListener('click', function() {
    const superheroInput = document.getElementById('superhero').value.trim();

    // Check if the input is empty
    if (superheroInput === '') {
        // If the input is empty, perform the fetch to get the full list of superheroes
        fetch('superheroes.php')
            .then(response => response.text()) // Get the response as text (HTML content)
            .then(data => {
                // Assuming the response is a list of superheroes in <li> tags (from your PHP response)
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
                document.getElementById('result').innerHTML = 'Error fetching superheroes.';
            });
    } else {
        // If the input is not empty, perform the fetch to search for a specific superhero
        fetch(`superheroes.php?query=${encodeURIComponent(superheroInput)}`)
            .then(response => response.text()) // Get the response as text (HTML content)
            .then(data => {
                // Check if a superhero is returned or not
                if (data === 'No superhero found.') {
                    document.getElementById('result').innerHTML = 'Superhero Not Found';
                } else {
                    // Display the superhero's data (Alias, Name, Biography) in the specified format
                    document.getElementById('result').innerHTML = data;
                }
            })
            .catch(error => {
                console.error('Error fetching superhero data:', error);
                document.getElementById('result').innerHTML = 'Error fetching superhero data.';
            });
    }
});
