class ContestantClass {
    constructor(){
      this.index = null;
      this.answer =0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "contestants/contestant";
      answer=input1.value();
      name=input.value();
      database.ref(contestantIndex).set({
        name:name,
        answer:answer
      });
    }
    updateAns(){
      database.ref('/').update({
        ans:"lose"
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }