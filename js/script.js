/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songList = [];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageList = [];
var artistList = [];
var lengthList = [];
var linkList = [];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    var image = $("#images").val();
    imageList.push(image)
    imageList.forEach(function(image){
        $("#images").append("<img src="+image+"></img>")
    }); 
    var song = $("#song").val();
    songList.push(song)
    songList.forEach(function(song){
       $("#songs").append("<li>"+song+"</li>") 
    });
    var artist = $("#artist").val();
    artistList.push(artist)
    artistList.forEach(function(artist){
        $("#artists").append("<li>"+artist+"</li>")
    });
    var length = $("#lengths").val();
    lengthList.push(length);
    lengthList.forEach(function(length){
        $("#lengths").append("<li>"+length+"</li>")
    });
    var link = $("#links").val();
    linkList.push(link)
    linkList.forEach(function(link){
        $("#links").append("<a href="+link+"> watch now </a>")
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
