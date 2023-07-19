class LavoratoreAutonomo{

    constructor(
        public codRedd:number, 
        public redditoAnnuoLordo:number,
        ){}


     getUtileTasse():number{
        let inpsSconto = (this.getTasseInps() * this.codRedd)/100 
        let irpefSconto =  (this.getTasseIrpef() * this.codRedd) /100
        return inpsSconto + irpefSconto
     }   

     getTasseInps():number{
        return this.redditoAnnuoLordo * 0.23
     }

     getTasseIrpef():number{
        

        if(this.redditoAnnuoLordo<= 15000){
            return this.redditoAnnuoLordo * 0.23
        }
        else if(this.redditoAnnuoLordo> 15001 && this.redditoAnnuoLordo <= 28000){
            return this.redditoAnnuoLordo * 0.27
        }
        else if(this.redditoAnnuoLordo> 28001 && this.redditoAnnuoLordo <= 55000){
            return this.redditoAnnuoLordo * 0.38
        }
        else if(this.redditoAnnuoLordo> 55001 && this.redditoAnnuoLordo <= 75000){
            return this.redditoAnnuoLordo * 0.41
        }
        else if(this.redditoAnnuoLordo> 75001 && this.redditoAnnuoLordo <= 125000){
            return this.redditoAnnuoLordo * 0.43
        }
        else{
            return this.redditoAnnuoLordo * 0.45
        }
     }

     getRedditoAnnoNetto():number{
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }

}



let luigi = new LavoratoreAutonomo(5,6000)
console.log('-----Luigi----');
console.log(luigi);
console.log('Tasse Inps:' ,luigi.getTasseInps());
console.log('Tasse Irpef:',luigi.getTasseIrpef());
console.log('Utile tasse:', luigi.getUtileTasse());
console.log('Reddito annuo netto:', luigi.getRedditoAnnoNetto());

console.log('===============================');


let mario = new LavoratoreAutonomo(1,370000)
console.log('-----mario----');
console.log(mario);
console.log('Tasse Inps:' ,mario.getTasseInps());
console.log('Tasse Irpef:',mario.getTasseIrpef());
console.log('Utile tasse:', mario.getUtileTasse());
console.log('Reddito annuo netto:', mario.getRedditoAnnoNetto());


