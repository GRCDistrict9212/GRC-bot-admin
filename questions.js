(function(){
    
    var userDataRef = firebase.database().ref("grc-db/Questions").orderByKey();
    userDataRef.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();              // childData will be the actual contents of the child
            
            var telegramUsername = childData.telegramUsername;
            var question_val = childData.question;
            var date_val = childData.date;

            $("#table_body").append("<tr>");
            $("#table_body").append("<td id='telegramUsername' class='date'>" + telegramUsername + "</td>");
            $("#table_body").append("<td id='question' class='question'>" + question_val + "</td>");
            $("#table_body").append("<td id='date' class='date'>" + date_val + "</td>");
            $("#table_body").append("<td id='button' class='answerButton'><a href=''>Answer</a></td>");
            $("#table_body").append("</tr>");
        });
    });
}());