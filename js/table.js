// Populate the Table:
var id = ['globe', 'laughing emoji', 'hot cup', 'sun', 'note'];
var icon = ['<i class="bi bi-globe2"></i>', '<i class="bi bi-emoji-laughing"></i>', '<i class="bi bi-cup-hot-fill"></i>', '<i class="bi bi-sun"></i>', '<i class="bi bi-music-note-beamed"></i>'];
var description = ['The Globe', 'Smiley', 'Coffee', 'Sun', 'Music'];
var info = ['Love traveling the world', 'Having a good time', 'Enjoying a cup or two in the morning', 'Always seeking good weather', 'Listening to music'];
var image = ['<img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxOS0xMDA4NC5qcGc.jpg" alt="map" height="50" width="60"/>',
'<img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BkcG9zdGVyMS1sb2MyMDAzNjc0NDc4LWltYWdlXzQuanBn.jpg" alt="joke" height="50" width="60"/>',
'<img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjY5LTEwOC12LWwxYWR3cjJkLmpwZw.jpg" alt="coffee height="50" width="60"/>',
'<img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjbG91ZHNfc2t5X2JsdWVfd2hpdGVfMTEtaW1hZ2Uta3liZHk1MjEuanBn.jpg" alt="sun" height="50" width="60"/>',
'<img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BkMTA5LXBkb2JqMDA4NDgtaW1hZ2UuanBn.jpg" alt="musicplayer height="50" width="60"/>'];

var myTable = document.getElementById("personalTable").getElementsByTagName("tbody")[0];
for (let i = 0; i < 5; i++) {
    myTable.insertRow().innerHTML =
    "<td>" +id[i]+ "</td>"+
    "<td>" +icon[i]+ "</td>"+
    "<td>" +description[i]+ "</td>"+
    "<td>" +info[i]+ "</td>"+
    "<td>" +image[i]+ "</td>";
}



// Image links using jQuery:
$('img').each(function() {
    var currentImage = $(this);
    currentImage.wrap("<a target='_blank' href='" + currentImage.attr("src") + "' </a>");
});



// Hover using jQuery:
$("tr:odd").hover(function() {      //tbody tr:odd if thead shouldn't be included.
    $(this).css("color", "blue");
}, function() {
    $(this).css("color", "");
});
