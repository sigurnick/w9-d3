declare class LavoratoreAutonomo {
    codRedd: number;
    redditoAnnuoLordo: number;
    constructor(codRedd: number, redditoAnnuoLordo: number);
    getUtileTasse(): number;
    getTasseInps(): number;
    getTasseIrpef(): number;
    getRedditoAnnoNetto(): number;
}
declare let luigi: LavoratoreAutonomo;
declare let mario: LavoratoreAutonomo;
