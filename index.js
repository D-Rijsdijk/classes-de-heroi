class herosSheet {
    constructor(herosName, herosAge, herosType){
        this.herosName = herosName;
        this.herosAge = herosAge;
        this.herosType = herosType;
    }
    
    attack(){
        let herosAttack;

        switch(this.herosType){
            case "mago":
               herosAttack = "magia";
               break;
               
            case "guerreiro":
                herosAttack = "espada";
                break;

            case "monge":
                herosAttack = "artes marciais";
                break;

            case "ninja":
                herosAttack = "shuriken";
                break;
        }

        console.log("O " +this.herosType+ " atacou usando " +herosAttack);
    }
}

let hero01 = new herosSheet("Pato Donald", 25, "mago");
let hero02 = new herosSheet("Huguinho", 13, "guerreiro");
let hero03 = new herosSheet("Zézinho", 13, "monge");
let hero04 = new herosSheet("Luisinho", 13, "ninja");

hero01.attack()
hero02.attack()
hero03.attack()
hero04.attack()