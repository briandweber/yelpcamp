var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Swiss_National_Park_131.JPG/220px-Swiss_National_Park_131.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dui non enim placerat, iaculis eleifend nulla vestibulum. Suspendisse potenti. Integer varius, urna vel fringilla aliquam, felis diam pretium ligula, vel semper sapien nibh quis dolor. Fusce augue est, bibendum nec convallis nec, dignissim et ante. Etiam elementum nulla ut sapien volutpat vestibulum. Fusce dignissim tempor massa, fermentum lobortis odio vestibulum et. Phasellus vel lacus vel mauris pulvinar pharetra. Maecenas luctus dignissim dui at ullamcorper. Maecenas porta odio vitae purus bibendum facilisis vel quis sem."
        },{
            name: "Dessert Mesa",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Swiss_National_Park_131.JPG/220px-Swiss_National_Park_131.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dui non enim placerat, iaculis eleifend nulla vestibulum. Suspendisse potenti. Integer varius, urna vel fringilla aliquam, felis diam pretium ligula, vel semper sapien nibh quis dolor. Fusce augue est, bibendum nec convallis nec, dignissim et ante. Etiam elementum nulla ut sapien volutpat vestibulum. Fusce dignissim tempor massa, fermentum lobortis odio vestibulum et. Phasellus vel lacus vel mauris pulvinar pharetra. Maecenas luctus dignissim dui at ullamcorper. Maecenas porta odio vitae purus bibendum facilisis vel quis sem."
        },{
            name: "Canyon Floor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Swiss_National_Park_131.JPG/220px-Swiss_National_Park_131.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dui non enim placerat, iaculis eleifend nulla vestibulum. Suspendisse potenti. Integer varius, urna vel fringilla aliquam, felis diam pretium ligula, vel semper sapien nibh quis dolor. Fusce augue est, bibendum nec convallis nec, dignissim et ante. Etiam elementum nulla ut sapien volutpat vestibulum. Fusce dignissim tempor massa, fermentum lobortis odio vestibulum et. Phasellus vel lacus vel mauris pulvinar pharetra. Maecenas luctus dignissim dui at ullamcorper. Maecenas porta odio vitae purus bibendum facilisis vel quis sem."
        },{
            name: "Hurrican Ridge",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Swiss_National_Park_131.JPG/220px-Swiss_National_Park_131.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dui non enim placerat, iaculis eleifend nulla vestibulum. Suspendisse potenti. Integer varius, urna vel fringilla aliquam, felis diam pretium ligula, vel semper sapien nibh quis dolor. Fusce augue est, bibendum nec convallis nec, dignissim et ante. Etiam elementum nulla ut sapien volutpat vestibulum. Fusce dignissim tempor massa, fermentum lobortis odio vestibulum et. Phasellus vel lacus vel mauris pulvinar pharetra. Maecenas luctus dignissim dui at ullamcorper. Maecenas porta odio vitae purus bibendum facilisis vel quis sem."
        }
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }else{
            console.log("Removed Campgrounds");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if (err){
                        console.log(err);
                    }else{
                        console.log("Added a campground");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if (err){
                                    console.log(err);
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        }
    });
    //add a few comments
}

module.exports = seedDB;