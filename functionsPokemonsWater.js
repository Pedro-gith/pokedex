$( document ).ready(function() {
    fetchPokemonsFire();
});

function fetchPokemonsFire(){
    $.getJSON( "https://pokeapi.co/api/v2/type/11", function( data ) {

        
        data.pokemon.forEach(element => {
            let card = '';
            card = "<div class=' col-lg-3 col-md-3 col-sm-12 h-auto my-2'><div class='card overflow-hidden h100a maxwidth100' style='width: 18rem;'>";
            

            $.getJSON( element.pokemon.url, function( response ) {
                
                let pokemonName = element.pokemon.name;
                let pokemonImage = response.sprites.front_default;
                let pokemonTypes = response.types;

                card = card  + "<div class='bgcol100a w100a col100a text-center font-weight-bold text-capitalize'>"+pokemonName+"</div>";
                card = card +"<img class='card-img-top maxwidth100 h100a' src='"+pokemonImage+"' alt='Card image cap'>";
                
                card = card + "<div class='card-body'><p class='card-text text-center'>";
                
                let badge = '';
                pokemonTypes.forEach(element => {
                    let color = '';
                    if(element.type.name == 'fire'){
                        color = 'danger';
                    }
                    if(element.type.name == 'grass'){
                        color = 'success';
                    }
                    if(element.type.name == 'poison'){
                        color = 'warning';
                    }
                    if(element.type.name == 'bug'){
                        color = 'info';
                    }
                    if(element.type.name == 'water'){
                        color = 'primary';
                    }
                    if(element.type.name == 'flying'){
                        color = 'secondary';
                    }
                    if(element.type.name == 'normal'){
                        color = 'light';
                    }
                    badge = badge + "<span class=' mx-1 badge badge-"+color+"'>"+element.type.name+"</span>";  
                });

                card = card + badge;

                card = card + "</p></div></div></div>";

                console.log(card);

                $( "#mainRowWater" ).append( card );
            });
        });
    });
}