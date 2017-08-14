class Student {
    constructor( name, lastname, picture, email, skills, coverImg = 'No information' ) {
        this.name = name;
        this.lastName = lastname;
        this.img = picture;
        this.coverImg = coverImg;
        this.email = email;
        this.skills = skills.split(',');

    }

    addStudentToArray( array ) {
        array.push( this );
    }

    addStudentToTable( table ) {
        let row = createRowWithCells( table.rows[0].cells.length );
        table.appendChild( row );
        addValuesIntoRow( table, this, table.getElementsByTagName("tr").length-1 );

    }
};

( function () {

    let students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://scontent.fhen1-1.fna.fbcdn.net/v/t1.0-9/13654406_578754465640942_346398414832563762_n.jpg?oh=64beb0cc766acd05d9a659ff89d0aef0&oe=5A2FEB0F',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    
    let container = document.getElementById( 'container' );
    
    let form = createStudentForm();
    container.appendChild( form );

    let sortButtons = addSortMenu();
    container.appendChild( sortButtons );

    let table = createTable( students );
    container.appendChild( table );

    let saveButton = document.getElementById( 'saveButton' );
    let cancelButton = document.getElementById( 'cancelButton' );

    let isInArray = -1;


    document.getElementById( 'nameInput' ).addEventListener( 'blur', nameValidation );
    document.getElementById( 'lastnameInput' ).addEventListener( 'blur', lastNameValidation );
    document.getElementById( 'emailInput' ).addEventListener( 'blur', emailValidation );
    document.getElementById( 'pictureInput' ).addEventListener( 'blur', pictureValidation );
    document.getElementById( 'skillsInput' ).addEventListener( 'blur', skillsValidation );

    saveButton.addEventListener( 'click', function( event ) {
        event.preventDefault();
        if( formValidation() ) { 
            let newStudent = createFormNewStudent();
            if( isInArray !== -1 ) {

                students[isInArray] = createFormNewStudent();
                clearRow( table, isInArray+1 );
                addValuesIntoRow( table, newStudent, isInArray+1 );
                isInArray = -1;
            }
            else {
                newStudent.addStudentToArray( students );
                newStudent.addStudentToTable( document.getElementsByTagName( 'tbody' )[0] );
            }
            clearForm( form );
        }
    });

    cancelButton.addEventListener( 'click', function( event ) {
        //without this there will be old validation messages
        event.preventDefault();
        clearForm( form );
    });

    let clicksOnTableHeader = 0;
    table.getElementsByTagName( 'thead' )[0].addEventListener( 'click', function( event ) {
        ++clicksOnTableHeader;
        if( clicksOnTableHeader % 2 === 1 ) {
            orderFromAToZ( students, table );
        } else {
            orderFromZToA( students, table );
        }
    });

    document.getElementsByClassName( 'glyphicon-sort' )[0].addEventListener( 'click', function( event ) {
        //nothing change
    });

    document.getElementsByClassName( 'glyphicon-sort-by-alphabet' )[0].addEventListener( 'click', function( event ) {
        orderFromAToZ( students, table );
    });

    document.getElementsByClassName( 'glyphicon-sort-by-alphabet-alt' )[0].addEventListener( 'click', function( event ) {
        orderFromZToA( students, table )
    });
    

    //show information about student from table
    table.getElementsByTagName( 'tbody' )[0].addEventListener( 'click', function( event ) {
        row = event.target.parentNode;
        if( event.target.classList.contains('glyphicon-edit') ) {
            event.stopPropagation();
            let index = row.parentNode.rowIndex-1;
            let student = students[index];
            addStudentInfoToForm( student );
            isInArray = index;
            formValidation();
        } else {
            if( event.target.classList.contains('glyphicon-trash') ) {
                event.stopPropagation();
                let index = row.parentNode.rowIndex-1;  
                removeStudent( students, index, table );
            } else {
                alert( `Main contact info about student: ${row.childNodes[0].innerText}, ${row.childNodes[1].innerText}` );
                // stopPropagation isn't nesessery here, bacause we put event on tbody
            }
        }
    });

} )();

function orderFromAToZ( students, table ) {
    students.sort( sortByNameIncrease );
    clearTableFromValues( table );
    addValuesIntoTableBody( table, students );
}

function orderFromZToA( students, table ) {
    students.sort( sortByNameDecrease );
    clearTableFromValues( table );
    addValuesIntoTableBody( table, students );
}

function sortByNameIncrease( first, second ) {
    let nameOfFirst = first.lastName.toLowerCase();
    let nameOfSecond = second.lastName.toLowerCase();
    return ( nameOfFirst  < nameOfSecond ) ? -1 : ( nameOfFirst > nameOfSecond ) ? 1 : 0;
}

function sortByNameDecrease( first, second ) {
    return sortByNameIncrease( second, first );
}

function addSortMenu() {
    let ul = document.createElement( 'ul' );
    addSortIconToList( 'glyphicon-sort', ul );
    addSortIconToList( 'glyphicon-sort-by-alphabet', ul );
    addSortIconToList( 'glyphicon-sort-by-alphabet-alt', ul );
    return ul;
}

function addSortIconToList( className, ul ) {
    let li = document.createElement( 'li' );
    let a = document.createElement( 'a' );
    a.setAttribute( 'href', '#' );
    let i = document.createElement( 'i' );
    i.classList.add( 'glyphicon' );
    i.classList.add( className );
    a.appendChild( i );
    li.appendChild( a );
    ul.appendChild( li );
}

function removeStudent( students, index, table ) {
    students.splice( index, 1 );
    table.deleteRow( index+1 );
}

function clearTableFromValues( table ) {
    for( let i = 1; i < table.rows.length; i++ ) {
        clearRow( table, i );
    }
}

function clearRow( table, index ) {
    for( let j = 0; j < table.rows[0].cells.length; j++ ) {
        table.rows[index].cells[j].innerHTML = '';
    }
}

function compareTwoObjects( studentOne, studentTwo ) {
    return ( (studentOne.name === studentTwo.name) && (studentOne.lastName === studentTwo.lastName) &&(studentOne.email === studentTwo.email) && (studentOne.img === studentTwo.img) && (studentOne.skills.join(',') === studentTwo.skills.join(',')) )
}

function addStudentInfoToForm( student ) {
    document.getElementById( 'nameInput' ).value = student.name;
    document.getElementById( 'lastnameInput' ).value = student.lastName;
    document.getElementById( 'emailInput' ).value = student.email;
    document.getElementById( 'pictureInput' ).value = student.img;
    document.getElementById( 'skillsInput' ).value = student.skills;
}


function formValidation() {
    return ( nameValidation() && lastNameValidation() && emailValidation() && pictureValidation() && skillsValidation() );
}

function nameValidation() {
    let name = document.getElementById( 'nameInput' );
    let validationMessage = name.parentNode.childNodes[2];
    validationMessage.classList.remove( 'successMessage' );
    validationMessage.classList.add( 'errorMessage' );
    name = name.value;
    if( name === '' ) {
        validationMessage.innerText = 'This field can\'t be empty!';
        return false;
    }
    if( name.length < 3 ) {
        validationMessage.innerText = 'Name should have at least 3 characters!';
        return false;
    }
    if( name.length > 12 ) {
        validationMessage.innerText = 'Name is too long!';
        return false;
    }
    if( ( /^[A-Za-z]+$/.test( name ) ) === false ) {
        validationMessage.innerText = 'Only letters are available in name!';
        return false;
    }
    validationMessage.innerText = 'Success!';
    validationMessage.classList.remove( 'errorMessage' );
    validationMessage.classList.add( 'successMessage' );
    return true;
}

function lastNameValidation() {
    let lastname = document.getElementById( 'lastnameInput' );
    let validationMessage = lastname.parentNode.childNodes[2];
    validationMessage.classList.remove( 'successMessage' );
    validationMessage.classList.add( 'errorMessage' );
    lastname = lastname.value;
    if( lastname === '' ) {
        validationMessage.innerText = 'This field can\'t be empty!';
        return false;
    }
    if( lastname.length < 3 ) {
        validationMessage.innerText = 'Last name should have at least 3 characters!';
        return false;
    }
    if( lastname.length > 20 ) {
        validationMessage.innerText = 'Last name is too long!';
        return false;
    }
    if( ( /^[A-Za-z]+$/.test( lastname ) ) === false ) {
        validationMessage.innerText = 'Only letters are available in last name!';
        return false;
    }
    validationMessage.innerText = 'Success!';
    validationMessage.classList.remove( 'errorMessage' );
    validationMessage.classList.add( 'successMessage' );
    return true;
}

function emailValidation() {
    let email = document.getElementById( 'emailInput' );
    let validationMessage = email.parentNode.childNodes[2];
    validationMessage.classList.remove( 'successMessage' );
    validationMessage.classList.add( 'errorMessage' );
    email = email.value;
    if( email === '' ) {
        validationMessage.innerText = 'This field can\'t be empty!';
        return false;
    }
    if( ( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email ) ) === false ) {
        validationMessage.innerText = 'Email isn\'t valid!';
        return false;
    }
    validationMessage.innerText = 'Success!';
    validationMessage.classList.remove( 'errorMessage' );
    validationMessage.classList.add( 'successMessage' );
    return true;
}

function pictureValidation() {
    let picture = document.getElementById( 'pictureInput' );
    let validationMessage = picture.parentNode.childNodes[2];
    validationMessage.classList.remove( 'successMessage' );
    validationMessage.classList.add( 'errorMessage' );
    picture = picture.value;
    if( picture === '' ) {
        validationMessage.innerText = 'This field can\'t be empty!';
        return false;
    }
    if( ( /^(ftp|http|https):\/\/[^ "]+$/.test( picture ) ) === false ) {
        validationMessage.innerText = 'Picture url isn\'t valid!';
        return false;
    }
    validationMessage.innerText = 'Success!';
    validationMessage.classList.remove( 'errorMessage' );
    validationMessage.classList.add( 'successMessage' );
    return true;
}

function skillsValidation() {
    let skills = document.getElementById( 'skillsInput' );
    let validationMessage = skills.parentNode.childNodes[2];
    validationMessage.classList.remove( 'successMessage' );
    validationMessage.classList.add( 'errorMessage' );
    skills = skills.value;
    if( skills === '' ) {
        validationMessage.innerText = 'This field can\'t be empty!';
        return false;
    }
    if( ( /^[a-zA-Z]+(,[a-zA-Z]+)*$/.test( skills ) ) === false ) {
        validationMessage.innerText = 'Skills must be separated only by comma!';
        return false;
    }
    validationMessage.innerText = 'Success!';
    validationMessage.classList.remove( 'errorMessage' );
    validationMessage.classList.add( 'successMessage' );
    return true;
}


function createStudentForm() {
    let form = document.createElement( 'form' );
    form.setAttribute( 'id', 'studentForm' );
    let fieldset = document.createElement( 'fieldset' );
    let legend = document.createElement( 'legend' );
    let legendText = document.createTextNode( 'Information about student:' );
    legend.appendChild( legendText );
    fieldset.appendChild( legend );
    
    let nameInput = addFormInput( 'Name:', 'nameInput', 'Student\'s name', 'text' );
    fieldset.appendChild( nameInput );
    
    let lastnameInput = addFormInput( 'Lastname:', 'lastnameInput', 'Student\'s lastname', 'text' );
    fieldset.appendChild( lastnameInput );
        
    let emailInput = addFormInput( 'Email:', 'emailInput', 'Student\'s email', 'email' );
    fieldset.appendChild( emailInput );
    
    let pictureInput = addFormInput( 'Profile picture:', 'pictureInput', 'Student\'s picture' , 'url' );
    fieldset.appendChild( pictureInput );
    
    let skillsInput = addFormInput( 'Skills:', 'skillsInput', 'Student\'s skills', 'text' );
    fieldset.appendChild( skillsInput );

    let cancelButton = addFormButton( 'cancelButton', 'reset', 'Cancel' );
    fieldset.appendChild( cancelButton );
        
    let saveButton = addFormButton( 'saveButton', 'submit', 'Save' );
    fieldset.appendChild( saveButton );
    
    form.appendChild( fieldset );
    return form;
}

function addFormInput( textForLabel, inputID, placeholderText, inputType ) {
    let div = document.createElement( 'div' );
    let label = document.createElement( 'label' );
    let labelText = document.createTextNode( textForLabel );
    label.appendChild( labelText );
    label.setAttribute( 'for', inputID );
    div.appendChild( label );
    let input = document.createElement( 'input' );
    input.setAttribute( 'id', inputID );
    input.setAttribute( 'placeholder', placeholderText );
    input.setAttribute( 'type', inputType );
    div.appendChild( input );
    let validationMessage = document.createElement( 'div' );
    validationMessage.classList.add( 'validation' );
    validationMessage.classList.add( 'errorMessage' );
    validationMessage.innerText = 'This field can\'t be empty!';
    div.appendChild( validationMessage );
    return div;
}



function addFormButton( buttonID, buttonType, buttonText ) {
    let button = document.createElement( 'input' );
    button.setAttribute( 'id', buttonID );
    button.setAttribute( 'type', buttonType );
    let text = document.createTextNode( buttonText ); 
    button.appendChild( text );
    return button;
}

function createFormNewStudent() {
    let name = document.getElementById( 'nameInput' ).value;
    let lastname = document.getElementById( 'lastnameInput' ).value;
    let picture = document.getElementById( 'pictureInput' ).value;
    let email = document.getElementById( 'emailInput' ).value;
    let skills = document.getElementById( 'skillsInput' ).value;
    let student = new Student( name, lastname, picture, email, skills );
    return student;
}


function clearForm( form ) {
    form.reset();
    let messages = document.getElementsByClassName( 'validation' );
    for( let element of messages ) {
        element.classList.add( 'errorMessage' );
        element.classList.remove( 'successMessage' );
        element.innerText = 'This field can\'t be empty!';
    }
}


function createTable( infoForTableBody ) {
    let headerValues = [ 'Student', 'Email', 'Profile picture', 'Skills', 'Controls' ];

    let table = document.createElement( 'table' );
    table.classList.add( 'table' );
    table.classList.add( 'table-hover' );

    createHeaderWithValuesForTable( table, headerValues );
    createBodyForTable( table, infoForTableBody.length, headerValues.length );
    addValuesIntoTableBody( table, infoForTableBody );

    return table;
}

function createHeaderWithValuesForTable( table, headerTitles ) {
    let thead = document.createElement( 'thead' );
    let row = document.createElement( 'tr' );
    let cell;
    for( let title of headerTitles ) {
        cell = document.createElement( 'th' );
        cell.innerHTML = title;
        row.appendChild( cell );

    }

    thead.appendChild( row );
    table.appendChild( thead );
}

function createBodyForTable( table, amountOfRows, amountOfColumns ) {
    let tbody = document.createElement( 'tbody' );
    let row;
    for( let i = 0; i < amountOfRows; i++ ) {
        row = createRowWithCells( amountOfColumns );
        tbody.appendChild( row );
    }

    table.appendChild( tbody );
}

function createRowWithCells( amountOfColumns ) {
    let row = document.createElement( 'tr' );
    let cell;
    for( let j = 0; j < amountOfColumns; j++ ) {
        cell = document.createElement( 'td' );
        row.appendChild( cell );
    }

    return row;
}

function addValuesIntoTableBody( table, array ) {
    let i = 1;
    for( let element of array ) {
        addValuesIntoRow( table, element, i );
        ++i;
    }
}

function addValuesIntoRow( table, student, i ) {
    let row, cell, img, ol, li, edit, remove;
    for( let key in student ) {
        switch( key ) {
            case 'name': 
                    if( ( student.name === '' ) && ( student.lastName === '' ) ) {
                        table.rows[i].cells[0].innerHTML = `No information`;
                    } else {
                        table.rows[i].cells[0].innerHTML = `${ student.name } ${ student.lastName }`;
                    }
                    break;
                case 'email': 
                    if( student.email === '' ) {
                        table.rows[i].cells[1].innerHTML = `No information`;
                    } else {
                        table.rows[i].cells[1].innerHTML = `${ student.email }`;
                    }
                    break;

                // I tried two cases in one like case 'img': case 'Img': ..., but then I call property and it is 
                // important case of letter, that's why I have writeen two diffrent cases    
                case 'img':
                    img = document.createElement( 'img' );
                    if( student.img !== '' ) {
                        img.setAttribute( 'src', student.img );
                    } else {
                        img.setAttribute( 'src', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg' );
                    }
                    img.setAttribute( 'alt', 'Place for image' );
                    img.classList.add( 'table-img' );
                    table.rows[i].cells[2].appendChild( img );
                    break;
                case 'Img': 
                    img = document.createElement( 'img' );
                    if( student.Img !== '' ) {
                        img.setAttribute( 'src', student.Img );
                    } else {
                        img.setAttribute( 'src', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg' );
                    }
                    img.setAttribute( 'alt', 'Place for image' );
                    img.classList.add( 'table-img' );
                    table.rows[i].cells[2].appendChild( img );
                    break;
                case 'skills': 
                    if( student.skills === '' ) {
                        table.rows[i].cells[3].innerHTML = `No information`;
                    } else {
                        ol = document.createElement( 'ol' );
                        student.skills.forEach( function( skill ) {
                        li = document.createElement( 'li' );
                        li.innerHTML = skill;
                        ol.appendChild( li );
                    });
                    table.rows[i].cells[3].appendChild( ol );
                }
                break;
        }
    }

    edit = document.createElement( 'button' );
    remove = document.createElement( 'button' );
    edit.classList.add( 'glyphicon' );
    edit.classList.add( 'glyphicon-edit' );
    remove.classList.add( 'glyphicon' );
    remove.classList.add( 'glyphicon-trash' );
    table.rows[i].cells[4].appendChild( edit );
    table.rows[i].cells[4].appendChild( remove );
}

