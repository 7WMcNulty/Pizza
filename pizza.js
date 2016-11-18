class Pizza{
  //type constructor below
  constructor(s,m,v){
    this.size = s;
    this.meatToppings = m;
    this.vegetableToppings = v;
  }


  //type instance functions below
  sizeCost(){
    if(this.size == "S"){
      return 7.99;
    }
    else if(this.size == "M"){
      return 9.99;
    }
    else if(this.size == "L"){
      return 12.99;
    }
    else if(this.size == "XL"){
      return 15.99;
    }
  }
  toppingCost(top){
    if(top == "meat"){
      return 0.99*this.meatToppings.length;
    }
    else if (top == "veggie"){
      return 0.50*this.vegetableToppings.length;
    }
  }
  price(){
    return this.sizeCost() + this.toppingCost("meat") + this.toppingCost("veggie");
  }
  addTopping(toptype,newtop){
    if(toptype=="meat"){
      this.meatToppings.push(newtop);
    }
    else if(toptype=="veggie"){
      this.vegetableToppings.push(newtop);
    }
  }
    removeTopping(toptype,newtop){
      if(toptype=="meat"){
        let c = this.meatToppings.indexOf(newtop);
        var removed = this.meatToppings.splice(c,1);
      }
      else if(toptype=="veggie"){
        let c = this.vegetableToppings.indexOf(newtop);
        var removed = this.vegetableToppings.splice(c,1);
      }
    }
  //type class functions below
  static promotionalDeal(pizza,percent){
    let d = 100-percent;
    d = d/100;
    return pizza.price()*d;
  }

}
