---
layout: post
title: BlocJams Angular
feature-img: "img/feature_img_2.png"
thumbnail-path: "img/bloc_jams_angular_3x4.png"
social-share: "img/bloc-jams_63x120.png"
github: "https://github.com/capncapes/bloc-jams-angular"
short-description: BlocJams is a music player built with AngularJS.

---

After building a music player web application with HTML, CSS, and jQuery, I refactored it and produced BlocJams Angular, my first project built with AngularJS.

***

### Requirements
The requirements for this project were to refactor my original BlocJams project in AngularJS to make the application load quicker and to make it easier to manage and grow.

One of the changes involved adding an Angular filter to display the time elapsed on the song's player bar.

{% highlight javascript %}
(function() {
    function timecode() {
        return function(seconds) {
            var seconds = Number.parseFloat(seconds);
            
            if (Number.isNaN(seconds)) {
                return '0:00';
            }
            
            var wholeSeconds = Math.floor(seconds);
            var minutes = Math.floor(wholeSeconds / 60);
            var remainingSeconds = wholeSeconds % 60;

            var output = minutes + ':';

            if (remainingSeconds < 10) {
                output += '0';   
            }

            output += remainingSeconds;
            
            return output;
        };
    }
    
    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();
{% endhighlight %}

### Conclusion
This project introduced me to AngularJS, and I have to say I really like the organized structure of this framework. If BlocJams were a larger application, there would be a more noticeable difference in page load speed between my original project and this one.

<a href="https://github.com/capncapes/bloc-jams-angular" target="_blank">Be sure to check out this project on GitHub!</a>