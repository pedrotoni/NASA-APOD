window.onload = function() {

    alert("A DATA SELECIONADA NÃO PODE SER MENOR QUE 16/06/1995 ou MAIOR QUE A DATA DE HOJE!")
    const nasaButton = document.querySelector("#button-nasa");
    nasaButton.addEventListener("click", function(event) {

        event.preventDefault();

        const dateInput = $("#date-nasa-input").val();
        const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=9zHacpnjck02rtft8KhIvbQ5MhGidBBBbc8Vjohl&date=${dateInput}`;
        
        $.ajax({
            method: "GET",
            url: nasaURL,
            dataType: "json",

            success: function(nasaData) {

                $("#name-nasa").html(`<h2>${nasaData.title}</h2>`);

                if (nasaData.media_type == "image") {

                $("#image-nasa").html(`<img src="${nasaData.url}" width="450" height="325">`);

                } else if (nasaData.media_type == "video") {

                $("#image-nasa").html(`<iframe src="${nasaData.url}" width="450" height="325"></iframe>`);

                } else if (nasaData.media_type == "other") {

                $("#name-nasa").html(`<h2>IMAGEM NÃO ENCONTRADA PARA ESTA DATA! :(</h2>`)    
                $("#image-nasa").html(`<img src="https://ak.picdn.net/shutterstock/videos/1009564493/thumb/9.jpg" width="450" height="325">`);

                }

            },

            error: function() {

                $("#name-nasa").html(`<h6>ERRO: A DATA DEVE SER MAIOR QUE 16/06/1995 e NÃO PODE SER MAIOR QUE A DATA DE HOJE!</h6>`)    
                $("#image-nasa").html(`<img src="https://ak.picdn.net/shutterstock/videos/1009564493/thumb/9.jpg" width="450" height="325">`);

                
            }
        })
    })
}
