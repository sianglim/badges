     
       if (!localStorage) {
           console.log("localStorage not supported");
       }


       for (var i = 0; i < localStorage.length; i++) {
           console.log("!" + localStorage.getItem(localStorage.key(i)));
       }

        //Badge API

       var badgeAPI = (function() {

           var badgeList;

           //creates a badge and saves it in localStorage
           function createBadge(badgeName, badgeImage, pageName) {
               this.badgeName = badgeName;
               this.badgeImage = badgeImage;
               this.pageName = pageName;
               console.log(this.badgeName + this.badgeImage + this.pageName);

               if (!localStorage.badgeName) {
                   //needs to be saved as an object literal or array
                   localStorage[this.badgeName] = badgeName;
                   localStorage[this.badgeImage] = badgeImage;
                   console.log("Badge added to localStorage: " + localStorage[this.badgeName]);
                   console.log('<img src="' + localStorage[this.badgeImage] + '-badge.png" ' + 'class="badge" />' + " Badge awarded: " + this.badgeName);
                   return "Badge created: " + localStorage[this.badgeName];

               } else {
                   //don't rewrite badge if it exists  
                   console.log("Badge exists:" + this.badgeName + ". Not overwritten.");
               }
           }

           function getPreviousBadge() {
               //var previousBadge = localStorage.previousBadge;
               document.getElementById("previousbadge").innerHTML = '<img src="img/badge.png" class="badge" />' + "You recently received the " + localStorage.previousBadge + " badge";
           }

           function showBadge(badgeName) {
               //get all badges in localStorage   
               this.badgeName = badgeName;
               console.log('<img src="' + localStorage[this.badgeName] + '-badge.png" ' + 'class="badge" />' + " Badge awarded: " + this.badgeName);
               //document.getElementById("badge").innerHTML = '<img src="' + localStorage[this.badgeName] + '.png" ' + 'class="badge" />' + " Badge awarded: " + this.badgeName;
               //return "Badge shown: " + this.badgeName;
               return '<img src="img/' + localStorage[this.badgeName] + '-badge.png" ' + 'class="badge" />' + " Badge awarded: " + this.badgeName;
           }

           //debug tools for testing       


           return {
               createBadge: createBadge,
               showBadge: showBadge,
               clearBadges: localStorage.clear()
           };
       })();



       //console.log(badgeAPI.createBadge("a", "b", "c"));
       //console.log(badgeAPI.createBadge("anotherBadge", "b", "c"));
       //console.log(badgeAPI.createBadge("newBadge", "b", "c"));
       


        //alert(localStorage.badgeName);  
       $(document).ready(function() {
           
badgeAPI.createBadge("safety", "safety", "safetypage");
badgeAPI.createBadge("traveller", "traveller", "publictransportpage");
//badgeAPI.showBadge("traveller");
           
           $("#previousBadge").fadeIn(20000);
           //badgeAPI.showBadge("newBadge");
           document.getElementById("badge").innerHTML += badgeAPI.showBadge("safety");
           document.getElementById("badge").innerHTML += badgeAPI.showBadge("traveller");
       });
