class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }class Item {
            constructor(name, sellIn, quality){
              this.name = name;
              this.sellIn = sellIn;
              this.quality = quality;
            }
          }
          
          const ItemTypes = {
            BRIE: 'Aged Brie',
            PASS: 'Backstage passes to a TAFKAL80ETC concert',
            HAND: 'Sulfuras, Hand of Ragnaros'
          };
          
          function UpdateBrie(item) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
              item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0 && item.quality < 50) {
                  item.quality = item.quality + 1;
            }
          }
          function UpdatePass(item) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
                  if (item.sellIn < 11 && item.quality < 50) {
                      item.quality = item.quality + 1;
                  }
                  if (item.sellIn < 6 && item.quality < 50) {
                      item.quality = item.quality + 1;
                  }
              }
              item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                  item.quality = item.quality - item.quality;
                }
            }
          function UpdateNormal(item) {
            if (item.quality > 0) {
                  item.quality = item.quality - 1;
                }
              item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0 && item.quality > 0) {
                 item.quality = item.quality - 1;
            }
          }
          
          function UpdateHand() {
          }
          
          class Shop {
            constructor(items=[]){
              this.items = items;
            }
            updateQuality() {
              for (const item of this.items) {
                if (item.name === ItemTypes.BRIE) UpdateBrie(item);
                else if (item.name === ItemTypes.HAND) UpdateHand(item); 
                else if (item.name === ItemTypes.PASS) UpdatePass(item);
                else UpdateNormal(item);
              }
              return this.items;
            }
          }
          
          module.exports = {
            Item,
            Shop
          }
          
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
