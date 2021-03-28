class Student{
    constructor(firstName, lastName,year){
        this.firstName=firstName;
        this.lastName=lastName;
        this.year=year
        this.tardies=0
        this.scores=[]

    }
    fullName(){
        return `your full name is ${this.firstName} ${this.lastName}`;

    }
 markeLate(){
     this.tardies+=1;
     if(this.tardies>=3){
         return "YOU ARE EXPELLED!!!"
     }
 }
  addScore(score){
      this.scores.push(Score);
      return this.scores
  }
  static EnrollStudents(){
      return "Hi"
  }

}


