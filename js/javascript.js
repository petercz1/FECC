/*global $ */

console.log("my script has loaded");

$('#picture_button').click(swap_picture);

function swap_picture() {
    console.log("just been clicked");
    $('img').toggle();
}
