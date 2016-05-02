function FaceView() {

    var self = this;

    self.media = {
        face : ['head.png','head.png','head.png','head.png'],        
        mouth : ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'],

    };
    self.picture = {
        face: 'head.png',
        mouth : '1.png'
    };    

    self.initialPicture = function () {
        $('.face').attr('src','images/'+self.picture.face);
        $('.mouth').attr('src','images/'+self.picture.mouth);
    };
    self.changeItem = function  (type,target) {
        self.picture[type] = target;
        self.initialPicture();
        self.pushStorage();
    };    
    self.onChange = function  () {
        var select = $('.select');
        select.on('change', function(){
            var type = $(this).data('type');
            var target = $(this).find($('option:selected')).data('item');
            self.changeItem(type,target);
        });
    };

    self.renderSelect = function () {
        $.each(self.media, function( index, value ) {
            var type = index;
            $('body').append(`<select class="select" data-type="${type}"></select>`);
            $.each(value, function( index, value ) {
                // console.log(index);
                $(`[data-type="${type}"]`).append(`<option data-item="${value}">${type} ${index+1}</option>`);
            });
        });
     
    };

    self.pushStorage = function(){
        sessionStorage.setItem('picture', JSON.stringify(self.picture));
    };

    self.loadPicture = function () {
        if (sessionStorage.getItem('picture')) {
            self.picture = JSON.parse(sessionStorage.getItem('picture'));   
            self.initialPicture();         
        } else {
            self.initialPicture();
        };
    };


    self.init = function () {
        self.renderSelect();        
        self.loadPicture();
        self.onChange();
    }();
}

var faceView = new FaceView();

// 1

// $('.select1').on('change', function(){
//     var self = $(this);
//     var target = self.find($('option:selected')).data('img');
//     console.log(target); 
//     $('.img-wrap img').attr('src','images/'+images[target-1]);
// });

// $('.select2').on('change', function(){
//     var self = $(this);
//     var target = self.find($('option:selected')).data('color');
//     console.log(colors[target]); 
//     $('.square').css('background',colors[target-1]);   
// });

// 2

// var media = {
//     img : ['pic1.jpg','pic2.jpg','pic3.jpg'],
//     color : ['transparent','red','blue','black'],
// };

// var wind = {
//     img: 'pic1.jpg',
//     color : 'transparent'
// };

// function initialWind () {
//     $('.img-wrap img').attr('src','images/'+wind.img);
//     $('.square').css('background', wind.color);
// }

// initialWind ();

// function changeItem (type,target) {
//     wind[type] = media[type][target-1];
//     initialWind ();
// }



// $('.select').on('change', function(){
//     var type = $(this).data('type');
//     var target = $(this).find($('option:selected')).data('item');
//     changeItem(type,target);
// });

// 3

// var global = {
//     media: {
//         img : ['pic1.jpg','pic2.jpg','pic3.jpg'],
//         color : ['transparent','red','blue','black'],
//     },
//     wind: {
//         img: 'pic1.jpg',
//         color : 'transparent'
//     },
//     initialWind: function () {
//         $('.img-wrap img').attr('src','images/'+this.wind.img);
//         $('.square').css('background', this.wind.color);
//     },
//     changeItem: function  (type,target) {
//         this.wind[type] = this.media[type][target-1];
//         this.initialWind();
//     }    

// };

// global.initialWind();






// $('.select').on('change', function(){
//     var type = $(this).data('type');
//     var target = $(this).find($('option:selected')).data('item');
//     global.changeItem(type,target);
// });

// 4

// var global = {
//     media: {
//         img : ['pic1.jpg','pic2.jpg','pic3.jpg'],
//         color : ['transparent','red','blue','black'],
//     },
//     wind: {
//         img: 'pic1.jpg',
//         color : 'transparent'
//     },
//     initialWind: function () {
//         $('.img-wrap img').attr('src','images/'+this.wind.img);
//         $('.square').css('background', this.wind.color);
//          this.onChange();
//     },
//     changeItem: function  (type,target) {
//         this.wind[type] = this.media[type][target-1];
//         this.initialWind();
//     },    
//     onChange: function  () {
//         var select = $('.select');
//         select.on('change', function(){
//             var type = $(this).data('type');
//             var target = $(this).find($('option:selected')).data('item');
//             global.changeItem(type,target);
//         });
//     },    


// };

// global.initialWind();

// 5

// function FaceView () {
//     var self = this;
//     self.media = {
//         face : ['head.png','head.png','head.png','head.png'],        
//         mouth : ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'],

//     };
//     self.picture = {
//         face: 'head.png',
//         mouth : '1.png'
//     };    
//     self.initialPicture = function () {
//         $('.face').attr('src','images/'+self.picture.face);
//         $('.mouth').attr('src','images/'+self.picture.mouth);
//     };
//     self.changeItem = function  (type,target) {
//         self.picture[type] = self.media[type][target-1];
//         self.initialPicture();
//     };    
//     self.onChange = function  () {
//         var select = $('.select');
//         select.on('change', function(){
//             var type = $(this).data('type');
//             var target = $(this).find($('option:selected')).data('item');
//             self.changeItem(type,target);
//         });
//     };

//     self.init = function () {
//         self.initialPicture();
//         self.onChange();
//     }();
// }

// var faceView = new FaceView();