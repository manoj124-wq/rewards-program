const data = [{"id":1,"price":"185"},
{"id":2,"price":"115"},
{"id":3,"price":"674"},
{"id":4,"price":"322"},
{"id":5,"price":"1016"},
{"id":6,"price":"16"},
{"id":7,"price":"181"},
{"id":8,"price":"3"},
{"id":9,"price":"120"},
{"id":10,"price":"558"},
{"id":11,"price":"797"},
{"id":12,"price":"469"},
{"id":13,"price":"124"},
{"id":14,"price":"234"},
{"id":15,"price":"1081"},
{"id":16,"price":"1126"},
{"id":17,"price":"224"},
{"id":18,"price":"435"},
{"id":19,"price":"1049"},
{"id":20,"price":"781"},
{"id":21,"price":"982"},
{"id":22,"price":"585"},
{"id":23,"price":"583"},
{"id":24,"price":"1097"},
{"id":25,"price":"127"},
{"id":26,"price":"218"},
{"id":27,"price":"467"},
{"id":28,"price":"521"},
{"id":29,"price":"618"},
{"id":30,"price":"986"},
{"id":31,"price":"1105"},
{"id":32,"price":"723"},
{"id":33,"price":"533"},
{"id":34,"price":"24"},
{"id":35,"price":"30"},
{"id":36,"price":"531"},
{"id":37,"price":"1142"},
{"id":38,"price":"1030"},
{"id":39,"price":"1241"},
{"id":40,"price":"833"},
{"id":41,"price":"1242"},
{"id":42,"price":"93"},
{"id":43,"price":"229"},
{"id":44,"price":"101"},
{"id":45,"price":"744"},
{"id":46,"price":"771"},
{"id":47,"price":"477"},
{"id":48,"price":"779"},
{"id":49,"price":"862"},
{"id":50,"price":"559"},
{"id":51,"price":"771"},
{"id":52,"price":"997"},
{"id":53,"price":"485"},
{"id":54,"price":"1078"},
{"id":55,"price":"666"},
{"id":56,"price":"1175"},
{"id":57,"price":"1062"},
{"id":58,"price":"527"},
{"id":59,"price":"652"},
{"id":60,"price":"657"},
{"id":61,"price":"775"},
{"id":62,"price":"1094"},
{"id":63,"price":"265"},
{"id":64,"price":"906"},
{"id":65,"price":"1155"}]
    
function getRewards() {
   for(let i=0; i<data.length; i++) {
    const price = Number(data[i].price); 
    console.log("Price: ",price,", reward points are: ",calculateRewardPoints(price));
  }
}
 
function calculateRewardPoints(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}

getRewards();
