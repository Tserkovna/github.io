var model = {
    currentPerson: {},
    allPersons: [
        {
        name: 'Lily Butler',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Waller Perry',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Tammi Donovan',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
      },
      {
        name: 'Doreen Flowers',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
      },
      {
        name: 'Price Pace',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
      },
      {
        name: 'Larson Maldonado',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
      },
      {
        name: 'Berg Bolton',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Mack Lott',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
      },
      {
        name: 'Rosanna Mcleod',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
      },
      {
        name: 'Rosalie Rice',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
      },
      {
        name: 'Virginia Buchanan',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
      },
      {
        name: 'Lorna Stein',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
      },
      {
        name: 'Rosalie Steele',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
      },
      {
        name: 'Wilcox Boyd',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
      },
      {
        name: 'Ollie Rice',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
      }
    ]
};

var control = {
    init: function() {
        sortingPersonsView.init();
        sortingPersonsView.render();

        listView.init();
        listView.render();

        scoresView.init();
        scoresView.render();

        profileView.init();

        personBriefInfoView.init();
    },
    getAmountOfPersons: function() {
        return model.allPersons.length;
    },
    getAllNames: function() {
        var names = [];
        model.allPersons.forEach(function(item){
            names.push(item.name);
        });
        return names;
    },
    getAllScores: function() {
        var scores = [];
        model.allPersons.forEach(function(item){
            scores.push(item.score);
        });
        return scores;
    },
    viewListView: function() {
        listView.render();
    },
    viewScoresView: function() {
        scoresView.render();
    },
    pushElementUpper: function(currentIndex) {
        let currentPerson = model.allPersons[currentIndex]; 
        let previousIndex = currentIndex - 1;
        if(previousIndex >= 0) {
            model.allPersons[currentIndex] = model.allPersons[previousIndex];
            model.allPersons[previousIndex] = currentPerson;
            this.viewListView();
            this.viewScoresView();
        }
        
    },
    pushElementLower: function(currentIndex) {
        let currentPerson = model.allPersons[currentIndex]; 
        let nextIndex = currentIndex + 1;
        if(nextIndex < this.getAmountOfPersons()) {
            model.allPersons[currentIndex] = model.allPersons[nextIndex];
            model.allPersons[nextIndex] = currentPerson;
            this.viewListView();
            this.viewScoresView();
        }
    },
    setCurrentPerson: function(index) {
        model.currentPerson = model.allPersons[index];
        this.viewCurrentProfile();
        this.viewCurrentPersonBriefInfo();
    },
    getCurrentPerson: function() {
        return model.currentPerson;
    },
    viewCurrentProfile: function() {
        profileView.render();
    },
    viewCurrentPersonBriefInfo: function() {
        personBriefInfoView.render();
    },
    setCurrentPersonScore: function(value) {
        model.currentPerson.score = value;
        profileView.render();
        personBriefInfoView.render();
        scoresView.render();
    }
};

var sortingPersonsView = {
    init: function(){
        this.$container = $('.sortingPersons');
        this.handleClicks();
    },
    render: function() {
        var listStr = '';
        var length = control.getAmountOfPersons();
        for(let i=0; i<length; i++) {
            listStr += '<li><div class="arrow-up"></div><div class="arrow-down"></div></li>';
        }
        this.$container.html(listStr);
    },
    handleClicks: function() {
        this.$container.on('click','.arrow-up', function(e){
            var currentElementIndex = $(e.target).parent('li').index();
            control.pushElementUpper(currentElementIndex);
        });
        this.$container.on('click','.arrow-down', function(e){
            var currentElementIndex = $(e.target).parent('li').index();
            control.pushElementLower(currentElementIndex);
        });
    }
};

var listView = {
    init: function() {
        this.$container = $('.names');
        this.handleClicks();
    },
    render: function() {
        var listStr = '';
        control.getAllNames().forEach(function(name){
            listStr += '<li>'+name+'</li>';
        });
        this.$container.html(listStr);
    },
    handleClicks: function() {
        this.$container.on('click','li', function(e){
            var currentIndex = $(e.target).index();
            control.setCurrentPerson(currentIndex);
        });
    }
};


var scoresView = {
    init: function() {
        this.$container = $('.scores');
        this.handleClicks();
    },
    render: function() {
        var listStr = '';
        control.getAllScores().forEach(function(score){
            listStr +=   '<li>'
                        +'  <span>'+score+'</span>'
                        +'  <input class="hidden score-input" type="text" value="'+score+'">'
                        +'</li>';
        });
        this.$container.html(listStr);
    },
    handleClicks: function() {
        this.$container.on('click', 'li', function(e) {
            var $currentLi = $(e.target);
            var $currentSpan = $currentLi.find('span');
            var $currentInput = $currentLi.find('input.score-input');
            var currentIndex = $currentLi.index();
            if(!$currentInput.is('.hidden')) {
                return false;
            }
            control.setCurrentPerson(currentIndex);
            $currentSpan.addClass('hidden');
            $currentInput.removeClass('hidden').focus();
        });
        this.$container.on('focusout .score-input', function(e) {
            var newScore = $(e.target).val();
            control.setCurrentPersonScore(newScore);
        });
    }
};


var profileView = {
    init: function() {
        this.$container = $('.profile');
    },
    render: function() {
        var currentPerson = control.getCurrentPerson();
        var tempalte = '<img src="'+currentPerson.photoUrl+'">'
                        + '<h3>'+ currentPerson.name +'</h3>'
                        + '<p>Score: '+currentPerson.score+'</p>';
        this.$container.html(tempalte);
    }
};

var personBriefInfoView = {
    init: function() {
        this.$container = $('.personBriefInfo');
    },
    render: function() {
        var currentPerson = control.getCurrentPerson();
        this.$container.find('strong').text(currentPerson.name);
        this.$container.find('span').text(currentPerson.score);
        if(this.$container.hasClass('hidden')) {
            this.$container.removeClass('hidden');
        }
    }
};



control.init();