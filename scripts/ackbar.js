// Description:
//   None
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Author:
//   brilliantfantastic

ackbars = [
    "http://i.imgur.com/OTByx1b.jpg",
    "http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg",
    "http://6.asset.soup.io/asset/0610/8774_242b_500.jpeg",
    "http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg",
    "http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg",
    "http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg",
    "http://www.millionaireplayboy.com/mpb/wp-content/uploads/2011/01/1293668358_bottom_trappy.jpeg",
    "http://31.media.tumblr.com/tumblr_lqrrkpAqjf1qiorsyo1_500.jpg",
    "https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/",
    "http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28",
    "http://31.media.tumblr.com/tumblr_lmn8d1xFXN1qjs7yio1_500.jpg",
    "http://s3.amazonaws.com/kym-assets/photos/images/newsfeed/000/050/636/Ackbar-Frap.gif?1318992465",
    "http://s3.amazonaws.com/kym-assets/photos/images/newsfeed/000/003/366/Trap-Ackbar.png?1318992465"
];

module.exports = function (robot) {
    robot.hear(/it['’]?s a trap\b/i, function (msg) {
        msg.send(msg.random(ackbars));
    });
};
