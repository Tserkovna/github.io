
var President = Backbone.Model.extend( {
    defaults: {
        id: 0,
        name: '', 
        surname: '',
        rate: 0
    },
   
    validate: function( attributes  ) {
        if( (attributes.name === '') || (attributes.surname === '') ) {
            return 'Please write name and surname!';
        }
    }

});


var PresidentsCollection = Backbone.Collection.extend( {
    model: President
} );


var presidentsCollection = new PresidentsCollection ( [
    { id: 1, name: 'Leonid', surname: 'Kravchuk', rate: 23 },
    { id: 2, name: 'Leonid', surname: 'Kuchma', rate: 18 },
    { id: 3, name: 'Viktor', surname: 'Yushchenko', rate: 57 },
    { id: 4, name: 'Viktor', surname: 'Yanukovych', rate: 2 },
] );

presidentsCollection.push( new President( { id: 5, name: 'Petro', surname: 'Poroshenko', rate: 14} ) );
// presidentsCollection.comparator = 'rate';
// presidentsCollection.sort();
// console.log(presidentsCollection);


var PresidentView = Backbone.View.extend( {
    tagName: 'tr',
    template: _.template('<td><%= id %>.<td><%= name %></td> <td><%= surname %></td> <td><%=rate %></td> <td><button class="edit-button">Edit</button><button class="delete-button">Delete</button></td>'),
    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );
        return this; 
    },
    initialize: function ( obj ) {
        var that = this;
        obj.model.on( 'change', function () {
            that.render();
        } )
    }
});

var PresidentsListView = Backbone.View.extend ({
    tagName: 'tbody',
    render: function () {
        for ( let i = 0; i < this.model.models.length; i++ ) {
            let row = new PresidentView( { model: this.model.models[i] } ).render().$el;
            this.$el.append( row );
        }
        return this;
    }
} );

var DeleteButtonView = Backbone.View.extend( {
    initialize: function () {
        $('.delete-button').on('click', function () {
            let id = event.target.closest('tr').childNodes[0].innerText.split('.', 1)[0];
            for( let i=0; i<presidentsCollection.models.length; i++ ) {
                if( id == presidentsCollection.models[i].attributes.id ) {
                   presidentsCollection.models.splice(i,1);
                   break;
                }
            }
            $('tbody').empty();
            presidents.render();
            remove.initialize();
            inputs.initialize();
        });
    }
});

var InputsView = Backbone.View.extend({
    initialize: function () {
        let id;
        $('.edit-button').on('click', function () {
            id = event.target.closest('tr').childNodes[0].innerText.split('.', 1)[0];
            let obj = {};
            for( let i=0; i<presidentsCollection.models.length; i++ ) {
                if( id == presidentsCollection.models[i].attributes.id ) {
                   obj = presidentsCollection.models[i].attributes;
                   break;
                }
            }
            $('.form-name').val(obj.name);
            $('.form-surname').val(obj.surname);
            $('.form-rate').val(obj.rate);
            $('.edit-form' ).show();
        });
        $('.change-button').on('click', function () {
            for( let i=0; i<presidentsCollection.models.length; i++ ) {
                if( id == presidentsCollection.models[i].attributes.id ) {
                    presidentsCollection.models[i].attributes.name =  $('.form-name').val();
                    presidentsCollection.models[i].attributes.surname =  $('.form-surname').val();
                    presidentsCollection.models[i].attributes.rate =  $('.form-rate').val();
                    break;
                }
            }
            $('.edit-form' ).hide();
            $('tbody').empty();
            presidents.render();
            remove.initialize();
            inputs.initialize();
        });
    }
});

$('.edit-form' ).hide();
var presidents = new PresidentsListView( { model: presidentsCollection } );
$( '.table' ).append( presidents.render().$el );
var remove = new DeleteButtonView(presidents);
var inputs = new InputsView(presidents);
