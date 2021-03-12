class QuestionClass{
    constructor(){

    }
    async start(){


    }
    display(){
        var title=createElement("h2");
        title.html("My Quiz Game")
        title.position(430,0)
        var title1=createElement("h3");
        var option1=createElement("h3");
        var option2=createElement("h3");
        var option3=createElement("h3");
        var option4=createElement("h3");
        title1.html("Question:-What starts and ends with the letter 'E',but has only one letter ");
        option1.html("2)Envelope")
        option2.html("1)Everyone")
        option3.html("3)Estimate")
        option4.html("4)Example")
        title1.position(20,100)
        option1.position(20,140)
        option2.position(20,120)
        option3.position(20,160)
        option4.position(20,180)
         input=createInput("Name")
         input1=createInput("Enter correct option no:")
        var buttun=createButton("Submit")
         greeting=createElement("h3")

        input.position(50,300)
        input1.position(300,300)
        buttun.position(250,350)
        buttun.mousePressed(()=>{
            input.hide();
            input1.hide();
            title1.hide();
            buttun.hide();
            option1.hide();
            option2.hide();
            option3.hide();
            option4.hide();
            var name1=input.value()
            contestantCount+=1
            
            
            player.update(this.name);
            
            player.updateCount(contestantCount);

        })
    }

}