const ax = new XMLHttpRequest();

document.getElementById('search').addEventListener('click', function() {
    // Perform an AJAX request using fetch()
    // fetch('http://localhost/info2180-lab4/superheroes.php')
    //     .then(response => response.text()) // Get the response as text (HTML content)
    //     .then(data => {
    //         // Create an alert showing the superheroes
    //         alert('Superheroes: \n' + data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching superheroes:', error);
    //     });

    // $.ajax({
    //     url: "http://localhost/info2180-lab4/superheroes.php",
    //     method: "GET",
    //     success: function(result) {
    //         alert(result);
    //     },
    //     error: function(xhr, status, error) {
    //         console.error("Error:", status, error);
    //         alert("Failed to retrieve data: " + status + " - " + error);
    //     }
    // });

    ax.onreadystatechange = solution;
    
    ax.open('GET','superheroes.php');
    ax.send();
    
});

function solution()
{
        if (ax.readyState === XMLHttpRequest.DONE)
        {
            if (ax.status === 200)
            {
                let response = ax.responseText;
                alert(response);
            }
        }

    
}