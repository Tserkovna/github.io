function jsonp( url ) {
    return new Promise( function( resolve, reject ) {
        let id = '_' + Math.round( 10000 * Math.random() );
        let callbackName = 'jsonp_callback_' + id;
        window[ callbackName ] = function( data ) {
            delete window[ callbackName ];
            let ele = document.getElementById( id );
            ele.parentNode.removeChild( ele );
            resolve( data );
        }

        let src = url + '&callback=' + callbackName;
        let script = document.createElement( 'script' )
        script.src = src;
        script.id = id;
        script.addEventListener( 'error', reject );
        document.getElementsByTagName('body')[0].appendChild(script);
    });
}


function addObjectToDOM( data, position ) {
    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December' ];
    let elementTemperature = document.getElementsByClassName( 'temperature' )[0];
    let temperature = parseInt( ( data.results[ position ].min_temp + data.results[ position ].max_temp ) / 2  );
    elementTemperature.innerText = `${temperature}${String.fromCharCode( 176 )}C`;
    let elementWind = document.getElementsByClassName( 'wind' )[0];
    if( data.results[ position ].wind_speed == null ) {
        elementWind.innerText = `Information about wind: there is no information.`;
    } else {
        elementWind.innerText = `Information about wind: wind with speed ${data.results[ position ].wind_speed} and direction ${data.results[position].wind_direction}`;
    }
    let elementDate= document.getElementsByClassName( 'date' )[0];
    let date = new Date( data.results[ position ].terrestrial_date );
    elementDate.innerText = `Last updated on ${monthNames[ date.getMonth() ]} ${date.getDate()}, ${date.getFullYear()} (earth time)`;
    document.getElementById( 'loader' ).classList.add( 'isHidden' );
    document.getElementsByClassName( 'container' )[0].classList.remove( 'isHidden' );
}

function changeDOMOnError() {
    document.getElementById( 'loader' ).classList.add( 'isHidden' );
    document.getElementsByClassName( 'container' )[0].classList.remove( 'isHidden' );
    document.getElementsByClassName( 'success' )[0].classList.add( 'isHidden' );
    document.getElementsByClassName( 'error' )[0].classList.remove( 'isHidden' );
}


(function() {

    let page = 1;
    let currentIndex = 0;
    let pageData;

    window.addEventListener( 'load', function() {
        jsonp( `http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp` ).then( function( data ) {
            addObjectToDOM( data, currentIndex );
            pageData = data;
        }).catch( error => {
            changeDOMOnError();
        });
    });

    document.getElementsByClassName( 'previousButton' )[0].addEventListener( 'click', function( event ) {
        event.preventDefault();
        document.getElementsByClassName( 'container' )[0].classList.add( 'isHidden' );
        document.getElementById( 'loader' ).classList.remove( 'isHidden' );
        if( currentIndex < 9 ) {
            ++currentIndex;
            addObjectToDOM( pageData, currentIndex );
        } else {
            ++page;
            currentIndex = 0;
            jsonp( `http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp` ).then( function( data ) {
                addObjectToDOM( data, currentIndex );
                pageData = data;
                if( document.getElementsByClassName( 'success' )[0].classList.contains( 'isHidden' ) ) {
                    document.getElementsByClassName( 'success' )[0].classList.remove( 'isHidden' );
                    document.getElementsByClassName( 'error' )[0].classList.add( 'isHidden' );
                } 
            }).catch( error => {
                changeDOMOnError();
            });
        }
    
    });

    document.getElementsByClassName( 'nextButton' )[0].addEventListener( 'click', function( event ) {
        event.preventDefault();
        document.getElementsByClassName( 'container' )[0].classList.add( 'isHidden' );
        document.getElementById( 'loader' ).classList.remove( 'isHidden' );
        if( currentIndex > 0 ) {
            --currentIndex;
            addObjectToDOM( pageData, currentIndex );
        } else {
            --page;
            currentIndex = 9;
            jsonp( `http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp` ).then( function( data ){
                addObjectToDOM( data, currentIndex );
                pageData = data;
                if( document.getElementsByClassName( 'success' )[0].classList.contains( 'isHidden' ) ) {
                    document.getElementsByClassName( 'success' )[0].classList.remove( 'isHidden' );
                    document.getElementsByClassName( 'error' )[0].classList.add( 'isHidden' );
                } 
            }).catch( error => {
                changeDOMOnError();
            });
        }
    });

})();